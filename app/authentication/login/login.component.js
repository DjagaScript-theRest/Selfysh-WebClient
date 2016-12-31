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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var authentication_service_1 = require("../../services/authentication.service");
var LoginComponent = (function () {
    function LoginComponent(fb, _authService, _router) {
        this.fb = fb;
        this._authService = _authService;
        this._router = _router;
        this.error = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.userToLogin = this.fb.group({
            'username': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5)])],
            'password': ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._authService.login(this.userToLogin.value)
            .subscribe(function (res) {
            _this._router.navigateByUrl('/home');
            location.reload();
        }, function (err) {
            var notificationMsg = JSON.parse(err._body).message;
            _this.error = true;
            _this.errorMessage = notificationMsg;
            setTimeout(function () {
                _this.error = false;
            }, 2500);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/authentication/login/login.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        authentication_service_1.AuthenticationService,
        router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map