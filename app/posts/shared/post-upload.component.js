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
var ng2_file_upload_1 = require("ng2-file-upload");
var constants_1 = require("./../../constants/constants");
var PostUploadComponent = (function () {
    function PostUploadComponent() {
        this.uploader = new ng2_file_upload_1.FileUploader({ url: constants_1.Constants.hostUrl + "api/posts/upload" });
        this.onUploaded = new core_1.EventEmitter();
    }
    PostUploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            var file = JSON.parse(response).file;
            _this.onUploaded.emit(file);
        };
    };
    PostUploadComponent.prototype.uploadImage = function () {
        this.uploader.uploadAll();
    };
    PostUploadComponent.prototype.removeImage = function () {
        this.uploader.clearQueue();
    };
    return PostUploadComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], PostUploadComponent.prototype, "onUploaded", void 0);
PostUploadComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'post-upload',
        templateUrl: './post-upload.component.html'
    }),
    __metadata("design:paramtypes", [])
], PostUploadComponent);
exports.PostUploadComponent = PostUploadComponent;
//# sourceMappingURL=post-upload.component.js.map