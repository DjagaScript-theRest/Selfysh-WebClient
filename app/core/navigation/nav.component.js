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
var authentication_service_1 = require("../../services/authentication.service");
var router_1 = require("@angular/router");
var constants_1 = require("../../constants/constants");
require("rxjs/Rx");
var NavComponent = (function () {
    function NavComponent(userService, authService, router) {
        this.userService = userService;
        this.authService = authService;
        this.router = router;
        this.user = null;
        this.logoutUrl = 'http://localhost:1337/api/auth/logout';
        this.imagesUrl = constants_1.Constants.imagesUrl;
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuItems = [{
                name: 'Home',
                link: ['/home'],
                children: null
            }, {
                name: 'Category',
                link: [''],
                children: [{
                        name: 'Kifla',
                        link: ['/posts/kifla'],
                        children: null
                    }, {
                        name: 'Fun',
                        link: ['/posts/fun'],
                        children: null
                    }, {
                        name: 'Chilling',
                        link: ['/posts/chilling'],
                        children: null
                    }, {
                        name: 'Crazy',
                        link: ['/posts/crazy'],
                        children: null
                    }, {
                        name: 'Extreme',
                        link: ['/posts/extreme'],
                        children: null
                    }, {
                        name: 'Party',
                        link: ['/posts/party'],
                        children: null
                    }, {
                        name: 'Celebration',
                        link: ['/posts/celebration'],
                        children: null
                    }, {
                        name: 'Other',
                        link: ['/posts/other'],
                        children: null
                    }]
            }
        ];
        this.userService
            .getLoggedUser()
            .toPromise()
            .then(function (x) {
            _this.user = x.user;
        });
    };
    NavComponent.prototype.logout = function () {
        this.authService.logout()
            .subscribe(function () { return location.reload(); });
    };
    return NavComponent;
}());
NavComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'selfysh-nav',
        templateUrl: 'nav.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        authentication_service_1.AuthenticationService,
        router_1.Router])
], NavComponent);
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map