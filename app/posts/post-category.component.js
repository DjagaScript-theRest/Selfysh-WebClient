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
var constants_1 = require("./../constants/constants");
var PostCategoryComponent = (function () {
    function PostCategoryComponent(_route, _router, _postService) {
        this._route = _route;
        this._router = _router;
        this._postService = _postService;
        this.apiEndPoint = constants_1.Constants.imagesUrl;
    }
    PostCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var category = params['category'];
            _this.getPostsByCategory(category);
        });
    };
    PostCategoryComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PostCategoryComponent.prototype.getPostsByCategory = function (category) {
        var _this = this;
        this._postService.getPostsByCategory(category).subscribe(function (posts) { return _this.posts = posts; });
    };
    return PostCategoryComponent;
}());
PostCategoryComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/posts/post-list.component.html',
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        post_service_1.PostService])
], PostCategoryComponent);
exports.PostCategoryComponent = PostCategoryComponent;
//# sourceMappingURL=post-category.component.js.map