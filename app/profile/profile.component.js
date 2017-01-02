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
var user_service_1 = require("../services/user-service");
var constants_1 = require("./../constants/constants");
var ProfileComponent = (function () {
    function ProfileComponent(userService) {
        var _this = this;
        this.userService = userService;
        // public cover= "https://pbs.twimg.com/profile_banners/50988711/1384539792/600x200";
        this.imagesUrl = constants_1.Constants.imagesUrl;
        this.userService
            .getLoggedUser()
            .toPromise()
            .then(function (x) {
            _this.user = x.user;
            console.log(x);
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/profile/profile.component.html',
        styleUrls: ['app/profile/profile.component.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map