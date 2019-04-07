(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h3>Git Best Repos Finder</h3>\r\n  <hr>\r\n  <p>&nbsp;</p>\r\n\r\n  <section class=\"row\">\r\n\r\n    <div class=\"col-md-5 col-md-offset-1\">\r\n      <h5>Find Best Repos By Language</h5>\r\n      <br>\r\n      <form #repoForm=\"ngForm\" (ngSubmit)=\"onSubmit(repoForm.value)\">\r\n        <div class=\"form-group\">\r\n          <label for=\"language\">Choose a programming language: </label>\r\n          &nbsp;\r\n          <select name=\"language\" [(ngModel)]=\"language\">\r\n            <option value=\"python\"> Python </option>\r\n            <option value=\"java\"> Java </option>\r\n            <option value=\"typescript\"> TypeScript </option>\r\n            <option value=\"ruby\"> Ruby </option>\r\n            <option value=\"php\"> PHP </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"text-right\">\r\n          <button type=\"submit\" class=\"btn btn-primary\"><i class=\"fab fa-searchengin\"></i> Search </button>\r\n        </div>\r\n      </form>\r\n\r\n      <div class='table-responsive'>\r\n        <table class='table'>\r\n          <thead>\r\n            <tr>\r\n              <th> ID </th>\r\n              <th> Name </th>\r\n              <th> Stars </th>\r\n              <th> </th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let repo of repoData\">\r\n              <td>{{repo.id}}</td>\r\n              <td>{{repo.name}}</td>\r\n              <td>{{repo.stargazers_count}}</td>\r\n              <td>\r\n                <div class=\"text-right\">\r\n                  <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteRepo(repo.id)\">\r\n                    <i class=\"fas fa-trash-alt\"></i>\r\n                  </button>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <!-- {{ repoData | json }} -->\r\n    </div>\r\n\r\n    <div class=\"col-md-6\">\r\n      <div [hidden]=\"!loading\" class=\"text-center\">Loading...</div>\r\n      <div [hidden]=\"!error\" class=\"text-center alert alert-warning\">\r\n        <strong>Warning!</strong> {{error}}\r\n      </div>\r\n      <div [hidden]=\"repoGit==null\">\r\n        <!-- <div class=\"text-right\">\r\n          <button type=\"submit\" class=\"btn btn-primary\"><i class=\"fas fa-save\"></i> Save Results </button>\r\n        </div> -->\r\n        <br>\r\n        <ng-container *ngFor=\"let repo of repoGit\">\r\n          <div class=\"alert alert-info\">\r\n            <h5>{{ repo.name }}</h5>\r\n            <p>{{ repo.description }}</p>\r\n\r\n            <p><a target=\"_blank\" href=\"{{ repo.html_url }}\">{{ repo.html_url }}</a></p>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <button type=\"button\" class=\"btn btn-primary\">\r\n                    <i class=\"fas fa-star\"></i>&nbsp;\r\n                    <span class=\"badge badge-light\">{{ repo.stargazers_count }}</span>\r\n                </button>\r\n                &nbsp;\r\n                <button type=\"button\" class=\"btn btn-primary\">\r\n                    <i class=\"fas fa-glasses\"></i>&nbsp;\r\n                    <span class=\"badge badge-light\">{{ repo.watchers_count }}</span>\r\n                </button>\r\n              </div>\r\n\r\n              <div class=\"col-md-6\">\r\n                <div class=\"text-right\">\r\n                  <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveRepo(repo)\">\r\n                    <i class=\"fas fa-save\"></i>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_git_connector_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/git-connector.service */ "./src/app/services/git-connector.service.ts");
/* harmony import */ var _services_repository_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/repository.service */ "./src/app/services/repository.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(_service, _api) {
        this._service = _service;
        this._api = _api;
        this.loading = false;
        this.language = '';
        this.error = '';
    }
    // tslint:disable-next-line: use-life-cycle-interface
    AppComponent.prototype.ngOnInit = function () {
        this.loadRepos();
    };
    AppComponent.prototype.onSubmit = function (repoForm) {
        var _this = this;
        this.loading = true;
        this.error = '';
        this.repoGit = null;
        this._service.getBestRepositoriesByLanguage(repoForm.language)
            .subscribe(function (response) {
            _this.repoGit = response.items;
        }, function (error) {
            _this.error = error.message;
            _this.loading = false;
        }, function () {
            _this.loading = false;
        });
    };
    AppComponent.prototype.loadRepos = function () {
        var _this = this;
        this._api.getRepositories().subscribe(function (response) {
            _this.repoData = response;
        }, function (error) {
            console.log(error.message);
        });
    };
    AppComponent.prototype.saveRepo = function (newRepo) {
        var _this = this;
        this._api.create(newRepo).subscribe(function (response) {
            console.log(response);
            _this.loadRepos();
        }, function (error) {
            console.log(error.message);
        });
    };
    AppComponent.prototype.deleteRepo = function (id) {
        var _this = this;
        this._api.delete(id).subscribe(function (response) {
            console.log(response);
            _this.loadRepos();
        }, function (error) {
            console.log(error.message);
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_git_connector_service__WEBPACK_IMPORTED_MODULE_1__["GitConnectorService"],
            _services_repository_service__WEBPACK_IMPORTED_MODULE_2__["RepositoryService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_git_connector_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/git-connector.service */ "./src/app/services/git-connector.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
            ],
            providers: [_services_git_connector_service__WEBPACK_IMPORTED_MODULE_6__["GitConnectorService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/git-connector.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/git-connector.service.ts ***!
  \***************************************************/
/*! exports provided: GitConnectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitConnectorService", function() { return GitConnectorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GitConnectorService = /** @class */ (function () {
    function GitConnectorService(_http) {
        this._http = _http;
        this._defaultUrl = 'https://api.github.com';
    }
    GitConnectorService.prototype.findRepositoryByName = function (login, repository) {
        return this._http.get(this._defaultUrl + 'repos/' + login + '/' + repository);
    };
    GitConnectorService.prototype.getBestRepositoriesByLanguage = function (language) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .append('q', 'language:' + language)
            .append('sort', 'stars')
            .append('order', 'desc')
            .append('per_page', '5');
        return this._http.get(this._defaultUrl + '/search/repositories', { params: params });
    };
    GitConnectorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GitConnectorService);
    return GitConnectorService;
}());



/***/ }),

/***/ "./src/app/services/repository.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/repository.service.ts ***!
  \************************************************/
/*! exports provided: RepositoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositoryService", function() { return RepositoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RepositoryService = /** @class */ (function () {
    function RepositoryService(_http) {
        this._http = _http;
        this._url = 'https://git-conn-api.herokuapp.com/api/repositories/';
    }
    RepositoryService.prototype.getRepositories = function () {
        return this._http.get(this._url);
    };
    RepositoryService.prototype.getRepository = function (id) {
        return this._http.get(this._url + id);
    };
    RepositoryService.prototype.create = function (repo) {
        repo.id = null;
        return this._http.post(this._url, repo);
    };
    RepositoryService.prototype.delete = function (id) {
        return this._http.delete(this._url + id);
    };
    RepositoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RepositoryService);
    return RepositoryService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projetos\Ateliware\git-conn-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map