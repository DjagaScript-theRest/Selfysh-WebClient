import { Component, Input } from '@angular/core';

import { UserService } from './../../services/user-service';
import { PostService } from './../post.service';
import { PostUploadComponent } from './../shared/post-upload.component';
import { IPost } from './../post';

const DEFAULT_CATEGORY: String = 'other';

class Post implements IPost {
    constructor(public _id: String,
        public title: String,
        public category: String,
        public author: String,
        public createdOn: Date,
        public imageName: String,
        public imagePath: String,
        public likes: Number,
        public comments: String[] = null,
    ) { }
}

@Component({
    moduleId: module.id,
    templateUrl: './post.component.html'
})
export class PostCreateComponent {
    private author: String;
    private imageName: String;
    private imagePath: String;
    private post: Post;

    public title: String;
    public selectedCategory: String = DEFAULT_CATEGORY;
    public categories: String[];
    public error: Boolean;
    public errorMessage: String;

    constructor(private userService: UserService, private postService: PostService) {
        this.categories = ['fun', 'chilling', 'crazy', 'extreme', 'party',
            'celebration', 'kifla', 'other'];
    }

    public createPost(): void {
        if (this.imageName == '' || this.imagePath == '') {
            this.handleError('No image uploaded. Please upload image before posting!');
            return;
        }

        if (!this.title || this.title === '') {
            this.handleError('Title is missing!');
            return;
        }

        this.userService.getLoggedUser()
            .subscribe((res) => {
                if (!res.user) {
                    this.handleError('No user is logged in!');
                    return;
                }

                let author = res.user.username;
                let post = new Post(null, this.title, this.selectedCategory, author, new Date(), this.imageName, this.imagePath, 0, 0);
                this.postService.createPost(post)
                    .subscribe((dbPost) => { this.userService.addPost(author, dbPost).subscribe((resp) => console.log(resp), (err) => console.log(err)) });
            });
    }

    public onUploaded(file: any): void {
        if (file !== undefined) {
            this.imageName = file.filename;
            this.imagePath = file.path;
        }
    }

    private handleError(msg: String) {
        this.error = true;
        this.errorMessage = msg;
        return setTimeout(() => {
            this.error = false;
        }, 2500);
    }
}