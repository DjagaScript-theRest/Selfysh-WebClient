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
var constants_1 = require("../../constants/constants");
var forms_1 = require("@angular/forms");
var http_headers_service_1 = require("../../services/http-headers.service");
var router_1 = require("@angular/router");
var authentication_service_1 = require("../../services/authentication.service");
var ProfileSettingsComponent = (function () {
    function ProfileSettingsComponent(userService, fb, httpHeadersService, router, authService) {
        this.userService = userService;
        this.fb = fb;
        this.httpHeadersService = httpHeadersService;
        this.router = router;
        this.authService = authService;
        this.imagesUrl = constants_1.Constants.imagesUrl;
    }
    ProfileSettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService
            .getLoggedUser()
            .subscribe(function (x) { return _this.user = x.user; });
        this.userSettingsToUpdate = this.fb.group({
            'newPassword': ['', forms_1.Validators.minLength(4)],
            'confirmedPassword': ['', forms_1.Validators.minLength(4)],
            'firstName': ['', forms_1.Validators.required],
            'lastName': ['', forms_1.Validators.required],
        });
    };
    ProfileSettingsComponent.prototype.updateSettings = function () {
        var _this = this;
        this.userService.updateSettings(this.user.id, this.userSettingsToUpdate.value)
            .subscribe(function (x) {
            // this.router.navigate(['/profile'])
            _this.authService.logout();
            _this.router.navigate(['/login']);
            location.reload();
        });
    };
    return ProfileSettingsComponent;
}());
ProfileSettingsComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/profile/profile-settings/profile-settings.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        forms_1.FormBuilder,
        http_headers_service_1.HttpHeadersService,
        router_1.Router,
        authentication_service_1.AuthenticationService])
], ProfileSettingsComponent);
exports.ProfileSettingsComponent = ProfileSettingsComponent;
//# sourceMappingURL=profile-settings.component.js.map