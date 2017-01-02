import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';

import { IPost } from './post';
import { PostService } from './post.service';


@Component({
    templateUrl: 'app/posts/post-details.component.html'
})
export class PostDetailsComponent implements OnInit, OnDestroy {
    post: IPost;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
                private _postService: PostService) {
    }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = params['id'];
                this.getPost(id);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getPost(id: string) {
        this._postService.getPostById(id).subscribe(
            post => this.post = post);
    }

    scrollDown() {
        window.scrollTo(0,document.body.scrollHeight);
    }
}
