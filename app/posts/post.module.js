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
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var ng2_file_upload_1 = require("ng2-file-upload");
var post_list_component_1 = require("./post-list.component");
var post_details_component_1 = require("./post-details.component");
var post_category_component_1 = require("./post-category.component");
var post_upload_component_1 = require("./shared/post-upload.component");
var post_component_1 = require("./post/post.component");
var init_caps_pipe_1 = require("./shared/init-caps.pipe");
var search_pipe_1 = require("./search.pipe");
var is_loggedIn_guard_1 = require("./../guards/is-loggedIn.guard");
var post_vote_component_1 = require("./shared/vote/post-vote.component");
var post_service_1 = require("./post.service");
var PostModule = (function () {
    function PostModule() {
    }
    return PostModule;
}());
PostModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            router_1.RouterModule.forChild([
                { path: 'posts/create', component: post_component_1.PostCreateComponent, canActivate: [is_loggedIn_guard_1.GuardIsLoggedUser] },
                { path: 'posts', component: post_list_component_1.PostListComponent },
                { path: 'posts/:category', component: post_category_component_1.PostCategoryComponent },
                { path: 'post/:id', component: post_details_component_1.PostDetailsComponent }
            ])
        ],
        declarations: [
            post_list_component_1.PostListComponent,
            post_details_component_1.PostDetailsComponent,
            post_category_component_1.PostCategoryComponent,
            post_component_1.PostCreateComponent,
            post_upload_component_1.PostUploadComponent,
            init_caps_pipe_1.InitCapsPipe,
            search_pipe_1.SearchPipe,
            ng2_file_upload_1.FileSelectDirective,
            search_pipe_1.SearchPipe,
            post_vote_component_1.PostVoteComponent
        ],
        providers: [
            post_service_1.PostService,
            is_loggedIn_guard_1.GuardIsLoggedUser
        ]
    }),
    __metadata("design:paramtypes", [])
], PostModule);
exports.PostModule = PostModule;
//# sourceMappingURL=post.module.js.map