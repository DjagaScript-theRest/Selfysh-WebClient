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
var user_service_1 = require("./../../services/user-service");
var post_service_1 = require("./../post.service");
var DEFAULT_CATEGORY = 'other';
var Post = (function () {
    function Post(title, category, author, createdOn, imageName, imagePath, likes, dislikes, comments) {
        if (comments === void 0) { comments = null; }
        this.title = title;
        this.category = category;
        this.author = author;
        this.createdOn = createdOn;
        this.imageName = imageName;
        this.imagePath = imagePath;
        this.likes = likes;
        this.dislikes = dislikes;
        this.comments = comments;
    }
    return Post;
}());
var PostCreateComponent = (function () {
    function PostCreateComponent(userService, postService) {
        this.userService = userService;
        this.postService = postService;
        this.selectedCategory = DEFAULT_CATEGORY;
        this.categories = ['fun', 'chilling', 'crazy', 'extreme', 'party',
            'celebration', 'kifla', 'other'];
    }
    PostCreateComponent.prototype.createPost = function () {
        var _this = this;
        if (this.imageName == '' || this.imagePath == '') {
            this.handleError('No image uploaded. Please upload image before posting!');
            return;
        }
        if (!this.title || this.title === '') {
            this.handleError('Title is missing!');
            return;
        }
        this.userService.getLoggedUser()
            .subscribe(function (res) {
            if (!res.user) {
                _this.handleError('No user is logged in!');
                return;
            }
            var author = res.user.username;
            var post = new Post(_this.title, _this.selectedCategory, author, new Date(), _this.imageName, _this.imagePath, 0, 0);
            _this.postService.createPost(post)
                .subscribe(function (dbPost) { return _this.userService.addPost(author, dbPost); });
        });
    };
    PostCreateComponent.prototype.onUploaded = function (file) {
        if (file !== undefined) {
            this.imageName = file.filename;
            this.imagePath = file.path;
        }
    };
    PostCreateComponent.prototype.handleError = function (msg) {
        var _this = this;
        this.error = true;
        this.errorMessage = msg;
        return setTimeout(function () {
            _this.error = false;
        }, 2500);
    };
    return PostCreateComponent;
}());
PostCreateComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './post.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, post_service_1.PostService])
], PostCreateComponent);
exports.PostCreateComponent = PostCreateComponent;
//# sourceMappingURL=post.component.js.map