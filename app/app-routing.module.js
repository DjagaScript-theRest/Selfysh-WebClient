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
var home_component_1 = require("./home/home.component");
var register_component_1 = require("./authentication/register/register.component");
var login_component_1 = require("./authentication/login/login.component");
var is_loggedIn_guard_1 = require("./guards/is-loggedIn.guard");
var profile_component_1 = require("./profile/profile.component");
var profile_settings_component_1 = require("./profile/profile-settings/profile-settings.component");
var others_profile_component_1 = require("./profile/others-profile/others-profile.component");
//import { UserComponent } from './components/user/user.component';
//import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
var routes = [
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '', redirectTo: '/posts', pathMatch: 'full' },
    { path: 'profile', canActivate: [is_loggedIn_guard_1.GuardIsLoggedUser], component: profile_component_1.ProfileComponent },
    { path: 'profile/edit', canActivate: [is_loggedIn_guard_1.GuardIsLoggedUser], component: profile_settings_component_1.ProfileSettingsComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'user/:id', component: others_profile_component_1.OthersProfileComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(routes)
        ],
        exports: [
            router_1.RouterModule
        ]
    }),
    __metadata("design:paramtypes", [])
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map