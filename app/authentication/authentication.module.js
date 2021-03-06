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
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var authentication_service_1 = require("../services/authentication.service");
var AuthenticationModule = (function () {
    function AuthenticationModule() {
    }
    return AuthenticationModule;
}());
AuthenticationModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
        ],
        declarations: [
            register_component_1.RegisterComponent,
            login_component_1.LoginComponent,
        ],
        providers: [authentication_service_1.AuthenticationService]
    }),
    __metadata("design:paramtypes", [])
], AuthenticationModule);
exports.AuthenticationModule = AuthenticationModule;
//# sourceMappingURL=authentication.module.js.map