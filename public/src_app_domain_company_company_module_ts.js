"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_domain_company_company_module_ts"],{

/***/ 19758:
/*!**********************************************************!*\
  !*** ./src/app/domain/company/company-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyRoutingModule": () => (/* binding */ CompanyRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _table1_table1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table1/table1.component */ 80803);
/* harmony import */ var _table2_table2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table2/table2.component */ 93939);
/* harmony import */ var _table5_table5_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table5/table5.component */ 95433);
/* harmony import */ var _table4_table4_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table4/table4.component */ 26680);
/* harmony import */ var _table3_table3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table3/table3.component */ 11037);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








const routes = [
    { path: 'table-1', component: _table1_table1_component__WEBPACK_IMPORTED_MODULE_0__.Table1Component },
    { path: 'table-2', component: _table2_table2_component__WEBPACK_IMPORTED_MODULE_1__.Table2Component },
    { path: 'table-3', component: _table3_table3_component__WEBPACK_IMPORTED_MODULE_4__.Table3Component },
    { path: 'table-4', component: _table4_table4_component__WEBPACK_IMPORTED_MODULE_3__.Table4Component },
    { path: 'table-5', component: _table5_table5_component__WEBPACK_IMPORTED_MODULE_2__.Table5Component },
];
class CompanyRoutingModule {
}
CompanyRoutingModule.ɵfac = function CompanyRoutingModule_Factory(t) { return new (t || CompanyRoutingModule)(); };
CompanyRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: CompanyRoutingModule });
CompanyRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CompanyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 99303:
/*!**************************************************!*\
  !*** ./src/app/domain/company/company.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompanyModule": () => (/* binding */ CompanyModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _company_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company-routing.module */ 19758);
/* harmony import */ var _table1_table1_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table1/table1.component */ 80803);
/* harmony import */ var _table2_table2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table2/table2.component */ 93939);
/* harmony import */ var _table3_table3_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table3/table3.component */ 11037);
/* harmony import */ var _table4_table4_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table4/table4.component */ 26680);
/* harmony import */ var _table5_table5_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table5/table5.component */ 95433);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);










class CompanyModule {
}
CompanyModule.ɵfac = function CompanyModule_Factory(t) { return new (t || CompanyModule)(); };
CompanyModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: CompanyModule });
CompanyModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _company_routing_module__WEBPACK_IMPORTED_MODULE_0__.CompanyRoutingModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardModule,
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__.Ng2SmartTableModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CompanyModule, { declarations: [_table1_table1_component__WEBPACK_IMPORTED_MODULE_1__.Table1Component,
        _table2_table2_component__WEBPACK_IMPORTED_MODULE_2__.Table2Component,
        _table3_table3_component__WEBPACK_IMPORTED_MODULE_3__.Table3Component,
        _table4_table4_component__WEBPACK_IMPORTED_MODULE_4__.Table4Component,
        _table5_table5_component__WEBPACK_IMPORTED_MODULE_5__.Table5Component], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _company_routing_module__WEBPACK_IMPORTED_MODULE_0__.CompanyRoutingModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardModule,
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__.Ng2SmartTableModule] }); })();


/***/ }),

/***/ 80803:
/*!***********************************************************!*\
  !*** ./src/app/domain/company/table1/table1.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Table1Component": () => (/* binding */ Table1Component)
/* harmony export */ });
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_upload_files_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/upload-files.service */ 20874);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 68253);





class Table1Component {
    constructor(uploadFilesService) {
        this.uploadFilesService = uploadFilesService;
        this.settings = {
            actions: false,
            columns: {
                name: {
                    title: 'Name',
                    type: 'string',
                },
                exchangeSubscriberID: {
                    title: 'ExchangeSubscriberID',
                    type: 'string',
                },
                policyNumber: {
                    title: 'PolicyNumber',
                    type: 'string',
                },
            },
            pager: { display: true, perPage: 15 },
        };
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__.LocalDataSource();
    }
    ngOnInit() {
        this.source = this.uploadFilesService.list.elementsOnlyCompanyBOB;
        this.cantMony = this.uploadFilesService.list.cantMony;
    }
}
Table1Component.ɵfac = function Table1Component_Factory(t) { return new (t || Table1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_upload_files_service__WEBPACK_IMPORTED_MODULE_0__.UploadFilesService)); };
Table1Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: Table1Component, selectors: [["ngx-table1"]], decls: 10, vars: 3, consts: [[1, "text-right"], [3, "settings", "source"]], template: function Table1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " ElementsOnlyCompanyBOB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nb-card-body")(4, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Money: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "strong")(7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "ng2-smart-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.cantMony);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardBodyComponent, ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__.Ng2SmartTableComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsZTEuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 93939:
/*!***********************************************************!*\
  !*** ./src/app/domain/company/table2/table2.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Table2Component": () => (/* binding */ Table2Component)
/* harmony export */ });
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_upload_files_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/upload-files.service */ 20874);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 68253);





