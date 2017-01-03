"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var post_service_1 = require("./post.service");
var user_service_1 = require("./../services/user-service");
var constants_1 = require("./../constants/constants");
var PostDetailsComponent = (function () {
    function PostDetailsComponent(_route, _postService, _userService) {
        this._route = _route;
        this._postService = _postService;
        this._userService = _userService;
        this.userUsername = null;
        this.apiEndPoint = constants_1.Constants.imagesUrl;
    }
    PostDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var id = params['id'];
            _this.postId = id;
            _this.postUrl = constants_1.Constants.hostUrl + "api/posts/" + id;
            _this.getPost(id);
        });
    };
    PostDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PostDetailsComponent.prototype.getPost = function (id) {
        var _this = this;
        this._postService.getPostById(id).subscribe(function (post) {
            _this.post = post;
            _this._userService.getLoggedUser()
                .subscribe(function (res) {
                if (res.user) {
                    _this.userUsername = res.user.username;
                    if (_this.post.usersLiked.indexOf(_this.userUsername) >= 0) {
                        _this.isVoted = true;
                    }
                    _this.hasVoting = true;
                }
            });
        });
    };
    PostDetailsComponent.prototype.scrollDown = function () {
        window.scrollTo(0, document.body.scrollHeight);
    };
    PostDetailsComponent.prototype.addComment = function () {
        this._postService.addComment(this.postUrl, this.commentContent, this.userUsername)
            .map(function (r) { return r.json(); })
            .subscribe(function (result) {
            console.log(result);
        });
    };
    PostDetailsComponent.prototype.onVoted = function (value) {
        var _this = this;
        this._userService.getLoggedUser()
            .subscribe(function (res) {
            var username = res.user.username;
            _this._postService.likePost(_this.postId, username)
                .subscribe(function (resp) {
                _this.isVoted = true;
                _this.post.likes = resp.likes;
            }, function (err) {
                console.log(err);
            });
        });
    };
    return PostDetailsComponent;
}());
PostDetailsComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/posts/post-details.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        post_service_1.PostService,
        user_service_1.UserService])
], PostDetailsComponent);
exports.PostDetailsComponent = PostDetailsComponent;
//# sourceMappingURL=post-details.component.js.map