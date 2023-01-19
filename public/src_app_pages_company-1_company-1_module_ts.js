"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_pages_company-1_company-1_module_ts"],{

/***/ 6680:
/*!*************************************************************!*\
  !*** ./src/app/pages/company-1/company-1-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Company1RoutingModule": () => (/* binding */ Company1RoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _indicador1_indicador1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indicador1/indicador1.component */ 67393);
/* harmony import */ var _indicador3_indicador3_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indicador3/indicador3.component */ 54797);
/* harmony import */ var _indicador2_indicador2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./indicador2/indicador2.component */ 43048);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    { path: 'indicador-1', component: _indicador1_indicador1_component__WEBPACK_IMPORTED_MODULE_0__.Indicador1Component },
    { path: 'indicador-2', component: _indicador2_indicador2_component__WEBPACK_IMPORTED_MODULE_2__.Indicador2Component },
    { path: 'indicador-3', component: _indicador3_indicador3_component__WEBPACK_IMPORTED_MODULE_1__.Indicador3Component },
];
class Company1RoutingModule {
}
Company1RoutingModule.ɵfac = function Company1RoutingModule_Factory(t) { return new (t || Company1RoutingModule)(); };
Company1RoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: Company1RoutingModule });
Company1RoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](Company1RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 13784:
/*!*****************************************************!*\
  !*** ./src/app/pages/company-1/company-1.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Company1Module": () => (/* binding */ Company1Module)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _company_1_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company-1-routing.module */ 6680);
/* harmony import */ var _indicador1_indicador1_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indicador1/indicador1.component */ 67393);
/* harmony import */ var _indicador2_indicador2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./indicador2/indicador2.component */ 43048);
/* harmony import */ var _indicador3_indicador3_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./indicador3/indicador3.component */ 54797);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ 68253);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@theme/theme.module */ 80268);
/* harmony import */ var _tables_tables_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tables/tables-routing.module */ 20765);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);










class Company1Module {
}
Company1Module.ɵfac = function Company1Module_Factory(t) { return new (t || Company1Module)(); };
Company1Module.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: Company1Module });
Company1Module.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _company_1_routing_module__WEBPACK_IMPORTED_MODULE_0__.Company1RoutingModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbTreeGridModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbIconModule,
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbInputModule,
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__.ThemeModule,
            _tables_tables_routing_module__WEBPACK_IMPORTED_MODULE_5__.TablesRoutingModule,
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__.Ng2SmartTableModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](Company1Module, { declarations: [_indicador1_indicador1_component__WEBPACK_IMPORTED_MODULE_1__.Indicador1Component,
        _indicador2_indicador2_component__WEBPACK_IMPORTED_MODULE_2__.Indicador2Component,
        _indicador3_indicador3_component__WEBPACK_IMPORTED_MODULE_3__.Indicador3Component], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _company_1_routing_module__WEBPACK_IMPORTED_MODULE_0__.Company1RoutingModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbCardModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbTreeGridModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbIconModule,
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__.NbInputModule,
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__.ThemeModule,
        _tables_tables_routing_module__WEBPACK_IMPORTED_MODULE_5__.TablesRoutingModule,
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__.Ng2SmartTableModule] }); })();


/***/ }),

/***/ 67393:
/*!********************************************************************!*\
  !*** ./src/app/pages/company-1/indicador1/indicador1.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Indicador1Component": () => (/* binding */ Indicador1Component)
/* harmony export */ });
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_upload_files_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/upload-files.service */ 43108);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 68253);





class Indicador1Component {
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
Indicador1Component.ɵfac = function Indicador1Component_Factory(t) { return new (t || Indicador1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_upload_files_service__WEBPACK_IMPORTED_MODULE_0__.UploadFilesService)); };
Indicador1Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: Indicador1Component, selectors: [["ngx-indicador1"]], decls: 7, vars: 3, consts: [[1, "text-right"], [3, "settings", "source"]], template: function Indicador1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " ElementsOnlyCompanyBOB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nb-card-body")(4, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ng2-smart-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Cant Mony: ", ctx.cantMony, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardBodyComponent, ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__.Ng2SmartTableComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRpY2Fkb3IxLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 43048:
/*!********************************************************************!*\
  !*** ./src/app/pages/company-1/indicador2/indicador2.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Indicador2Component": () => (/* binding */ Indicador2Component)
/* harmony export */ });
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_upload_files_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/upload-files.service */ 43108);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 68253);





class Indicador2Component {
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
Indicador2Component.ɵfac = function Indicador2Component_Factory(t) { return new (t || Indicador2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_upload_files_service__WEBPACK_IMPORTED_MODULE_0__.UploadFilesService)); };
Indicador2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: Indicador2Component, selectors: [["ngx-indicador2"]], decls: 7, vars: 3, consts: [[1, "text-right"], [3, "settings", "source"]], template: function Indicador2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " ClientsOnlyCS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nb-card-body")(4, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ng2-smart-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Cant Mony: ", ctx.cantMony, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardBodyComponent, ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__.Ng2SmartTableComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRpY2Fkb3IyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 54797:
/*!********************************************************************!*\
  !*** ./src/app/pages/company-1/indicador3/indicador3.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Indicador3Component": () => (/* binding */ Indicador3Component)
/* harmony export */ });
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ 46819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_upload_files_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/upload-files.service */ 43108);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ 68253);





class Indicador3Component {
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
Indicador3Component.ɵfac = function Indicador3Component_Factory(t) { return new (t || Indicador3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_upload_files_service__WEBPACK_IMPORTED_MODULE_0__.UploadFilesService)); };
Indicador3Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: Indicador3Component, selectors: [["ngx-indicador3"]], decls: 7, vars: 3, consts: [[1, "text-right"], [3, "settings", "source"]], template: function Indicador3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nb-card")(1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " ElementsOnlySherpa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nb-card-body")(4, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ng2-smart-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Cant Mony: ", ctx.cantMony, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.source);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardHeaderComponent, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__.NbCardBodyComponent, ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__.Ng2SmartTableComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRpY2Fkb3IzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_company-1_company-1_module_ts.js.map