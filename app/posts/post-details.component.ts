import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { IPost } from './post';
import { PostService } from './post.service';
import { UserService } from './../services/user-service';
import { Constants } from './../constants/constants';


@Component({
    templateUrl: 'app/posts/post-details.component.html'
})
export class PostDetailsComponent implements OnInit, OnDestroy {
    post: IPost;
    commentContent: string;
    postUrl: string;
    isVoted: boolean;
    hasVoting: boolean;
    apiEndPoint: string = Constants.imagesUrl;
    private sub: Subscription;
    private postId: string;

    constructor(private _route: ActivatedRoute,
        private _postService: PostService,
        private _userService: UserService) {
    }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = params['id'];
                this.postId = id;
                this.postUrl = `${Constants.hostUrl}api/posts/` + id;
                this.getPost(id);
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getPost(id: string) {
        this._postService.getPostById(id).subscribe(
            post => {
                this.post = post;
                this._userService.getLoggedUser()
                    .subscribe((res) => {
                        if (res.user) {
                            let username = res.user.username;
                            if (this.post.usersLiked.indexOf(username) >= 0) {
                                this.isVoted = true;
                            }
                            this.hasVoting = true;
                        }
                    });
            });
    }

    scrollDown() {
        window.scrollTo(0, document.body.scrollHeight);
    }
    addComment() {
        this._postService.addComment(this.postUrl, this.commentContent)
            .map(r => r.json())
            .subscribe((result) => {
                console.log(result);
            });
    }

    public onVoted(value: any) {
        this._userService.getLoggedUser()
            .subscribe((res) => {
                let username = res.user.username;

                this._postService.likePost(this.postId, username)
                    .subscribe((resp) => {
                        this.isVoted = true;
                        this.post.likes = resp.likes;
                    }, (err) => {
                        console.log(err);
                    })
            });
    }
}
