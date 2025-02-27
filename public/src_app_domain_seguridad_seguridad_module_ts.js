"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_domain_seguridad_seguridad_module_ts"],{

/***/ 73784:
/*!***********************************************************************************!*\
  !*** ./src/app/domain/seguridad/gestionar-usuario/gestionar-usuario.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GestionarUsuarioComponent": () => (/* binding */ GestionarUsuarioComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ 22573);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../auth/services/auth.service */ 16518);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);










function GestionarUsuarioComponent_nb_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nb-card", 2)(1, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "nb-card-body")(4, "form", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 6)(12, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 5)(16, "div", 6)(17, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 6)(21, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 13)(25, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GestionarUsuarioComponent_nb_card_0_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r1.createUserForm.get("id").value !== null ? ctx_r1.submitUpdate() : ctx_r1.submitCreate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GestionarUsuarioComponent_nb_card_0_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.createUserForm);
} }
class GestionarUsuarioComponent {
    constructor(userService, formBuilder, toastrService, authService) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.toastrService = toastrService;
        this.authService = authService;
        this.ifShow = false;
        this.createUserForm = this.formBuilder.group({
            id: [],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        });
        this.settings = {
            add: {
                addButtonContent: '<i class="nb-plus"></i>',
                createButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            edit: {
                editButtonContent: '<i class="nb-edit"></i>',
                saveButtonContent: '<i class="nb-checkmark"></i>',
                cancelButtonContent: '<i class="nb-close"></i>',
            },
            delete: {
                deleteButtonContent: '<i class="nb-trash"></i>',
                confirmDelete: true,
            },
            columns: {
                name: {
                    title: 'Name',
                    type: 'string',
                },
                email: {
                    title: 'Email',
                    type: 'string',
                },
                username: {
                    title: 'Username',
                    type: 'string',
                },
            },
            actions: {
                add: true,
                position: 'right',
            },
            mode: 'external',
        };
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__.LocalDataSource();
    }
    ngOnInit() {
        this.getListUser();
    }
    getListUser() {
        this.userService.getAllUser()
            .subscribe(resp => {
            this.source = resp.listUsers;
        });
    }
    onDeleteConfirm(event) {
        if (event.data._id === this.authService.usuario._id) {
            return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: 'Info',
                text: 'You can not delete yourself!',
                icon: 'info',
                confirmButtonColor: '#497bff',
            });
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#497bff',
            cancelButtonColor: '#ff4274',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                this.userService.deleteUser(event.data._id)
                    .subscribe(resp => {
                    this.getListUser();
                    this.toastrService.success('User deleted successfully!', 'Done!');
                });
            }
        });
    }
    onUpdateConfirm(event) {
        this.title = 'Edit User';
        this.ifShow = true;
        this.createUserForm = this.formBuilder.group({
            id: [event.data._id],
            name: [event.data.name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            username: [event.data.username, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            email: [event.data.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
            password: [],
        });
    }
    openForm() {
        this.title = 'Create User';
        this.ifShow = true;
        this.createUserForm.reset();
    }
    cancel() {
        this.ifShow = false;
        this.createUserForm.reset();
    }
    submitCreate() {
        this.authService.register(this.createUserForm.value)
            .subscribe(resp => {
            this.getListUser();
            this.toastrService.success('User created successfully!', 'Done!');
            this.ifShow = false;
        });
    }
    submitUpdate() {
        this.userService.updateUser(this.createUserForm.value, this.createUserForm.value.id)
            .subscribe(resp => {
            this.getListUser();
            this.toastrService.success('User Edited successfully!', 'Done!');
            this.ifShow = false;
        });
    }
}
GestionarUsuarioComponent.ɵfac = function GestionarUsuarioComponent_Factory(t) { return new (t || GestionarUsuarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
GestionarUsuarioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: GestionarUsuarioComponent, selectors: [["ngx-gestionar-usuario"]], decls: 6, vars: 3, consts: [["class", "animate__animated animate__fadeIn", 4, "ngIf"], [3, "settings", "source", "create", "delete", "edit"], [1, "animate__animated", "animate__fadeIn"], [3, "formGroup"], [1, "row"], [1, "col-md-6"], [1, "form-group"], ["for", "exampleInputEmail1", 1, "label"], ["formControlName", "name", "fullWidth", "", "id", "exampleInputName", "nbInput", "", "placeholder", "Name", "type", "name"], ["formControlName", "username", "fullWidth", "", "id", "exampleInputUsername", "nbInput", "", "placeholder", "Username", "type", "username"], ["formControlName", "email", "fullWidth", "", "id", "exampleInputEmail1", "nbInput", "", "placeholder", "Email", "type", "email"], ["for", "exampleInputPassword1", 1, "label"], ["formControlName", "password", "fullWidth", "", "id", "exampleInputPassword1", "nbInput", "", "placeholder", "Password", "type", "password"], [1, "col-md-12"], ["nbButton", "", "status", "primary", 3, "click"], ["nbButton", "", "status", "danger", 1, "cancel", 3, "click"]], template: function GestionarUsuarioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, GestionarUsuarioComponent_nb_card_0_Template, 29, 2, "nb-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nb-card")(2, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Manage Users ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nb-card-body")(5, "ng2-smart-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("create", function GestionarUsuarioComponent_Template_ng2_smart_table_create_5_listener() { return ctx.openForm(); })("delete", function GestionarUsuarioComponent_Template_ng2_smart_table_delete_5_listener($event) { return ctx.onDeleteConfirm($event); })("edit", function GestionarUsuarioComponent_Template_ng2_smart_table_edit_5_listener($event) { return ctx.onUpdateConfirm($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.ifShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbCardBodyComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _nebular_theme__WEBPACK_IMPORTED_MODULE_6__.NbButtonComponent, ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__.Ng2SmartTableComponent], styles: [".cancel[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n\n.animate__animated.animate__fadeIn[_ngcontent-%COMP%] {\n  --animate-duration: 0.4s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlc3Rpb25hci11c3VhcmlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLHdCQUFBO0FBQ0YiLCJmaWxlIjoiZ2VzdGlvbmFyLXVzdWFyaW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FuY2VsIHtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxufVxyXG5cclxuLmFuaW1hdGVfX2FuaW1hdGVkLmFuaW1hdGVfX2ZhZGVJbiB7XHJcbiAgLS1hbmltYXRlLWR1cmF0aW9uOiAwLjRzO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 79963:
/*!**************************************************************!*\
  !*** ./src/app/domain/seguridad/seguridad-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeguridadRoutingModule": () => (/* binding */ SeguridadRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _gestionar_usuario_gestionar_usuario_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gestionar-usuario/gestionar-usuario.component */ 73784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    { path: 'manage-users', component: _gestionar_usuario_gestionar_usuario_component__WEBPACK_IMPORTED_MODULE_0__.GestionarUsuarioComponent },
];
class SeguridadRoutingModule {
}
SeguridadRoutingModule.ɵfac = function SeguridadRoutingModule_Factory(t) { return new (t || SeguridadRoutingModule)(); };
SeguridadRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SeguridadRoutingModule });
SeguridadRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SeguridadRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 79034:
/*!******************************************************!*\
  !*** ./src/app/domain/seguridad/seguridad.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeguridadModule": () => (/* binding */ SeguridadModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _seguridad_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seguridad-routing.module */ 79963);
/* harmony import */ var _gestionar_usuario_gestionar_usuario_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gestionar-usuario/gestionar-usuario.component */ 73784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);







class SeguridadModule {
}
SeguridadModule.ɵfac = function SeguridadModule_Factory(t) { return new (t || SeguridadModule)(); };
SeguridadModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SeguridadModule });
SeguridadModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _seguridad_routing_module__WEBPACK_IMPORTED_MODULE_0__.SeguridadRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonModule,
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__.Ng2SmartTableModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbInputModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SeguridadModule, { declarations: [_gestionar_usuario_gestionar_usuario_component__WEBPACK_IMPORTED_MODULE_1__.GestionarUsuarioComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _seguridad_routing_module__WEBPACK_IMPORTED_MODULE_0__.SeguridadRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbButtonModule,
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__.Ng2SmartTableModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__.NbInputModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_domain_seguridad_seguridad_module_ts.js.map