class Table2Component {
    constructor(uploadFilesService) {
        this.uploadFilesService = uploadFilesService;
        this.settings = {
            actions: false,
            columns: {
                name: {
                    title: 'Name',
                    type: 'string',
                },
                commissionDate: {
                    title: 'CommissionDate',
                    type: 'string',
                },
                policyNumber: {
                    title: 'PolicyNumber',
                    type: 'string',
                },
                amount: {
                    title: 'Amount',
                    type: 'string',
                },
                ifPay: {
                    title: 'IfPay',
                    type: 'boolean',
                },
            },
            pager: { display: true, perPage: 15 },
        };
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__.LocalDataSource();
    }
    ngOnInit() {
        this.source = this.uploadFilesService.list.clientsOnlyCS;
        this.cantMony = this.uploadFilesService.list.cantMony;
    }
}
Table2Component.ɵfac = function Table2Component_Factory(t) { return new (t || Table2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_upload_files_service__WEBPACK_IMPORTED_MODULE_0__.UploadFilesService)); };
Table2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: Table2Component, selectors: [["ngx-table2"]], decls: 10, vars: 3, consts: [[1, "text-right"], [3, "settings", "source"]], template: function Table2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " ClientsOnlyCS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nb-card-body")(4, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Money: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "strong")(7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "ng2-smart-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.cantMony);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardBodyComponent, ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__.Ng2SmartTableComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsZTIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 11037:
/*!***********************************************************!*\
  !*** ./src/app/domain/company/table3/table3.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Table3Component": () => (/* binding */ Table3Component)
/* harmony export */ });
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_upload_files_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/upload-files.service */ 20874);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 68253);





class Table3Component {
    constructor(uploadFilesService) {
        this.uploadFilesService = uploadFilesService;
        this.settings = {
            actions: false,
            columns: {
                name: {
                    title: 'Name',
                    type: 'string',
                },
                ffm_subscriber_id: {
                    title: 'Ffm_subscriber_id',
                    type: 'string',
                },
                transformerID: {
                    title: 'TransformerID',
                    type: 'string',
                },
            },
            pager: { display: true, perPage: 15 },
        };
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__.LocalDataSource();
    }
    ngOnInit() {
        this.source = this.uploadFilesService.list.elementsOnlySherpa;
        this.cantMony = this.uploadFilesService.list.cantMony;
    }
}
Table3Component.ɵfac = function Table3Component_Factory(t) { return new (t || Table3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_upload_files_service__WEBPACK_IMPORTED_MODULE_0__.UploadFilesService)); };
Table3Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: Table3Component, selectors: [["ngx-table3"]], decls: 10, vars: 3, consts: [[1, "text-right"], [3, "settings", "source"]], template: function Table3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " ElementsOnlySherpa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nb-card-body")(4, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Money: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "strong")(7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "ng2-smart-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.cantMony);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardBodyComponent, ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__.Ng2SmartTableComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsZTMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 26680:
/*!***********************************************************!*\
  !*** ./src/app/domain/company/table4/table4.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Table4Component": () => (/* binding */ Table4Component)
/* harmony export */ });
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_upload_files_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/upload-files.service */ 20874);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 68253);





class Table4Component {
    constructor(uploadFilesService) {
        this.uploadFilesService = uploadFilesService;
        this.settings = {
            actions: false,
            columns: {
                name: {
                    title: 'Name',
                    type: 'string',
                },
                commissionDate: {
                    title: 'CommissionDate',
                    type: 'string',
                },
                policyNumber: {
                    title: 'PolicyNumber',
                    type: 'string',
                },
                amount: {
                    title: 'Amount',
                    type: 'string',
                },
                ifPay: {
                    title: 'IfPay',
                    type: 'string',
                },
            },
            pager: { display: true, perPage: 15 },
        };
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__.LocalDataSource();
    }
    ngOnInit() {
        this.source = this.uploadFilesService.list.informClientsCSgood;
        this.cantMony = this.uploadFilesService.list.cantMony;
    }
}
Table4Component.ɵfac = function Table4Component_Factory(t) { return new (t || Table4Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_upload_files_service__WEBPACK_IMPORTED_MODULE_0__.UploadFilesService)); };
Table4Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: Table4Component, selectors: [["ngx-table4"]], decls: 10, vars: 3, consts: [[1, "text-right"], [3, "settings", "source"]], template: function Table4Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " InformClientsCSgood ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nb-card-body")(4, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Money: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "strong")(7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "ng2-smart-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.cantMony);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardBodyComponent, ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__.Ng2SmartTableComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsZTQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 95433:
/*!***********************************************************!*\
  !*** ./src/app/domain/company/table5/table5.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Table5Component": () => (/* binding */ Table5Component)
/* harmony export */ });
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_upload_files_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/upload-files.service */ 20874);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 68253);





class Table5Component {
    constructor(uploadFilesService) {
        this.uploadFilesService = uploadFilesService;
        this.settings = {
            actions: false,
            columns: {
                name: {
                    title: 'Name',
                    type: 'string',
                },
                commissionDate: {
                    title: 'CommissionDate',
                    type: 'string',
                },
                policyNumber: {
                    title: 'PolicyNumber',
                    type: 'string',
                },
                amount: {
                    title: 'Amount',
                    type: 'string',
                },
                ifPay: {
                    title: 'IfPay',
                    type: 'string',
                },
            },
            pager: { display: true, perPage: 15 },
        };
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__.LocalDataSource();
    }
    ngOnInit() {
        this.source = this.uploadFilesService.list.findElementsRepeatDate;
        this.cantMony = this.uploadFilesService.list.cantMony;
    }
}
Table5Component.ɵfac = function Table5Component_Factory(t) { return new (t || Table5Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_upload_files_service__WEBPACK_IMPORTED_MODULE_0__.UploadFilesService)); };
Table5Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: Table5Component, selectors: [["ngx-table5"]], decls: 10, vars: 3, consts: [[1, "text-right"], [3, "settings", "source"]], template: function Table5Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " FindElementsRepeatDate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nb-card-body")(4, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Money: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "strong")(7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "ng2-smart-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.cantMony);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardBodyComponent, ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__.Ng2SmartTableComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsZTUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_domain_company_company_module_ts.js.map