function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'website';
      }

      _createClass(AppComponent, [{
        key: "openWindow",
        value: function openWindow(link) {
          window.open(link, '_blank');
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 8,
      vars: 0,
      consts: [[1, "footer"], [1, "container"], [1, "icons"], [1, "fab", "fa-linkedin-in", 3, "click"], [1, "fab", "fa-github", 3, "click"], [1, "fab", "fa-instagram", 3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_i_click_5_listener() {
            return ctx.openWindow("https://www.linkedin.com/in/sheetal-gara/");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_i_click_6_listener() {
            return ctx.openWindow("https://github.com/sheetalgara");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_i_click_7_listener() {
            return ctx.openWindow("https://www.instagram.com/sheetalartstudio/");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _utils_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./utils/services/api.service */
    "./src/app/utils/services/api.service.ts");
    /* harmony import */


    var _utils_services_content_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./utils/services/content.service */
    "./src/app/utils/services/content.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./portfolio/portfolio.component */
    "./src/app/portfolio/portfolio.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _app_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app.routes */
    "./src/app/app.routes.ts");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _work_work_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./work/work.component */
    "./src/app/work/work.component.ts");
    /* harmony import */


    var _work_vertical_timeline_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./work/vertical-timeline/vertical-timeline.component */
    "./src/app/work/vertical-timeline/vertical-timeline.component.ts");
    /* harmony import */


    var _work_work_dialog_work_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./work/work-dialog/work-dialog.component */
    "./src/app/work/work-dialog/work-dialog.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_utils_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _utils_services_content_service__WEBPACK_IMPORTED_MODULE_5__["ContentService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _app_routes__WEBPACK_IMPORTED_MODULE_11__["AppRoutes"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_9__["PortfolioComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"], _work_work_component__WEBPACK_IMPORTED_MODULE_17__["WorkComponent"], _work_vertical_timeline_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_18__["VerticalTimelineComponent"], _work_work_dialog_work_dialog_component__WEBPACK_IMPORTED_MODULE_19__["WorkDialogComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_9__["PortfolioComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"], _work_work_component__WEBPACK_IMPORTED_MODULE_17__["WorkComponent"], _work_vertical_timeline_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_18__["VerticalTimelineComponent"], _work_work_dialog_work_dialog_component__WEBPACK_IMPORTED_MODULE_19__["WorkDialogComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _app_routes__WEBPACK_IMPORTED_MODULE_11__["AppRoutes"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"]],
          providers: [_utils_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _utils_services_content_service__WEBPACK_IMPORTED_MODULE_5__["ContentService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.routes.ts":
  /*!*******************************!*\
    !*** ./src/app/app.routes.ts ***!
    \*******************************/

  /*! exports provided: router, AppRoutes */

  /***/
  function srcAppAppRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "router", function () {
      return router;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutes", function () {
      return AppRoutes;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./portfolio/portfolio.component */
    "./src/app/portfolio/portfolio.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _work_work_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./work/work.component */
    "./src/app/work/work.component.ts");

    var router = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    }, {
      path: 'work',
      component: _work_work_component__WEBPACK_IMPORTED_MODULE_4__["WorkComponent"]
    }, {
      path: 'art',
      component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioComponent"]
    }, {
      path: 'contact',
      component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]
    }];

    var AppRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(router);
    /***/

  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactComponent =
    /*#__PURE__*/
    function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 2,
      vars: 0,
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "contact works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _utils_services_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../utils/services/content.service */
    "./src/app/utils/services/content.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HeaderComponent_li_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_7_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var item_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.changeRoute(item_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("nav-link ", item_r1["class"], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
      }
    }

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(contentService, router) {
        var _this = this;

        _classCallCheck(this, HeaderComponent);

        this.contentService = contentService;
        this.router = router;
        this.path = '';
        this.contentService.$loadJson.subscribe(function (data) {
          if (data) {
            _this.setContent();
          }
        });
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.headerContent = {};
        }
      }, {
        key: "setContent",
        value: function setContent() {
          this.headerContent = this.contentService.Content.header;
          var currentPath = this.router.url.substring(1);

          if (currentPath && currentPath !== this.path) {
            this.path = currentPath;
            this.selectMenu(currentPath);
            this.router.navigate([currentPath]);
          }
        }
      }, {
        key: "changeRoute",
        value: function changeRoute(item) {
          this.selectMenu(item.path);
          this.router.navigate([item.path]);
        }
      }, {
        key: "selectMenu",
        value: function selectMenu(path) {
          this.headerContent.menu.forEach(function (menuItem) {
            if (menuItem.path !== path) {
              menuItem["class"] = '';
            } else {
              menuItem["class"] = 'active';
            }
          });
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils_services_content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 8,
      vars: 2,
      consts: [[1, "navigation-container"], [1, "container"], [1, "logo-container"], [1, "logo"], [1, "menu-container"], [1, "navbar"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "nav-item"], [3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_li_7_Template, 3, 4, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.headerContent.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.headerContent.menu);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: [".navigation-container[_ngcontent-%COMP%] {\n  width: 100%;\n  position: fixed;\n  top: 0;\n  text-decoration: none;\n  background: #000000;\n  z-index: 1000 !important;\n}\n.navigation-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  height: 45px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n.navigation-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n  flex: 1 1 20%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding-top: 5px;\n}\n.navigation-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #2FE7D3 !important;\n}\n.navigation-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%] {\n  flex: 1 1 80%;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n.navigation-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  width: 30%;\n  justify-content: space-between;\n}\n.navigation-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #919191;\n}\n.navigation-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #2FE7D3;\n}\n.navigation-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  font-weight: 900;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGVldGFsZ2FyYS9Eb2N1bWVudHMvc2dhcmEvc2hlZXRhbGdhcmEuZ2l0aHViLmlvL3dlYnNpdGUvc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NoZWV0YWxnYXJhL0RvY3VtZW50cy9zZ2FyYS9zaGVldGFsZ2FyYS5naXRodWIuaW8vd2Vic2l0ZS9zcmMvYXNzZXRzL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkNOTTtFRE9OLHdCQUFBO0FFQUY7QUZDRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBRUNKO0FGQUk7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtBRUVOO0FGRE07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBRUdSO0FGQ0k7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUVDTjtBRkFNO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0FFRVI7QUZEUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNDcENIO0FDdUNQO0FGRFE7RUFDRSxjQ3pDRjtBQzRDUjtBRkRRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBRUdWIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvdmFyaWFibGVzXCI7XG4ubmF2aWdhdGlvbi1jb250YWluZXJ7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kOiAkZGFyaztcbiAgei1pbmRleDogMTAwMCAhaW1wb3J0YW50O1xuICAuY29udGFpbmVye1xuICAgIGhlaWdodDogNDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAubG9nby1jb250YWluZXJ7XG4gICAgICBmbGV4OiAxIDEgMjAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgLmxvZ297XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6ICRibHVlICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICB9XG4gICAgLm1lbnUtY29udGFpbmVye1xuICAgICAgZmxleDogMSAxIDgwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIC5uYXZiYXJ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgLm5hdi1pdGVte1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGNvbG9yOiAkZ3JleTtcbiAgICAgICAgfVxuICAgICAgICAubmF2LWl0ZW0gLmFjdGl2ZSB7XG4gICAgICAgICAgY29sb3I6ICRibHVlO1xuICAgICAgICB9XG4gICAgICAgIC5uYXYtaXRlbTpob3ZlcntcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIiRkYXJrIDogIzAwMDAwMDtcclxuJGJsdWUgOiAjMkZFN0QzO1xyXG4kd2hpdGUgOiAjRkZGRkZGO1xyXG4kZ3JleTogIzkxOTE5MVxyXG4iLCIubmF2aWdhdGlvbi1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgei1pbmRleDogMTAwMCAhaW1wb3J0YW50O1xufVxuLm5hdmlnYXRpb24tY29udGFpbmVyIC5jb250YWluZXIge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4ubmF2aWdhdGlvbi1jb250YWluZXIgLmNvbnRhaW5lciAubG9nby1jb250YWluZXIge1xuICBmbGV4OiAxIDEgMjAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG4ubmF2aWdhdGlvbi1jb250YWluZXIgLmNvbnRhaW5lciAubG9nby1jb250YWluZXIgLmxvZ28ge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMkZFN0QzICFpbXBvcnRhbnQ7XG59XG4ubmF2aWdhdGlvbi1jb250YWluZXIgLmNvbnRhaW5lciAubWVudS1jb250YWluZXIge1xuICBmbGV4OiAxIDEgODAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLm5hdmlnYXRpb24tY29udGFpbmVyIC5jb250YWluZXIgLm1lbnUtY29udGFpbmVyIC5uYXZiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICB3aWR0aDogMzAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubmF2aWdhdGlvbi1jb250YWluZXIgLmNvbnRhaW5lciAubWVudS1jb250YWluZXIgLm5hdmJhciAubmF2LWl0ZW0ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjOTE5MTkxO1xufVxuLm5hdmlnYXRpb24tY29udGFpbmVyIC5jb250YWluZXIgLm1lbnUtY29udGFpbmVyIC5uYXZiYXIgLm5hdi1pdGVtIC5hY3RpdmUge1xuICBjb2xvcjogIzJGRTdEMztcbn1cbi5uYXZpZ2F0aW9uLWNvbnRhaW5lciAuY29udGFpbmVyIC5tZW51LWNvbnRhaW5lciAubmF2YmFyIC5uYXYtaXRlbTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: _utils_services_content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _utils_constants_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../utils/constants/animations */
    "./src/app/utils/constants/animations.ts");
    /* harmony import */


    var _utils_services_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../utils/services/content.service */
    "./src/app/utils/services/content.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomeComponent_img_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@disappear", undefined)("src", ctx_r4.wallpaper.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function HomeComponent_h2_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@disappear", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.wallpaper.quote);
      }
    }

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(contentService) {
        var _this2 = this;

        _classCallCheck(this, HomeComponent);

        this.contentService = contentService;
        this.showWallpaper = false;
        this.contentService.$loadJson.subscribe(function (data) {
          if (data) {
            _this2.setContent();
          }
        });
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (typeof this.contentService.Content !== 'undefined') {
            this.setContent();
          }
        }
      }, {
        key: "setContent",
        value: function setContent() {
          this.hContent = this.contentService.Content.home;
          this.runWallpaper();
        }
      }, {
        key: "setWallpaper",
        value: function setWallpaper(num) {
          var _this3 = this;

          setTimeout(function () {
            _this3.wallpaper = _this3.hContent.wallpapers[num];
            _this3.showWallpaper = true;
          }, 1500);
        }
      }, {
        key: "runWallpaper",
        value: function runWallpaper() {
          var _this4 = this;

          this.wallpaper = this.hContent.wallpapers[0];
          this.showWallpaper = true;
          var i = 1;
          setInterval(function () {
            _this4.setWallpaper(i % 3);

            i++;
            _this4.showWallpaper = false;
          }, 2750);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils_services_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 13,
      vars: 3,
      consts: [[1, "container"], [1, "title"], [1, "name"], [1, "wallpapers"], [1, "image"], [3, "src", 4, "ngIf"], [1, "fixed-quote"], [1, "quote"], [4, "ngIf"], [3, "src"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sheetal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_img_7_Template, 1, 2, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "I'm an engineer who enjoys ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_h2_12_Template, 2, 2, "h2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.hContent.title || "", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showWallpaper);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showWallpaper);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: [".container[_ngcontent-%COMP%] {\n  z-index: 1000;\n}\n.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 10%;\n}\n.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: #2FE7D3;\n}\n.container[_ngcontent-%COMP%]   .wallpapers[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-top: 100px;\n}\n.container[_ngcontent-%COMP%]   .wallpapers[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  flex: 1 1 50%;\n}\n.container[_ngcontent-%COMP%]   .wallpapers[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.container[_ngcontent-%COMP%]   .wallpapers[_ngcontent-%COMP%]   .fixed-quote[_ngcontent-%COMP%] {\n  height: 350px;\n  flex: 1 1 30%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding-right: 10px;\n}\n.container[_ngcontent-%COMP%]   .wallpapers[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%] {\n  height: 350px;\n  flex: 1 1 20%;\n  display: flex;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%]   .wallpapers[_ngcontent-%COMP%]   .quote[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  -webkit-text-decoration-color: #2FE7D3;\n          text-decoration-color: #2FE7D3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGVldGFsZ2FyYS9Eb2N1bWVudHMvc2dhcmEvc2hlZXRhbGdhcmEuZ2l0aHViLmlvL3dlYnNpdGUvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zaGVldGFsZ2FyYS9Eb2N1bWVudHMvc2dhcmEvc2hlZXRhbGdhcmEuZ2l0aHViLmlvL3dlYnNpdGUvc3JjL2Fzc2V0cy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7QUNBRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDQ0o7QURBSTtFQUNFLGNFTkU7QURRUjtBRENFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQ0NKO0FEQ0k7RUFDRSxhQUFBO0FDQ047QURBTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDRVI7QURDSTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0NOO0FEQ0k7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NOO0FEQU07RUFDRSwwQkFBQTtFQUNBLHNDRXJDQTtVRnFDQSw4QkVyQ0E7QUR1Q1IiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vYXNzZXRzL3ZhcmlhYmxlc1wiO1xuLmNvbnRhaW5lcntcbiAgei1pbmRleDogMTAwMDtcbiAgLnRpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgLm5hbWV7XG4gICAgICBjb2xvcjogJGJsdWU7XG4gICAgfVxuICB9XG4gIC53YWxscGFwZXJze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcblxuICAgIC5pbWFnZXtcbiAgICAgIGZsZXg6IDEgMSA1MCU7XG4gICAgICBpbWd7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICAgIC5maXhlZC1xdW90ZXtcbiAgICAgIGhlaWdodDogMzUwcHg7XG4gICAgICBmbGV4OiAxIDEgMzAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICB9XG4gICAgLnF1b3Rle1xuICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICAgIGZsZXg6IDEgMSAyMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGgyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogJGJsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuXG4iLCIuY29udGFpbmVyIHtcbiAgei1pbmRleDogMTAwMDtcbn1cbi5jb250YWluZXIgLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG4uY29udGFpbmVyIC50aXRsZSAubmFtZSB7XG4gIGNvbG9yOiAjMkZFN0QzO1xufVxuLmNvbnRhaW5lciAud2FsbHBhcGVycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cbi5jb250YWluZXIgLndhbGxwYXBlcnMgLmltYWdlIHtcbiAgZmxleDogMSAxIDUwJTtcbn1cbi5jb250YWluZXIgLndhbGxwYXBlcnMgLmltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY29udGFpbmVyIC53YWxscGFwZXJzIC5maXhlZC1xdW90ZSB7XG4gIGhlaWdodDogMzUwcHg7XG4gIGZsZXg6IDEgMSAzMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG4uY29udGFpbmVyIC53YWxscGFwZXJzIC5xdW90ZSB7XG4gIGhlaWdodDogMzUwcHg7XG4gIGZsZXg6IDEgMSAyMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC53YWxscGFwZXJzIC5xdW90ZSBoMiB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICMyRkU3RDM7XG59IiwiJGRhcmsgOiAjMDAwMDAwO1xyXG4kYmx1ZSA6ICMyRkU3RDM7XHJcbiR3aGl0ZSA6ICNGRkZGRkY7XHJcbiRncmV5OiAjOTE5MTkxXHJcbiJdfQ== */"],
      data: {
        animation: [_utils_constants_animations__WEBPACK_IMPORTED_MODULE_1__["disappear"], _utils_constants_animations__WEBPACK_IMPORTED_MODULE_1__["slideLeft"], _utils_constants_animations__WEBPACK_IMPORTED_MODULE_1__["slideDown"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss'],
          animations: [_utils_constants_animations__WEBPACK_IMPORTED_MODULE_1__["disappear"], _utils_constants_animations__WEBPACK_IMPORTED_MODULE_1__["slideLeft"], _utils_constants_animations__WEBPACK_IMPORTED_MODULE_1__["slideDown"]]
        }]
      }], function () {
        return [{
          type: _utils_services_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/portfolio/portfolio.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/portfolio/portfolio.component.ts ***!
    \**************************************************/

  /*! exports provided: PortfolioComponent */

  /***/
  function srcAppPortfolioPortfolioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function () {
      return PortfolioComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _utils_services_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../utils/services/content.service */
    "./src/app/utils/services/content.service.ts");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PortfolioComponent_mat_grid_tile_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tile_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", tile_r7.cols)("rowspan", tile_r7.rows);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", tile_r7.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var PortfolioComponent =
    /*#__PURE__*/
    function () {
      function PortfolioComponent(contentService) {
        var _this5 = this;

        _classCallCheck(this, PortfolioComponent);

        this.contentService = contentService;
        this.contentService.$loadJson.subscribe(function (data) {
          if (data) {
            _this5.setContent();
          }
        });
      }

      _createClass(PortfolioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (typeof this.contentService.Content !== 'undefined') {
            this.setContent();
          }
        }
      }, {
        key: "setContent",
        value: function setContent() {
          this.pContent = this.contentService.Content.portfolio;
        }
      }]);

      return PortfolioComponent;
    }();

    PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) {
      return new (t || PortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils_services_content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"]));
    };

    PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PortfolioComponent,
      selectors: [["app-portfolio"]],
      decls: 6,
      vars: 2,
      consts: [[1, "container", "component-container"], [1, "images-container"], ["cols", "4", "rowHeight", "100px", "gutterSize", "10px"], ["class", "image-tile", 3, "colspan", "rowspan", 4, "ngFor", "ngForOf"], [1, "image-tile", 3, "colspan", "rowspan"], [3, "src"]],
      template: function PortfolioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-grid-list", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PortfolioComponent_mat_grid_tile_5_Template, 2, 3, "mat-grid-tile", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.pContent.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pContent.images);
        }
      },
      directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridTile"]],
      styles: [".component-container[_ngcontent-%COMP%] {\n  height: auto;\n}\n.component-container[_ngcontent-%COMP%]   .images-container[_ngcontent-%COMP%] {\n  width: auto;\n  padding: 5px;\n  height: 85vh !important;\n  overflow-y: scroll;\n}\n.component-container[_ngcontent-%COMP%]   .images-container[_ngcontent-%COMP%]   .image-tile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGVldGFsZ2FyYS9Eb2N1bWVudHMvc2dhcmEvc2hlZXRhbGdhcmEuZ2l0aHViLmlvL3dlYnNpdGUvc3JjL2FwcC9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGO0FEQUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNFSjtBREFNO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tcG9uZW50LWNvbnRhaW5lcntcbiAgaGVpZ2h0OiBhdXRvO1xuICAuaW1hZ2VzLWNvbnRhaW5lcntcbiAgICB3aWR0aDogYXV0bztcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgaGVpZ2h0OiA4NXZoIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgLmltYWdlLXRpbGV7XG4gICAgICBpbWd7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuIiwiLmNvbXBvbmVudC1jb250YWluZXIge1xuICBoZWlnaHQ6IGF1dG87XG59XG4uY29tcG9uZW50LWNvbnRhaW5lciAuaW1hZ2VzLWNvbnRhaW5lciB7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nOiA1cHg7XG4gIGhlaWdodDogODV2aCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4uY29tcG9uZW50LWNvbnRhaW5lciAuaW1hZ2VzLWNvbnRhaW5lciAuaW1hZ2UtdGlsZSBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-portfolio',
          templateUrl: './portfolio.component.html',
          styleUrls: ['./portfolio.component.scss']
        }]
      }], function () {
        return [{
          type: _utils_services_content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/utils/constants/ApiPaths.ts":
  /*!*********************************************!*\
    !*** ./src/app/utils/constants/ApiPaths.ts ***!
    \*********************************************/

  /*! exports provided: APIPaths */

  /***/
  function srcAppUtilsConstantsApiPathsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APIPaths", function () {
      return APIPaths;
    });

    var APIPaths = {
      contenURL: "assets/content.json"
    };
    /***/
  },

  /***/
  "./src/app/utils/constants/animations.ts":
  /*!***********************************************!*\
    !*** ./src/app/utils/constants/animations.ts ***!
    \***********************************************/

  /*! exports provided: slideUp, slideLeft, slideDown, disappear */

  /***/
  function srcAppUtilsConstantsAnimationsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "slideUp", function () {
      return slideUp;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "slideLeft", function () {
      return slideLeft;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "slideDown", function () {
      return slideDown;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "disappear", function () {
      return disappear;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var slideUp = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideUp', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateY(10%)',
      opacity: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateY(0)',
      opacity: 1
    }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateY(0)',
      opacity: 1
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateY(10%)',
      opacity: 0
    }))])]);
    var slideLeft = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideLeft', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-100%)',
      opacity: 1
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(0)',
      opacity: 1
    }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(0)',
      opacity: 1
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('250ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-100%)',
      opacity: 0
    }))])]);
    var slideDown = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slideDown', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateY(10%)',
      opacity: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateY(0)',
      opacity: 1
    }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateY(0)',
      opacity: 1
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateY(10%)',
      opacity: 0
    }))])]);
    var disappear = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('disappear', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(1500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1
    }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 1
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: 0
    }))])]);
    /***/
  },

  /***/
  "./src/app/utils/services/api.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/utils/services/api.service.ts ***!
    \***********************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppUtilsServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ApiService =
    /*#__PURE__*/
    function () {
      function ApiService(http) {
        _classCallCheck(this, ApiService);

        this.http = http;
      }

      _createClass(ApiService, [{
        key: "get",
        value: function get(url) {
          return this.http.get(url);
        }
      }]);

      return ApiService;
    }();

    ApiService.ɵfac = function ApiService_Factory(t) {
      return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiService,
      factory: ApiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/utils/services/content.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/utils/services/content.service.ts ***!
    \***************************************************/

  /*! exports provided: ContentService */

  /***/
  function srcAppUtilsServicesContentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentService", function () {
      return ContentService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _constants_ApiPaths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../constants/ApiPaths */
    "./src/app/utils/constants/ApiPaths.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/utils/services/api.service.ts");

    var ContentService =
    /*#__PURE__*/
    function () {
      function ContentService(apiService) {
        _classCallCheck(this, ContentService);

        this.apiService = apiService;
        this.$loadJson = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.init();
      }

      _createClass(ContentService, [{
        key: "init",
        value: function init() {
          var _this6 = this;

          this.apiService.get(_constants_ApiPaths__WEBPACK_IMPORTED_MODULE_1__["APIPaths"].contenURL).subscribe(function (data) {
            _this6.Content = data;

            _this6.$loadJson.next(true);
          });
        }
      }]);

      return ContentService;
    }();

    ContentService.ɵfac = function ContentService_Factory(t) {
      return new (t || ContentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]));
    };

    ContentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ContentService,
      factory: ContentService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/work/vertical-timeline/vertical-timeline.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/work/vertical-timeline/vertical-timeline.component.ts ***!
    \***********************************************************************/

  /*! exports provided: Alignment, VerticalTimelineComponent */

  /***/
  function srcAppWorkVerticalTimelineVerticalTimelineComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Alignment", function () {
      return Alignment;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerticalTimelineComponent", function () {
      return VerticalTimelineComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _work_dialog_work_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../work-dialog/work-dialog.component */
    "./src/app/work/work-dialog/work-dialog.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function VerticalTimelineComponent_div_1_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerticalTimelineComponent_div_1_ng_template_2_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.openDialog(item_r13);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 10);
      }

      if (rf & 2) {
        var item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.date);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.title);
      }
    }

    function VerticalTimelineComponent_div_1_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerticalTimelineComponent_div_1_ng_template_8_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.openDialog(item_r13);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.date);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.title);
      }
    }

    function VerticalTimelineComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VerticalTimelineComponent_div_1_ng_template_2_Template, 7, 2, "ng-template", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, VerticalTimelineComponent_div_1_ng_template_8_Template, 7, 2, "ng-template", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r13 = ctx.$implicit;

        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.direction == ctx_r12.allAlignments.Left);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.circleText);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r13.direction == ctx_r12.allAlignments.Right);
      }
    }

    var Alignment;

    (function (Alignment) {
      Alignment[Alignment["Left"] = 0] = "Left";
      Alignment[Alignment["Right"] = 1] = "Right";
      Alignment[Alignment["Alternate"] = 2] = "Alternate";
    })(Alignment || (Alignment = {}));

    var VerticalTimelineComponent =
    /*#__PURE__*/
    function () {
      function VerticalTimelineComponent(dialog) {
        _classCallCheck(this, VerticalTimelineComponent);

        this.dialog = dialog;
        this.rows = 1;
        this.alignment = Alignment.Alternate;
        this.data = [];
        this.allAlignments = Alignment;
      }

      _createClass(VerticalTimelineComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          switch (this.alignment) {
            case Alignment.Left:
            case Alignment.Right:
              this.data.forEach(function (item) {
                return item.direction = _this7.alignment;
              });
              break;

            default:
              this.data.forEach(function (item, index) {
                if (index % 2 === 0) {
                  item.direction = Alignment.Left;
                } else {
                  item.direction = Alignment.Right;
                }
              });
              break;
          }
        }
      }, {
        key: "openDialog",
        value: function openDialog(item) {
          var currentDialogRef = this.dialog.open(_work_dialog_work_dialog_component__WEBPACK_IMPORTED_MODULE_1__["WorkDialogComponent"], {
            data: item
          });
          currentDialogRef.afterClosed().subscribe(function (result) {
            currentDialogRef = null;
          });
        }
      }]);

      return VerticalTimelineComponent;
    }();

    VerticalTimelineComponent.ɵfac = function VerticalTimelineComponent_Factory(t) {
      return new (t || VerticalTimelineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]));
    };

    VerticalTimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VerticalTimelineComponent,
      selectors: [["vertical-timeline"]],
      inputs: {
        rows: "rows",
        alignment: "alignment",
        data: "data"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "time-line-container"], ["class", "time-line-block", 4, "ngFor", "ngForOf"], [1, "time-line-block"], [1, "content", "left"], [3, "ngIf"], [1, "divider"], [1, "circle"], [1, "content", "right"], [1, "time-line-text", 3, "click"], [1, "date-container"], [1, "triangle-right"], [1, "triangle-left"]],
      template: function VerticalTimelineComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VerticalTimelineComponent_div_1_Template, 9, 3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: [".time-line-container[_ngcontent-%COMP%] {\n  padding: 3% 0;\n  height: 650px;\n  overflow-y: scroll;\n  display: flex;\n  flex-direction: column;\n}\n.time-line-container[_ngcontent-%COMP%]   .time-line-block[_ngcontent-%COMP%] {\n  flex: 1 1 100%;\n  display: flex;\n  flex-direction: row;\n}\n.time-line-container[_ngcontent-%COMP%]   .time-line-block[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  background: #2FE7D3;\n  justify-content: flex-start;\n  width: 2px;\n  display: flex;\n  flex-direction: column;\n}\n.time-line-container[_ngcontent-%COMP%]   .time-line-block[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  border: 1px solid #FFFFFF;\n  background: #000000;\n  height: 30px;\n  width: 30px;\n  border-radius: 15px;\n  margin-left: -15px;\n  margin-top: 22px;\n  text-align: center;\n  line-height: 30px;\n}\n.time-line-container[_ngcontent-%COMP%]   .time-line-block[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #000000;\n}\n.time-line-container[_ngcontent-%COMP%]   .time-line-block[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  flex: 1 1 50%;\n  color: #000000 !important;\n  border: #FFFFFF;\n  cursor: pointer;\n  display: flex;\n}\n.time-line-container[_ngcontent-%COMP%]   .time-line-block[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .time-line-text[_ngcontent-%COMP%] {\n  border: 1px solid #FFFFFF;\n  border-radius: 30px;\n  width: 100%;\n  height: 80px;\n  text-align: center;\n  padding: 10px;\n}\n.time-line-container[_ngcontent-%COMP%]   .time-line-block[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .time-line-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .time-line-container[_ngcontent-%COMP%]   .time-line-block[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .time-line-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n}\n.time-line-container[_ngcontent-%COMP%]   .time-line-block[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .time-line-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.time-line-container[_ngcontent-%COMP%]   .time-line-block[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .time-line-text[_ngcontent-%COMP%]   .date-container[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  text-align: right !important;\n}\n.time-line-container[_ngcontent-%COMP%]   .time-line-block[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .time-line-text[_ngcontent-%COMP%]:hover {\n  box-shadow: 5px 4px 5px 1px #2FE7D3;\n}\n.time-line-container[_ngcontent-%COMP%]   .time-line-block[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .time-line-text[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.time-line-container[_ngcontent-%COMP%]   .time-line-block[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .triangle-right[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  border-top: 15px solid transparent;\n  border-left: 15px solid #FFFFFF;\n  border-bottom: 15px solid transparent;\n  margin-top: 25px;\n}\n.time-line-container[_ngcontent-%COMP%]   .time-line-block[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .triangle-left[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  border-top: 15px solid transparent;\n  border-right: 15px solid #FFFFFF;\n  border-bottom: 15px solid transparent;\n  margin-top: 25px;\n}\n.time-line-container[_ngcontent-%COMP%]   .time-line-block[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\n.time-line-container[_ngcontent-%COMP%]   .time-line-block[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGVldGFsZ2FyYS9Eb2N1bWVudHMvc2dhcmEvc2hlZXRhbGdhcmEuZ2l0aHViLmlvL3dlYnNpdGUvc3JjL2FwcC93b3JrL3ZlcnRpY2FsLXRpbWVsaW5lL3ZlcnRpY2FsLXRpbWVsaW5lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC93b3JrL3ZlcnRpY2FsLXRpbWVsaW5lL3ZlcnRpY2FsLXRpbWVsaW5lLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NoZWV0YWxnYXJhL0RvY3VtZW50cy9zZ2FyYS9zaGVldGFsZ2FyYS5naXRodWIuaW8vd2Vic2l0ZS9zcmMvYXNzZXRzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0FGO0FEQ0U7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0o7QURBSTtFQUNFLG1CRVhFO0VGWUYsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDRU47QURETTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNHUjtBREZRO0VBQ0UsY0U1QkY7QURnQ1I7QURBSTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGVFakNHO0VGa0NILGVBQUE7RUFDQSxhQUFBO0FDRU47QURETTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBUUEsYUFBQTtBQ0pSO0FERlE7RUFDRSxjRTVDRDtBRGdEVDtBREZRO0VBQ0UsZUFBQTtBQ0lWO0FERFE7RUFDSSxnQkFBQTtFQUNBLDRCQUFBO0FDR1o7QURBTTtFQUNFLG1DQUFBO0FDRVI7QUREUTtFQUNFLDBCQUFBO0FDR1Y7QURFTTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDQSwrQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUNBUjtBREdNO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtBQ0RSO0FES0k7RUFDRSxtQkFBQTtBQ0hOO0FES0k7RUFDRSxrQkFBQTtBQ0hOIiwiZmlsZSI6InNyYy9hcHAvd29yay92ZXJ0aWNhbC10aW1lbGluZS92ZXJ0aWNhbC10aW1lbGluZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvdmFyaWFibGVzXCI7XG4udGltZS1saW5lLWNvbnRhaW5lcntcbiAgcGFkZGluZzogMyUgMDtcbiAgaGVpZ2h0OiA2NTBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAudGltZS1saW5lLWJsb2Nre1xuICAgIGZsZXg6IDEgMSAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAuZGl2aWRlcntcbiAgICAgIGJhY2tncm91bmQ6ICRibHVlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgd2lkdGg6IDJweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgLmNpcmNsZXtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0ZGRkZGRjtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAyMnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICBzcGFue1xuICAgICAgICAgIGNvbG9yOiAkZGFyaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuY29udGVudHtcbiAgICAgIGZsZXg6IDEgMSA1MCU7XG4gICAgICBjb2xvcjogJGRhcmsgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlcjogJHdoaXRlO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIC50aW1lLWxpbmUtdGV4dHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgcCxoM3tcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIGgze1xuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgfVxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAuZGF0ZS1jb250YWluZXJ7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnRpbWUtbGluZS10ZXh0OmhvdmVye1xuICAgICAgICBib3gtc2hhZG93OiA1cHggNHB4IDVweCAxcHggJGJsdWU7XG4gICAgICAgIGgze1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgICAgLnRyaWFuZ2xlLXJpZ2h0IHtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgYm9yZGVyLXRvcDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgJHdoaXRlO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgfVxuXG4gICAgICAudHJpYW5nbGUtbGVmdCB7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIGJvcmRlci10b3A6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1yaWdodDogMTVweCBzb2xpZCAkd2hpdGU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmxlZnR7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIH1cbiAgICAucmlnaHR7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgfVxuICB9XG59XG4iLCIudGltZS1saW5lLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDMlIDA7XG4gIGhlaWdodDogNjUwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi50aW1lLWxpbmUtY29udGFpbmVyIC50aW1lLWxpbmUtYmxvY2sge1xuICBmbGV4OiAxIDEgMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi50aW1lLWxpbmUtY29udGFpbmVyIC50aW1lLWxpbmUtYmxvY2sgLmRpdmlkZXIge1xuICBiYWNrZ3JvdW5kOiAjMkZFN0QzO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4udGltZS1saW5lLWNvbnRhaW5lciAudGltZS1saW5lLWJsb2NrIC5kaXZpZGVyIC5jaXJjbGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjRkZGRkZGO1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIG1hcmdpbi10b3A6IDIycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG4udGltZS1saW5lLWNvbnRhaW5lciAudGltZS1saW5lLWJsb2NrIC5kaXZpZGVyIC5jaXJjbGUgc3BhbiB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLnRpbWUtbGluZS1jb250YWluZXIgLnRpbWUtbGluZS1ibG9jayAuY29udGVudCB7XG4gIGZsZXg6IDEgMSA1MCU7XG4gIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogI0ZGRkZGRjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnRpbWUtbGluZS1jb250YWluZXIgLnRpbWUtbGluZS1ibG9jayAuY29udGVudCAudGltZS1saW5lLXRleHQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjRkZGRkZGO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4udGltZS1saW5lLWNvbnRhaW5lciAudGltZS1saW5lLWJsb2NrIC5jb250ZW50IC50aW1lLWxpbmUtdGV4dCBwLCAudGltZS1saW5lLWNvbnRhaW5lciAudGltZS1saW5lLWJsb2NrIC5jb250ZW50IC50aW1lLWxpbmUtdGV4dCBoMyB7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLnRpbWUtbGluZS1jb250YWluZXIgLnRpbWUtbGluZS1ibG9jayAuY29udGVudCAudGltZS1saW5lLXRleHQgaDMge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4udGltZS1saW5lLWNvbnRhaW5lciAudGltZS1saW5lLWJsb2NrIC5jb250ZW50IC50aW1lLWxpbmUtdGV4dCAuZGF0ZS1jb250YWluZXIge1xuICBmb250LXNpemU6IDAuOGVtO1xuICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xufVxuLnRpbWUtbGluZS1jb250YWluZXIgLnRpbWUtbGluZS1ibG9jayAuY29udGVudCAudGltZS1saW5lLXRleHQ6aG92ZXIge1xuICBib3gtc2hhZG93OiA1cHggNHB4IDVweCAxcHggIzJGRTdEMztcbn1cbi50aW1lLWxpbmUtY29udGFpbmVyIC50aW1lLWxpbmUtYmxvY2sgLmNvbnRlbnQgLnRpbWUtbGluZS10ZXh0OmhvdmVyIGgzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4udGltZS1saW5lLWNvbnRhaW5lciAudGltZS1saW5lLWJsb2NrIC5jb250ZW50IC50cmlhbmdsZS1yaWdodCB7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci10b3A6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkICNGRkZGRkY7XG4gIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG4udGltZS1saW5lLWNvbnRhaW5lciAudGltZS1saW5lLWJsb2NrIC5jb250ZW50IC50cmlhbmdsZS1sZWZ0IHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXRvcDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAxNXB4IHNvbGlkICNGRkZGRkY7XG4gIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG4udGltZS1saW5lLWNvbnRhaW5lciAudGltZS1saW5lLWJsb2NrIC5sZWZ0IHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbi50aW1lLWxpbmUtY29udGFpbmVyIC50aW1lLWxpbmUtYmxvY2sgLnJpZ2h0IHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufSIsIiRkYXJrIDogIzAwMDAwMDtcclxuJGJsdWUgOiAjMkZFN0QzO1xyXG4kd2hpdGUgOiAjRkZGRkZGO1xyXG4kZ3JleTogIzkxOTE5MVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VerticalTimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'vertical-timeline',
          templateUrl: './vertical-timeline.component.html',
          styleUrls: ['./vertical-timeline.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }];
      }, {
        rows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        alignment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/work/work-dialog/work-dialog.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/work/work-dialog/work-dialog.component.ts ***!
    \***********************************************************/

  /*! exports provided: WorkDialogComponent */

  /***/
  function srcAppWorkWorkDialogWorkDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkDialogComponent", function () {
      return WorkDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function WorkDialogComponent_div_0_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var path_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", path_r11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function WorkDialogComponent_div_0_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WorkDialogComponent_div_0_div_4_div_1_Template, 2, 1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.data.images);
      }
    }

    function WorkDialogComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WorkDialogComponent_div_0_div_4_Template, 2, 1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.data.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.data.images && ctx_r8.data.images.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.data.text);
      }
    }

    var WorkDialogComponent =
    /*#__PURE__*/
    function () {
      function WorkDialogComponent(dialogRef, data) {
        _classCallCheck(this, WorkDialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(WorkDialogComponent, [{
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.data);
        }
      }]);

      return WorkDialogComponent;
    }();

    WorkDialogComponent.ɵfac = function WorkDialogComponent_Factory(t) {
      return new (t || WorkDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    WorkDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WorkDialogComponent,
      selectors: [["app-work-dialog"]],
      decls: 1,
      vars: 1,
      consts: [["class", "work-dialog-container", 4, "ngIf"], [1, "work-dialog-container"], [1, "title"], [1, "work-dialog-content"], ["class", "image-container", 4, "ngIf"], [1, "popup-text"], [1, "image-container"], ["class", "popup-image", 4, "ngFor", "ngForOf"], [1, "popup-image"], [3, "src"]],
      template: function WorkDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WorkDialogComponent_div_0_Template, 8, 3, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".title[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: center;\n}\n\n.work-dialog-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.work-dialog-content[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  flex: 1 1 100%;\n  justify-content: flex-start;\n  height: 450px;\n  overflow-y: scroll;\n  padding: 10px;\n}\n\n.work-dialog-content[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .popup-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.work-dialog-content[_ngcontent-%COMP%]   .popup-text[_ngcontent-%COMP%] {\n  flex: 1 1 100%;\n  justify-content: flex-start;\n}\n\n.work-dialog-content[_ngcontent-%COMP%]   .popup-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #000000;\n  white-space: pre-line;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGVldGFsZ2FyYS9Eb2N1bWVudHMvc2dhcmEvc2hlZXRhbGdhcmEuZ2l0aHViLmlvL3dlYnNpdGUvc3JjL2FwcC93b3JrL3dvcmstZGlhbG9nL3dvcmstZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NoZWV0YWxnYXJhL0RvY3VtZW50cy9zZ2FyYS9zaGVldGFsZ2FyYS5naXRodWIuaW8vd2Vic2l0ZS9zcmMvYXNzZXRzL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC93b3JrL3dvcmstZGlhbG9nL3dvcmstZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsY0NGTTtFREdOLGtCQUFBO0FFQUY7O0FGRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBRUNGOztBRkFFO0VBQ0UsY0FBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBRUVKOztBRkFNO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUVFUjs7QUZFRTtFQUNFLGNBQUE7RUFDQSwyQkFBQTtBRUFKOztBRkNJO0VBQ0UsY0N6QkU7RUQwQkYscUJBQUE7QUVDTiIsImZpbGUiOiJzcmMvYXBwL3dvcmsvd29yay1kaWFsb2cvd29yay1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3ZhcmlhYmxlc1wiO1xuLnRpdGxle1xuICBjb2xvcjogJGRhcms7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi53b3JrLWRpYWxvZy1jb250ZW50e1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIC5pbWFnZS1jb250YWluZXJ7XG4gICAgZmxleDogMSAxIDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGhlaWdodDogNDUwcHg7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgLnBvcHVwLWltYWdle1xuICAgICAgaW1ne1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAucG9wdXAtdGV4dHtcbiAgICBmbGV4OiAxIDEgMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcHtcbiAgICAgIGNvbG9yOiAkZGFyaztcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgICB9XG4gIH1cbn1cbiIsIiRkYXJrIDogIzAwMDAwMDtcclxuJGJsdWUgOiAjMkZFN0QzO1xyXG4kd2hpdGUgOiAjRkZGRkZGO1xyXG4kZ3JleTogIzkxOTE5MVxyXG4iLCIudGl0bGUge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ud29yay1kaWFsb2ctY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi53b3JrLWRpYWxvZy1jb250ZW50IC5pbWFnZS1jb250YWluZXIge1xuICBmbGV4OiAxIDEgMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBoZWlnaHQ6IDQ1MHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ud29yay1kaWFsb2ctY29udGVudCAuaW1hZ2UtY29udGFpbmVyIC5wb3B1cC1pbWFnZSBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLndvcmstZGlhbG9nLWNvbnRlbnQgLnBvcHVwLXRleHQge1xuICBmbGV4OiAxIDEgMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLndvcmstZGlhbG9nLWNvbnRlbnQgLnBvcHVwLXRleHQgcCB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-work-dialog',
          templateUrl: './work-dialog.component.html',
          styleUrls: ['./work-dialog.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/work/work.component.ts":
  /*!****************************************!*\
    !*** ./src/app/work/work.component.ts ***!
    \****************************************/

  /*! exports provided: WorkComponent */

  /***/
  function srcAppWorkWorkComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkComponent", function () {
      return WorkComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _utils_services_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../utils/services/content.service */
    "./src/app/utils/services/content.service.ts");
    /* harmony import */


    var _vertical_timeline_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./vertical-timeline/vertical-timeline.component */
    "./src/app/work/vertical-timeline/vertical-timeline.component.ts");

    var WorkComponent =
    /*#__PURE__*/
    function () {
      function WorkComponent(contentService) {
        var _this8 = this;

        _classCallCheck(this, WorkComponent);

        this.contentService = contentService;
        this.contentService.$loadJson.subscribe(function (data) {
          if (data) {
            _this8.setContent();
          }
        });
      }

      _createClass(WorkComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (typeof this.contentService.Content != "undefined") {
            this.setContent();
          }
        }
      }, {
        key: "setContent",
        value: function setContent() {
          this.wContent = this.contentService.Content.work;
        }
      }]);

      return WorkComponent;
    }();

    WorkComponent.ɵfac = function WorkComponent_Factory(t) {
      return new (t || WorkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils_services_content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"]));
    };

    WorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WorkComponent,
      selectors: [["app-work"]],
      decls: 5,
      vars: 3,
      consts: [[1, "container", "work-component-container"], [1, "timeline-container"], [3, "alignment", "data"]],
      template: function WorkComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "vertical-timeline", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.wContent.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alignment", ctx.wContent.alignment)("data", ctx.wContent.timeLineData);
        }
      },
      directives: [_vertical_timeline_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_2__["VerticalTimelineComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvcmsvd29yay5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-work',
          templateUrl: './work.component.html',
          styleUrls: ['./work.component.scss']
        }]
      }], function () {
        return [{
          type: _utils_services_content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/sheetalgara/Documents/sgara/sheetalgara.github.io/website/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map