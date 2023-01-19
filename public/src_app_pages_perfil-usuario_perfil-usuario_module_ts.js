"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_pages_perfil-usuario_perfil-usuario_module_ts"],{

/***/ 56195:
/*!***********************************************************************!*\
  !*** ./src/app/pages/perfil-usuario/perfil-usuario-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilUsuarioRoutingModule": () => (/* binding */ PerfilUsuarioRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _perfil_usuario_perfil_usuario_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil-usuario/perfil-usuario.component */ 49059);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    { path: 'profile', component: _perfil_usuario_perfil_usuario_component__WEBPACK_IMPORTED_MODULE_0__.PerfilUsuarioComponent },
];
class PerfilUsuarioRoutingModule {
}
PerfilUsuarioRoutingModule.ɵfac = function PerfilUsuarioRoutingModule_Factory(t) { return new (t || PerfilUsuarioRoutingModule)(); };
PerfilUsuarioRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PerfilUsuarioRoutingModule });
PerfilUsuarioRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PerfilUsuarioRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 80123:
/*!***************************************************************!*\
  !*** ./src/app/pages/perfil-usuario/perfil-usuario.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilUsuarioModule": () => (/* binding */ PerfilUsuarioModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _perfil_usuario_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil-usuario-routing.module */ 56195);
/* harmony import */ var _perfil_usuario_perfil_usuario_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil-usuario/perfil-usuario.component */ 49059);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





class PerfilUsuarioModule {
}
PerfilUsuarioModule.ɵfac = function PerfilUsuarioModule_Factory(t) { return new (t || PerfilUsuarioModule)(); };
PerfilUsuarioModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PerfilUsuarioModule });
PerfilUsuarioModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _perfil_usuario_routing_module__WEBPACK_IMPORTED_MODULE_0__.PerfilUsuarioRoutingModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTabsetModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbButtonModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbInputModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PerfilUsuarioModule, { declarations: [_perfil_usuario_perfil_usuario_component__WEBPACK_IMPORTED_MODULE_1__.PerfilUsuarioComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _perfil_usuario_routing_module__WEBPACK_IMPORTED_MODULE_0__.PerfilUsuarioRoutingModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbTabsetModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbButtonModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_4__.NbInputModule] }); })();


/***/ }),

/***/ 49059:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/perfil-usuario/perfil-usuario/perfil-usuario.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilUsuarioComponent": () => (/* binding */ PerfilUsuarioComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../auth/services/auth.service */ 16518);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ 68253);



class PerfilUsuarioComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.datosUser = this.authService.usuario;
        console.log(this.datosUser);
    }
}
PerfilUsuarioComponent.ɵfac = function PerfilUsuarioComponent_Factory(t) { return new (t || PerfilUsuarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
PerfilUsuarioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PerfilUsuarioComponent, selectors: [["ngx-perfil-usuario"]], decls: 82, vars: 5, consts: [[1, "row"], [1, "col-lg-4"], [1, "align-items-center"], ["alt", "Profile", "src", "https://ocamejo95.github.io/front-seguros/assets/img/profile-img.jpg", 1, "rounded-circle"], [1, "col-lg-8"], ["size", "small"], ["tabTitle", "Overview", 1, "animate__animated", "animate__fadeIn", "mt-2"], [1, "card-title"], [1, "col-lg-3", "col-md-4", "label"], [1, "col-lg-9", "col-md-8"], ["tabTitle", "Edit Profile", 1, "animate__animated", "animate__fadeIn", "mt-2"], [1, "form-group", "row"], ["for", "inputName", 1, "label", "col-sm-3", "col-form-label"], [1, "col-sm-9"], ["type", "text", "nbInput", "", "fullWidth", "", "id", "inputName", "placeholder", "Full name"], ["for", "inputUsername", 1, "label", "col-sm-3", "col-form-label"], ["type", "text", "nbInput", "", "fullWidth", "", "id", "inputUsername", "placeholder", "Username"], ["for", "inputEmail", 1, "label", "col-sm-3", "col-form-label"], ["type", "text", "nbInput", "", "fullWidth", "", "id", "inputEmail", "placeholder", "Email"], [1, "offset-sm-3", "col-sm-9"], ["type", "submit", "nbButton", "", "status", "primary"], ["tabTitle", "Change Password", 1, "animate__animated", "animate__fadeIn", "mt-2"], ["for", "inputCurrent", 1, "label", "col-sm-3", "col-form-label"], ["type", "password", "nbInput", "", "fullWidth", "", "id", "inputCurrent", "placeholder", "Current Password"], ["for", "inputPassword2", 1, "label", "col-sm-3", "col-form-label"], ["type", "password", "nbInput", "", "fullWidth", "", "id", "inputPassword2", "placeholder", "New Password"], ["type", "password", "nbInput", "", "fullWidth", "", "id", "inputPassword3", "placeholder", "Re-enter New Password"]], template: function PerfilUsuarioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "nb-card")(3, "nb-card-body")(4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4)(11, "nb-card", 5)(12, "nb-tabset")(13, "nb-tab", 6)(14, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Profile Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 0)(17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Full Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 9)(20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 0)(23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Username:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 9)(26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 0)(29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 9)(32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 0)(35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Role:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 9)(38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Vacio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "nb-tab", 10)(41, "form")(42, "div", 11)(43, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Full name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 11)(48, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 11)(53, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 11)(58, "div", 19)(59, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "nb-tab", 21)(62, "form")(63, "div", 11)(64, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Current Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 11)(69, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 11)(74, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Re-enter New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 11)(79, "div", 19)(80, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.datosUser.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.datosUser.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.datosUser.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.datosUser.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.datosUser.email);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbCardBodyComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbTabsetComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbTabComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbInputDirective, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__.NbButtonComponent], styles: [".label[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZpbC11c3VhcmlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0EsZUFBQTtBQUNBIiwiZmlsZSI6InBlcmZpbC11c3VhcmlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhYmVsIHtcclxuZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_perfil-usuario_perfil-usuario_module_ts.js.map