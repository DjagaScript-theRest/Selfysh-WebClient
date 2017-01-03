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
var user_service_1 = require("../../services/user-service");
var constants_1 = require("./../../constants/constants");
var router_1 = require("@angular/router");
var OthersProfileComponent = (function () {
    function OthersProfileComponent(userService, route) {
        this.userService = userService;
        this.route = route;
        this.imagesUrl = constants_1.Constants.imagesUrl;
    }
    OthersProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService
            .getLoggedUser()
            .toPromise()
            .then(function (x) {
            _this.loggedUser = x.user;
        });
        var userId = this.route.params._value.id;
        this.userService.getUserData(userId)
            .subscribe(function (x) {
            console.log(x);
            _this.profilesUser = x;
        });
    };
    OthersProfileComponent.prototype.subscribe = function () {
        var subscribed = { id: this.profilesUser._id, username: this.profilesUser.username };
        if (!this.loggedUser) {
            return;
        }
        this.userService.subscribe(subscribed.id)
            .subscribe(function () { return location.reload; });
    };
    return OthersProfileComponent;
}());
OthersProfileComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/profile/others-profile/others-profile.component.html',
        styleUrls: ['app/profile/others-profile/others-profile.component.css']
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.ActivatedRoute])
], OthersProfileComponent);
exports.OthersProfileComponent = OthersProfileComponent;
//# sourceMappingURL=others-profile.component.js.map