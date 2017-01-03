import { Component, OnInit } from '@angular/core';

import { IPost } from './post';
import { PostService } from './post.service';
import { Constants } from './../constants/constants';

@Component({
    templateUrl: 'app/posts/post-list.component.html',
})

export class PostListComponent implements OnInit {
    public apiEndPoint: String = Constants.imagesUrl;
    posts: IPost[]

    constructor(private _postService: PostService) {
    }

    ngOnInit(): void {
        this._postService.getPosts()
            .subscribe(posts => this.posts = posts);
    }

}