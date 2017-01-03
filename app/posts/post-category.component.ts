import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { IPost } from './post';
import { PostService } from './post.service';
import { Constants } from './../constants/constants';

@Component({
    templateUrl: 'app/posts/post-list.component.html',
})

export class PostCategoryComponent implements OnInit {
    public apiEndPoint: String = Constants.imagesUrl;
    posts: IPost[];
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _postService: PostService) {
    }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let category = params['category'];
                this.getPostsByCategory(category);
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getPostsByCategory(category: string) {
        this._postService.getPostsByCategory(category).subscribe(
            posts => this.posts = posts);
    }


}