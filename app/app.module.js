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
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var authentication_module_1 = require("./authentication/authentication.module");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var app_routing_module_1 = require("./app-routing.module");
var post_module_1 = require("./posts/post.module");
var core_module_1 = require("./core/core.module");
var http_headers_service_1 = require("./services/http-headers.service");
var user_service_1 = require("./services/user-service");
var is_loggedIn_guard_1 = require("./guards/is-loggedIn.guard");
var profile_module_1 = require("./profile/profile.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            authentication_module_1.AuthenticationModule,
            app_routing_module_1.AppRoutingModule,
            post_module_1.PostModule,
            core_module_1.CoreModule,
            profile_module_1.ProfileModule
        ],
        providers: [
            http_headers_service_1.HttpHeadersService,
            is_loggedIn_guard_1.GuardIsLoggedUser,
            user_service_1.UserService
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map