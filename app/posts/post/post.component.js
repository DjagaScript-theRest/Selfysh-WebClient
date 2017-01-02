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
var DEFAULT_CATEGORY = 'other';
var PostCreateComponent = (function () {
    function PostCreateComponent(userService) {
        this.userService = userService;
        this.selectedCategory = DEFAULT_CATEGORY;
        this.categories = ['fun', 'chilling', 'crazy', 'extreme', 'party',
            'celebration', 'kifla', 'other'];
    }
    PostCreateComponent.prototype.createPost = function () {
        if (!this.postTitle) {
            console.log('No title');
        }
    };
    return PostCreateComponent;
}());
PostCreateComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './post.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], PostCreateComponent);
exports.PostCreateComponent = PostCreateComponent;
//# sourceMappingURL=post.component.js.map