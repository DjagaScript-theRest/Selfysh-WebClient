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
require("rxjs/add/operator/do");
// import 'rxjs/add/operator/catch';
require("rxjs/add/operator/map");
var http_headers_service_1 = require("./../services/http-headers.service");
var constants_1 = require("./../constants/constants");
var AuthToken = 'auth_token';
var PostService = (function () {
    function PostService(_http, httpHeadersService) {
        this._http = _http;
        this.httpHeadersService = httpHeadersService;
        this._postUrl = constants_1.Constants.hostUrl + "api/posts";
    }
    PostService.prototype.getPosts = function () {
        return this._http.get(this._postUrl)
            .map(function (response) { return response.json(); });
    };
    PostService.prototype.getPostsByCategory = function (category) {
        return this._http.get(this._postUrl + '/' + category)
            .map(function (response) { return response.json(); });
    };
    PostService.prototype.getPostById = function (id) {
        return this.getPosts()
            .map(function (posts) { return posts.find(function (p) { return p._id === id; }); });
    };
    PostService.prototype.createPost = function (post) {
        var token = localStorage.getItem(AuthToken);
        var options = this.httpHeadersService.getHeaders(token);
        return this._http.post(this._postUrl, post, options)
            .map(function (response) {
            return response.json();
        });
    };
    PostService.prototype.addComment = function (url, comment) {
        var body = {
            comment: comment
        };
        return this._http.post(url, body);
    };
    PostService.prototype.likePost = function (postId, username) {
        var body = {
            username: username
        };
        var url = this._postUrl + "/" + postId + "/vote";
        return this._http.post(url, body)
            .map(function (response) {
            return response.json();
        });
    };
    return PostService;
}());
PostService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, http_headers_service_1.HttpHeadersService])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map