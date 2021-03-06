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
var http_1 = require("@angular/http");
var http_headers_service_1 = require("./http-headers.service");
require("rxjs/add/operator/map");
var constants_1 = require("../constants/constants");
var RegisterUrl = constants_1.Constants.hostUrl + 'api/auth/register';
var LoginUrl = constants_1.Constants.hostUrl + 'api/auth/login';
var LogoutUrl = constants_1.Constants.hostUrl + 'api/auth/logout';
var GetLoggedUser = constants_1.Constants.hostUrl + 'api/auth/getLoggedUser';
var AuthToken = 'auth_token';
var AuthenticationService = (function () {
    function AuthenticationService(http, httpHedersService) {
        this.http = http;
        this.httpHedersService = httpHedersService;
        this.loggedIn = false;
    }
    AuthenticationService.prototype.register = function (userToRegister) {
        return this.http.post(RegisterUrl, userToRegister)
            .map(function (res) {
            return {
                status: res.status,
                body: res.json()
            };
        });
    };
    AuthenticationService.prototype.login = function (userToLogin) {
        var _this = this;
        return this.http.post(LoginUrl, userToLogin)
            .map(function (res) {
            var body = res.json();
            var token = body.token;
            localStorage.setItem(AuthToken, token);
            _this.loggedIn = true;
            return {
                status: res.status,
                body: res.json()
            };
        });
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem(AuthToken);
        this.loggedIn = false;
        return this.http.post(LogoutUrl, '');
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        http_headers_service_1.HttpHeadersService])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map