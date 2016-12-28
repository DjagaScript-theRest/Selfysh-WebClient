import { Component, OnInit } from '@angular/core';

import { IPost } from './post';
import { PostService } from './post.service';

@Component({
    templateUrl: 'app/posts/post-list.component.html',
})

export class PostListComponent implements OnInit {
    posts: IPost[]

    constructor(private _postService: PostService) {
    }

    ngOnInit(): void {
        this._postService.getPosts()
            .subscribe(posts => this.posts = posts);
    }

}