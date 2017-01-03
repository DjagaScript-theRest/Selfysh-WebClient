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
var PostDetailsComponent = (function () {
    function PostDetailsComponent(_route, _postService) {
        this._route = _route;
        this._postService = _postService;
    }
    PostDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var id = params['id'];
            _this.postUrl = 'http://localhost:1337/api/posts/' + id;
            _this.getPost(id);
        });
    };
    PostDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PostDetailsComponent.prototype.getPost = function (id) {
        var _this = this;
        this._postService.getPostById(id).subscribe(function (post) { return _this.post = post; });
    };
    PostDetailsComponent.prototype.scrollDown = function () {
        window.scrollTo(0, document.body.scrollHeight);
    };
    PostDetailsComponent.prototype.addComment = function () {
        this._postService.addComment(this.postUrl, this.commentContent)
            .map(function (r) { return r.json(); })
            .subscribe(function (result) {
            console.log(result);
        });
    };
    return PostDetailsComponent;
}());
PostDetailsComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/posts/post-details.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        post_service_1.PostService])
], PostDetailsComponent);
exports.PostDetailsComponent = PostDetailsComponent;
//# sourceMappingURL=post-details.component.js.map