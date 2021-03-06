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
var Observable_1 = require("rxjs/Observable");
var http_headers_service_1 = require("./http-headers.service");
var constants_1 = require("./../constants/constants");
var UsersUrl = constants_1.Constants.hostUrl + 'api/users';
var UserByIdUrl = constants_1.Constants.hostUrl + 'api/users/user/';
var GetLoggedUserUrl = constants_1.Constants.hostUrl + 'api/auth/getLoggedUser';
var AuthToken = 'auth_token';
var UserService = (function () {
    function UserService(http, httpHeadersService) {
        this.http = http;
        this.httpHeadersService = httpHeadersService;
    }
    UserService.prototype.getUserData = function (userId) {
        var url = "" + UserByIdUrl + userId;
        return this.http.get(url).map(function (response) { return response.json(); });
    };
    UserService.prototype.addPost = function (username, post) {
        var token = localStorage.getItem(AuthToken);
        var options = this.httpHeadersService.getHeaders(token);
        var url = UsersUrl + "/" + username + "/image-posts";
        return this.http.post(url, post, options)
            .map(function (res) {
            var body = res.json();
        });
    };
    UserService.prototype.getLoggedUser = function () {
        var token = localStorage.getItem(AuthToken);
        var options = this.httpHeadersService.getHeaders(token);
        return this.http.get(GetLoggedUserUrl, options)
            .map(function (res) {
            var body = res.json();
            return {
                status: res.status,
                user: body.user
            };
        });
    };
    UserService.prototype.isLoggedIn = function () {
        var userDataString = localStorage.getItem(AuthToken);
        if (!userDataString) {
            return Observable_1.Observable.of(false);
        }
        return this.getLoggedUser()
            .map(function (res) {
            if (+res.status == 200) {
                return true;
            }
            return false;
        });
    };
    UserService.prototype.updateSettings = function (id, settings) {
        var token = localStorage.getItem(AuthToken);
        var options = this.httpHeadersService.getHeaders(token);
        console.log(options);
        return this.http.put("" + UserByIdUrl + id, JSON.stringify(settings), options)
            .map(function (res) {
            return { status: res.status, body: res.json() };
        });
    };
    UserService.prototype.subscribe = function (subscribedId) {
        var token = localStorage.getItem(AuthToken);
        var options = this.httpHeadersService.getHeaders(token);
        return this.http.get(constants_1.Constants.hostUrl + 'api/users/subscribe/' + subscribedId, options);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http,
        http_headers_service_1.HttpHeadersService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user-service.js.map