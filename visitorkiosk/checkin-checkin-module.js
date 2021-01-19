(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkin-checkin-module"],{

/***/ "E3cA":
/*!*****************************************************!*\
  !*** ./src/app/checkin/checkin-result.component.ts ***!
  \*****************************************************/
/*! exports provided: CheckinResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinResultsComponent", function() { return CheckinResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _checkin_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkin-state.service */ "cvcL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "s2Ay");










function CheckinResultsComponent_div_0_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Please wait in the lobby."), " ");
} }
function CheckinResultsComponent_div_0_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Please use the vistor access lift over there."), " ");
} }
const _c0 = function () { return ["/checkin", "preferences"]; };
function CheckinResultsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CheckinResultsComponent_div_0_ng_container_15_Template, 3, 3, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CheckinResultsComponent_div_0_ng_container_17_Template, 3, 3, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_1_0 = null;
    let tmp_3_0 = null;
    let tmp_4_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 11, "You are checked in!"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 13, "Welcome, you have a meeting at"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 15, ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 18, ctx_r0.event)) == null ? null : tmp_1_0.event_start) || "", "shortDate"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 20, "with"), " ", (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 22, ctx_r0.event).organiser == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 22, ctx_r0.event).organiser.name) || "", ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 24, ctx_r0.event).organiser == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 24, ctx_r0.event).organiser.name) || "", " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 26, "has been notified and will be with you shortly."), "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 28, ctx_r0.event)) == null ? null : tmp_3_0.can_access_lift));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 30, ctx_r0.event)) == null ? null : tmp_4_0.can_access_lift);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 32, "Done"), " ");
} }
class CheckinResultsComponent {
    constructor(_checkin, _router) {
        this._checkin = _checkin;
        this._router = _router;
        this.event = this._checkin.event;
        this.guest = this._checkin.guest;
    }
    ngOnInit() {
        this.event.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe((_) => (!_ ? this.previous() : ''));
    }
    previous() {
        this._router.navigate(['/checkin']);
    }
}
CheckinResultsComponent.ɵfac = function CheckinResultsComponent_Factory(t) { return new (t || CheckinResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_checkin_state_service__WEBPACK_IMPORTED_MODULE_3__["CheckinStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
CheckinResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckinResultsComponent, selectors: [["checkin-results"]], decls: 2, vars: 3, consts: [["class", "bg-white rounded shadow overflow-hidden relative flex flex-col items-center my-4 p-4 mx-auto", 4, "ngIf"], [1, "bg-white", "rounded", "shadow", "overflow-hidden", "relative", "flex", "flex-col", "items-center", "my-4", "p-4", "mx-auto"], [1, "text-xl"], [1, "text-center", "my-4"], [4, "ngIf"], ["button", "", "mat-button", "", 3, "routerLink"]], template: function CheckinResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CheckinResultsComponent_div_0_Template, 22, 35, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.event));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["[_nghost-%COMP%] {\n                position: absolute;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background-color: rgba(0, 0, 0, 0.5);\n            }\n\n            [_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n                width: 32rem;\n                max-width: calc(100vw - 2rem);\n            }\n\n            [button][_ngcontent-%COMP%] {\n                min-width: 8rem;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckinResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'checkin-results',
                template: `
        <div
            class="bg-white rounded shadow overflow-hidden relative flex flex-col items-center my-4 p-4 mx-auto"
            *ngIf="event | async"
        >
            <h3 class="text-xl">{{ 'You are checked in!' | translate }}</h3>
            <p class="text-center my-4">
                {{ 'Welcome, you have a meeting at' | translate }}
                {{ (event | async)?.event_start || '' | date: 'shortDate' }}
                {{ 'with' | translate }}
                {{ (event | async).organiser?.name || '' }}.<br />
                {{ (event | async).organiser?.name || '' }}
                {{
                    'has been notified and will be with you shortly.'
                        | translate
                }}&nbsp;
                <ng-container *ngIf="!(event | async)?.can_access_lift">
                    {{ 'Please wait in the lobby.' | translate }}
                </ng-container>
                <ng-container *ngIf="(event | async)?.can_access_lift">
                    {{
                        'Please use the vistor access lift over there.'
                            | translate
                    }}
                </ng-container>
            </p>
            <a button mat-button [routerLink]="['/checkin', 'preferences']">
                {{ 'Done' | translate }}
            </a>
        </div>
    `,
                styles: [
                    `
            :host {
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.5);
            }

            :host > div {
                width: 32rem;
                max-width: calc(100vw - 2rem);
            }

            [button] {
                min-width: 8rem;
            }
        `,
                ],
            }]
    }], function () { return [{ type: _checkin_state_service__WEBPACK_IMPORTED_MODULE_3__["CheckinStateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "GriS":
/*!****************************************************!*\
  !*** ./src/app/checkin/checkin-covid.component.ts ***!
  \****************************************************/
/*! exports provided: CheckinCovidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinCovidComponent", function() { return CheckinCovidComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _checkin_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkin-state.service */ "cvcL");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/radio */ "F1o0");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon/icon.component */ "ukpX");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "s2Ay");












const _c0 = ["checkin-covid", ""];
const _c1 = function () { return ["/welcome"]; };
class CheckinCovidComponent {
    constructor(_router, _checkin) {
        this._router = _router;
        this._checkin = _checkin;
    }
    confirm() {
        if (!this.symptoms || !this.contact)
            return Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["notifyError"])('Please select yes or no for each question');
        this._checkin.updateGuest({
            covid: this.contact === 'true',
            symptoms: this.symptoms === 'true',
        });
        if (this.symptoms === 'false' && this.contact === 'false') {
            this._router.navigate(['/checkin', 'results']);
        }
        else {
            this._checkin.setError('Please get tested for COVID-19 and self-isolate at home for 14 days');
            this._router.navigate(['/checkin', 'error']);
        }
    }
}
CheckinCovidComponent.ɵfac = function CheckinCovidComponent_Factory(t) { return new (t || CheckinCovidComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_checkin_state_service__WEBPACK_IMPORTED_MODULE_3__["CheckinStateService"])); };
CheckinCovidComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckinCovidComponent, selectors: [["", "checkin-covid", ""]], attrs: _c0, decls: 77, vars: 71, consts: [[1, "bg-white", "rounded", "p-4", "relative", "overflow-y-auto", "overflow-x-hidden"], [1, "text-xl", "font-medium", "mb-4"], [1, "list-decimal", "list-inside"], [1, "list-disc", "list-inside", "px-4", "mb-4"], ["aria-label", "Has Symptoms", 3, "ngModel", "ngModelChange"], ["value", "true"], ["value", "false", 1, "ml-4"], [1, "my-4"], ["aria-label", "COVID contact or self-isolated", 3, "ngModel", "ngModelChange"], ["mat-button", "", 3, "click"], ["mat-icon-button", "", 1, "absolute", "top-0", "right-0", 3, "disabled", "routerLink"], ["className", "material-icons"]], template: function CheckinCovidComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-radio-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckinCovidComponent_Template_mat_radio_group_ngModelChange_50_listener($event) { return ctx.symptoms = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-radio-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-radio-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "hr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-radio-group", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckinCovidComponent_Template_mat_radio_group_ngModelChange_63_listener($event) { return ctx.contact = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-radio-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-radio-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckinCovidComponent_Template_button_click_70_listener() { return ctx.confirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](72, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "app-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 26, "COVID Disclaimer"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 28, "Do you have any of the following symptoms?"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 30, "Fever"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 32, "Cough"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 34, "Shortness of breath"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 36, "Chills"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 38, "Body aches"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 40, "Sore or scratchy throat"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 42, "Headache"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 44, "Runny nose"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 46, "Muscle pain"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 48, "Vomitting"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 50, "Nausea"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 52, "Diarrhoa"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 54, "Loss of taste or smell"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.symptoms);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 56, "Yes"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](56, 58, "No"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 60, "Have you been in contact with a COVID-19 case in the last 14 days or been asked to self-isolate by a health offical?"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contact);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](66, 62, "Yes"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](69, 64, "No"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](72, 66, "Confirm"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.symptoms && !ctx.contact)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](70, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](76, 68, "Close"));
    } }, directives: [_angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__["IconComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {\n                position: absolute;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background-color: rgba(0, 0, 0, 0.5);\n            }\n\n            [_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n                width: 32rem;\n                max-width: calc(100vw - 2rem);\n                max-height: calc(100% - 2rem);\n            }\n\n            .absolute[_ngcontent-%COMP%] {\n                position: absolute;\n            }\n\n            button[_ngcontent-%COMP%] {\n                margin: 1rem 11rem 0;\n                width: 8rem;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckinCovidComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[checkin-covid]',
                template: `
        <div
            class="bg-white rounded p-4 relative overflow-y-auto overflow-x-hidden"
        >
            <h3 class="text-xl font-medium mb-4">
                {{ 'COVID Disclaimer' | translate }}
            </h3>
            <ol class="list-decimal list-inside">
                <li>
                    {{ 'Do you have any of the following symptoms?' | translate
                    }}<br /><br />
                    <ul class="list-disc list-inside px-4 mb-4">
                        <li>{{ 'Fever' | translate }}</li>
                        <li>{{ 'Cough' | translate }}</li>
                        <li>{{ 'Shortness of breath' | translate }}</li>
                        <li>{{ 'Chills' | translate }}</li>
                        <li>{{ 'Body aches' | translate }}</li>
                        <li>{{ 'Sore or scratchy throat' | translate }}</li>
                        <li>{{ 'Headache' | translate }}</li>
                        <li>{{ 'Runny nose' | translate }}</li>
                        <li>{{ 'Muscle pain' | translate }}</li>
                        <li>{{ 'Vomitting' | translate }}</li>
                        <li>{{ 'Nausea' | translate }}</li>
                        <li>{{ 'Diarrhoa' | translate }}</li>
                        <li>{{ 'Loss of taste or smell' | translate }}</li>
                    </ul>
                    <mat-radio-group
                        aria-label="Has Symptoms"
                        [(ngModel)]="symptoms"
                    >
                        <mat-radio-button value="true">{{
                            'Yes' | translate
                        }}</mat-radio-button>
                        <mat-radio-button value="false" class="ml-4">{{
                            'No' | translate
                        }}</mat-radio-button>
                    </mat-radio-group>
                </li>
                <hr class="my-4" />
                <li>
                    {{
                        'Have you been in contact with a COVID-19 case in the last 14 days or been asked to self-isolate by a health offical?'
                            | translate
                    }}<br /><br />
                    <mat-radio-group
                        aria-label="COVID contact or self-isolated"
                        [(ngModel)]="contact"
                    >
                        <mat-radio-button value="true">{{
                            'Yes' | translate
                        }}</mat-radio-button>
                        <mat-radio-button value="false" class="ml-4">{{
                            'No' | translate
                        }}</mat-radio-button>
                    </mat-radio-group>
                </li>
            </ol>
            <button mat-button (click)="confirm()">
                {{ 'Confirm' | translate }}
            </button>
            <a
                mat-icon-button
                [disabled]="!symptoms && !contact"
                class="absolute top-0 right-0"
                [routerLink]="['/welcome']"
            >
                <app-icon className="material-icons">{{
                    'Close' | translate
                }}</app-icon>
            </a>
        </div>
    `,
                styles: [
                    `
            :host {
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.5);
            }

            :host > div {
                width: 32rem;
                max-width: calc(100vw - 2rem);
                max-height: calc(100% - 2rem);
            }

            .absolute {
                position: absolute;
            }

            button {
                margin: 1rem 11rem 0;
                width: 8rem;
            }
        `,
                ],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _checkin_state_service__WEBPACK_IMPORTED_MODULE_3__["CheckinStateService"] }]; }, null); })();


/***/ }),

/***/ "Q13B":
/*!**********************************************************!*\
  !*** ./src/app/checkin/checkin-preferences.component.ts ***!
  \**********************************************************/
/*! exports provided: CheckinPreferencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinPreferencesComponent", function() { return CheckinPreferencesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon/icon.component */ "ukpX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "nIj0");








function CheckinPreferencesComponent_form_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "form", 6);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
} }
const _c0 = function () { return ["/welcome"]; };
class CheckinPreferencesComponent {
    constructor(_router) {
        this._router = _router;
    }
    next() {
        this._router.navigate(['/welcome']);
    }
}
CheckinPreferencesComponent.ɵfac = function CheckinPreferencesComponent_Factory(t) { return new (t || CheckinPreferencesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
CheckinPreferencesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckinPreferencesComponent, selectors: [["checkin-preferences"]], decls: 9, vars: 3, consts: [[1, "bg-white", "rounded", "shadow", "overflow-hidden", "relative", "flex", "flex-col", "items-center", "my-4", "p-4", "mx-auto"], [1, "text-xl"], [3, "formGroup", 4, "ngIf"], ["mat-button", "", 3, "click"], ["mat-icon-button", "", 1, "absolute", "top-0", "right-0", 3, "routerLink"], ["className", "material-icons"], [3, "formGroup"]], template: function CheckinPreferencesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Would you like a drink?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CheckinPreferencesComponent_form_3_Template, 1, 1, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckinPreferencesComponent_Template_button_click_4_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__["IconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"]], styles: [".absolute[_ngcontent-%COMP%] {\n                position: absolute;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckinPreferencesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'checkin-preferences',
                template: `
        <div class="bg-white rounded shadow overflow-hidden relative flex flex-col items-center my-4 p-4 mx-auto">
            <h3 class="text-xl">Would you like a drink?</h3>
            <form *ngIf="form" [formGroup]="form"> 

            </form>
            <button mat-button (click)="next()">Update</button>
            <a
                mat-icon-button
                class="absolute top-0 right-0"
                [routerLink]="['/welcome']"
            >
                <app-icon className="material-icons">close</app-icon>
            </a>
        </div>
    `,
                styles: [
                    `
            .absolute {
                position: absolute;
            }
        `,
                ],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "SR+8":
/*!****************************************************!*\
  !*** ./src/app/checkin/checkin-error.component.ts ***!
  \****************************************************/
/*! exports provided: CheckinErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinErrorComponent", function() { return CheckinErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _checkin_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkin-state.service */ "cvcL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "s2Ay");

//import { userInfo } from 'os';







function CheckinErrorComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.error), " ");
} }
const _c0 = function () { return ["/welcome"]; };
class CheckinErrorComponent {
    constructor(_checkin) {
        this._checkin = _checkin;
        this.error = this._checkin.error;
    }
}
CheckinErrorComponent.ɵfac = function CheckinErrorComponent_Factory(t) { return new (t || CheckinErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_checkin_state_service__WEBPACK_IMPORTED_MODULE_1__["CheckinStateService"])); };
CheckinErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckinErrorComponent, selectors: [["checkin-error"]], decls: 12, vars: 14, consts: [[1, "bg-white", "rounded", "shadow", "overflow-hidden", "relative", "flex", "flex-col", "items-center", "my-4", "mx-auto", "p-4"], [1, "text-xl", "mb-4"], ["class", "mb-2", 4, "ngIf"], [1, "mb-4"], ["button", "", "mat-button", "", 3, "routerLink"], [1, "mb-2"]], template: function CheckinErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CheckinErrorComponent_p_4_Template, 3, 3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, "Please see reception."), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, ctx.error));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 9, "Our staff at reception will assist you."), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 11, "Back"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n                position: absolute;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background-color: rgba(0, 0, 0, 0.5);\n            }\n\n            [_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n                width: 28rem;\n                max-width: calc(100vw - 2rem);\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckinErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'checkin-error',
                template: `
        <div
            class="bg-white rounded shadow overflow-hidden relative flex flex-col items-center my-4 mx-auto p-4"
        >
            <h3 class="text-xl mb-4">
                {{ 'Please see reception.' | translate }}
            </h3>
            <p class="mb-2" *ngIf="error | async">
                {{ error | async }}
            </p>
            <p class="mb-4">
                {{ 'Our staff at reception will assist you.' | translate }}
            </p>
            <a button mat-button [routerLink]="['/welcome']">{{
                'Back' | translate
            }}</a>
        </div>
    `,
                styles: [
                    `
            :host {
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.5);
            }

            :host > div {
                width: 28rem;
                max-width: calc(100vw - 2rem);
            }
        `,
                ],
            }]
    }], function () { return [{ type: _checkin_state_service__WEBPACK_IMPORTED_MODULE_1__["CheckinStateService"] }]; }, null); })();


/***/ }),

/***/ "WlVO":
/*!****************************************************!*\
  !*** ./src/app/checkin/checkin-photo.component.ts ***!
  \****************************************************/
/*! exports provided: CheckinPhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinPhotoComponent", function() { return CheckinPhotoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _checkin_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkin-state.service */ "cvcL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _ui_take_photo_take_photo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/take-photo/take-photo.component */ "DZJm");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon/icon.component */ "ukpX");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "csyo");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "s2Ay");














const _c0 = function () { return ["/welcome"]; };
function CheckinPhotoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a-take-photo", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("photoAccepted", function CheckinPhotoComponent_div_0_Template_a_take_photo_photoAccepted_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.handlePhoto($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "app-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, "Take a photo to continue"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 5, "Close"));
} }
function CheckinPhotoComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("diameter", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "Printing guest pass..."), " ");
} }
class CheckinPhotoComponent {
    constructor(_checkin, _router) {
        this._checkin = _checkin;
        this._router = _router;
    }
    handlePhoto(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!event) {
                return Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["notifyError"])('Error saving image, please try again');
            }
            this.loading = true;
            this._checkin.setPhoto(event);
            yield this._checkin.printPass().catch((e) => {
                this.loading = false;
                Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_3__["notifyError"])(e);
                throw e;
            });
            this.loading = false;
            this._router.navigate(['/checkin', 'covid']);
        });
    }
}
CheckinPhotoComponent.ɵfac = function CheckinPhotoComponent_Factory(t) { return new (t || CheckinPhotoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_checkin_state_service__WEBPACK_IMPORTED_MODULE_4__["CheckinStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CheckinPhotoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CheckinPhotoComponent, selectors: [["checkin-photo"]], decls: 3, vars: 2, consts: [["class", "bg-white rounded shadow overflow-hidden relative flex flex-col items-center p-4", 4, "ngIf", "ngIfElse"], ["load_state", ""], [1, "bg-white", "rounded", "shadow", "overflow-hidden", "relative", "flex", "flex-col", "items-center", "p-4"], [1, "text-xl", "mb-4"], [3, "photoAccepted"], ["mat-icon-button", "", 1, "absolute", "top-0", "right-0", 3, "routerLink"], ["className", "material-icons"], [1, "flex", "flex-col", "items-center", "m-auto"], [3, "diameter"], [1, "my-4", "text-lg", "text-white"]], template: function CheckinPhotoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CheckinPhotoComponent_div_0_Template, 9, 8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CheckinPhotoComponent_ng_template_1_Template, 5, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ui_take_photo_take_photo_component__WEBPACK_IMPORTED_MODULE_6__["TakePhotoComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__["IconComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatSpinner"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {\n                position: absolute;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background-color: rgba(0, 0, 0, 0.5);\n            }\n\n            .absolute[_ngcontent-%COMP%] {\n                position: absolute;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CheckinPhotoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'checkin-photo',
                template: `
        <div
            class="bg-white rounded shadow overflow-hidden relative flex flex-col items-center p-4"
            *ngIf="!loading; else load_state"
        >
            <h3 class="text-xl mb-4">
                {{ 'Take a photo to continue' | translate }}
            </h3>
            <a-take-photo (photoAccepted)="handlePhoto($event)"></a-take-photo>
            <a
                mat-icon-button
                class="absolute top-0 right-0"
                [routerLink]="['/welcome']"
            >
                <app-icon className="material-icons">{{
                    'Close' | translate
                }}</app-icon>
            </a>
        </div>
        <ng-template #load_state>
            <div class="flex flex-col items-center m-auto">
                <mat-spinner [diameter]="48"></mat-spinner>
                <div class="my-4 text-lg text-white">
                    {{ 'Printing guest pass...' | translate }}
                </div>
            </div>
        </ng-template>
    `,
                styles: [
                    `
            :host {
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.5);
            }

            .absolute {
                position: absolute;
            }
        `,
                ],
            }]
    }], function () { return [{ type: _checkin_state_service__WEBPACK_IMPORTED_MODULE_4__["CheckinStateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "ZciF":
/*!******************************************************!*\
  !*** ./src/app/checkin/checkin-qr-scan.component.ts ***!
  \******************************************************/
/*! exports provided: CheckinQRScanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinQRScanComponent", function() { return CheckinQRScanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "s2Ay");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @zxing/library */ "Nhx6");
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_zxing_library__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _checkin_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkin-state.service */ "cvcL");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon/icon.component */ "ukpX");
















const _c0 = ["video"];
const _c1 = ["checkin-qr-scan", ""];
const _c2 = function () { return ["/welcome"]; };
class CheckinQRScanComponent {
    constructor(_checkin, _router, translateService) {
        this._checkin = _checkin;
        this._router = _router;
        this.translateService = translateService;
        this.translateService.setDefaultLang('en');
        this.translateService.use(localStorage.getItem('lang') || 'en');
    }
    ngOnInit() {
        this._reader = new _zxing_library__WEBPACK_IMPORTED_MODULE_5__["BrowserQRCodeReader"]();
        this.setupQRReader();
    }
    ngOnDestroy() {
        var _a;
        if ((_a = this._video_el) === null || _a === void 0 ? void 0 : _a.nativeElement.srcObject) {
            const track = this._video_el.nativeElement
                .srcObject.getTracks()[0];
            if (track) {
                track.stop();
            }
        }
    }
    checkQRCode(raw_text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // var sevent = this._checkin.eventstart
            // console.log("start_event"+ sevent)
            const chunks = raw_text.split(',');
            //var epoc = Date.now()
            this.qrepoc = parseInt((Date.now() / 1000).toString());
            //var newepoc = epoc - Number(qrepoc);
            if (chunks.length < 2) {
                Object(_user_interfaces_common__WEBPACK_IMPORTED_MODULE_4__["notifyError"])('Invalid QRCode');
                this.setupQRReader();
                return;
            }
            else {
                yield this._checkin
                    .loadGuestAndEvent(chunks[0], chunks[1])
                    .catch((err) => {
                    this.handleError(err.message || err);
                    throw err;
                });
                //this._router.navigate(['/checkin', 'details']);
                this._router.navigate(['/checkin', 'details'], {
                    state: { data: { qrepoc: this.qrepoc } },
                });
            }
        });
    }
    checkEmail(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!email || !email.includes('@') || email.length < 5)
                return;
            yield this._checkin.loadGuestAndEvent(email).catch((err) => {
                this.handleError(err.message || err);
                throw err;
            });
            this._router.navigate(['/checkin', 'details']);
        });
    }
    setupQRReader() {
        this._reader
            .listVideoInputDevices()
            .then((videoInputDevices) => {
            const device = videoInputDevices[0].deviceId;
            this._reader
                .decodeOnceFromVideoDevice(device, 'qr-stream')
                .then((result) => this.checkQRCode(result.getText()))
                .catch((err) => console.error(err));
        })
            .catch((err) => console.error(err));
    }
    handleError(message) {
        this._checkin.setError(message);
        this._router.navigate(['/checkin', 'error']);
    }
}
CheckinQRScanComponent.ɵfac = function CheckinQRScanComponent_Factory(t) { return new (t || CheckinQRScanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_checkin_state_service__WEBPACK_IMPORTED_MODULE_6__["CheckinStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"])); };
CheckinQRScanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CheckinQRScanComponent, selectors: [["", "checkin-qr-scan", ""]], viewQuery: function CheckinQRScanComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._video_el = _t.first);
    } }, attrs: _c1, decls: 18, vars: 15, consts: [[1, "bg-white", "rounded", "shadow", "overflow-hidden", "relative", "flex", "flex-col", "items-center"], [1, "mt-6", "mb-4"], ["appearance", "outline"], ["matInput", "", "placeholder", "Enter email...", "type", "email", "autocomplete", "off", 3, "ngModel", "ngModelChange", "blur", "keyup.enter"], ["id", "qr-stream", "playsinline", "", "width", "640", "height", "480", "autoplay", "", 1, "rounded", "m-4", "bg-gray-200", "border", "border-gray-500"], ["video", ""], ["mat-icon-button", "", 1, "absolute", "top-0", "right-0", 3, "routerLink"], ["className", "material-icons"]], template: function CheckinQRScanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CheckinQRScanComponent_Template_input_ngModelChange_8_listener($event) { return ctx.email = $event; })("blur", function CheckinQRScanComponent_Template_input_blur_8_listener() { return ctx.checkEmail(ctx.email); })("keyup.enter", function CheckinQRScanComponent_Template_input_keyup_enter_8_listener() { return ctx.checkEmail(ctx.email); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "video", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "app-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 6, "Check In"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 8, "Please enter your email address or scan your QR code"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 10, "Invalid email format"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 12, "Close"));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_11__["IconComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                align-items: center;\n                justify-content: center;\n                height: 100%;\n                width: 100%;\n                background-color: rgba(0, 0, 0, 0.5);\n            }\n\n            video[_ngcontent-%COMP%] {\n                width: 36rem;\n                height: 27rem;\n            }\n\n            mat-form-field[_ngcontent-%COMP%] {\n                width: 36rem;\n            }\n\n            a[_ngcontent-%COMP%] {\n                position: absolute;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CheckinQRScanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: '[checkin-qr-scan]',
                template: `
        <div
            class="bg-white rounded shadow overflow-hidden relative flex flex-col items-center"
        >
            <h1>{{ 'Check In' | translate }}</h1>
            <p class="mt-6 mb-4">
                {{
                    'Please enter your email address or scan your QR code'
                        | translate
                }}
            </p>
            <mat-form-field appearance="outline">
                <input
                    matInput
                    [(ngModel)]="email"
                    placeholder="Enter email..."
                    type="email"
                    autocomplete="off"
                    (blur)="checkEmail(email)"
                    (keyup.enter)="checkEmail(email)"
                />
                <mat-error>{{ 'Invalid email format' | translate }}</mat-error>
            </mat-form-field>
            <video
                #video
                class="rounded m-4 bg-gray-200 border border-gray-500"
                id="qr-stream"
                playsinline
                width="640"
                height="480"
                autoplay
            ></video>
            <a
                mat-icon-button
                class="absolute top-0 right-0"
                [routerLink]="['/welcome']"
            >
                <app-icon className="material-icons">{{
                    'Close' | translate
                }}</app-icon>
            </a>
        </div>
    `,
                styles: [
                    `
            :host {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100%;
                width: 100%;
                background-color: rgba(0, 0, 0, 0.5);
            }

            video {
                width: 36rem;
                height: 27rem;
            }

            mat-form-field {
                width: 36rem;
            }

            a {
                position: absolute;
            }
        `,
                ],
            }]
    }], function () { return [{ type: _checkin_state_service__WEBPACK_IMPORTED_MODULE_6__["CheckinStateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }]; }, { _video_el: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['video']
        }] }); })();


/***/ }),

/***/ "hs9o":
/*!*******************************************!*\
  !*** ./src/app/checkin/checkin.module.ts ***!
  \*******************************************/
/*! exports provided: HttpLoaderFactory, VisitorCheckinModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorCheckinModule", function() { return VisitorCheckinModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _ui_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/shared.module */ "R3Ii");
/* harmony import */ var _checkin_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./checkin-details.component */ "vjuE");
/* harmony import */ var _checkin_group_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkin-group.component */ "vKhx");
/* harmony import */ var _checkin_photo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checkin-photo.component */ "WlVO");
/* harmony import */ var _checkin_preferences_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checkin-preferences.component */ "Q13B");
/* harmony import */ var _checkin_qr_scan_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./checkin-qr-scan.component */ "ZciF");
/* harmony import */ var _checkin_result_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./checkin-result.component */ "E3cA");
/* harmony import */ var _checkin_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./checkin-error.component */ "SR+8");
/* harmony import */ var _checkin_covid_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./checkin-covid.component */ "GriS");
/* harmony import */ var _checkin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./checkin.component */ "zw/1");
/* harmony import */ var _checkout_guest_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./checkout-guest.component */ "F1nh");
/* harmony import */ var _checkout_message_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./checkout-message.component */ "FTYo");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ "s2Ay");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/http-loader */ "i8O3");























function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_18__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
const ROUTES = [
    {
        path: '',
        component: _checkin_component__WEBPACK_IMPORTED_MODULE_14__["CheckinComponent"],
        children: [
            { path: 'scan', component: _checkin_qr_scan_component__WEBPACK_IMPORTED_MODULE_10__["CheckinQRScanComponent"] },
            { path: 'details', component: _checkin_details_component__WEBPACK_IMPORTED_MODULE_6__["CheckinDetailsComponent"] },
            { path: 'group', component: _checkin_group_component__WEBPACK_IMPORTED_MODULE_7__["CheckinGroupComponent"] },
            { path: 'preferences', component: _checkin_preferences_component__WEBPACK_IMPORTED_MODULE_9__["CheckinPreferencesComponent"] },
            { path: 'photo', component: _checkin_photo_component__WEBPACK_IMPORTED_MODULE_8__["CheckinPhotoComponent"] },
            { path: 'results', component: _checkin_result_component__WEBPACK_IMPORTED_MODULE_11__["CheckinResultsComponent"] },
            { path: 'error', component: _checkin_error_component__WEBPACK_IMPORTED_MODULE_12__["CheckinErrorComponent"] },
            { path: 'covid', component: _checkin_covid_component__WEBPACK_IMPORTED_MODULE_13__["CheckinCovidComponent"] },
            { path: '**', redirectTo: 'scan' },
        ],
    },
    { path: '**', redirectTo: '' },
];
class VisitorCheckinModule {
}
VisitorCheckinModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: VisitorCheckinModule });
VisitorCheckinModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function VisitorCheckinModule_Factory(t) { return new (t || VisitorCheckinModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ui_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedContentModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(ROUTES),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]],
                },
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VisitorCheckinModule, { declarations: [_checkin_component__WEBPACK_IMPORTED_MODULE_14__["CheckinComponent"],
        _checkin_result_component__WEBPACK_IMPORTED_MODULE_11__["CheckinResultsComponent"],
        _checkin_qr_scan_component__WEBPACK_IMPORTED_MODULE_10__["CheckinQRScanComponent"],
        _checkin_preferences_component__WEBPACK_IMPORTED_MODULE_9__["CheckinPreferencesComponent"],
        _checkin_photo_component__WEBPACK_IMPORTED_MODULE_8__["CheckinPhotoComponent"],
        _checkin_group_component__WEBPACK_IMPORTED_MODULE_7__["CheckinGroupComponent"],
        _checkin_details_component__WEBPACK_IMPORTED_MODULE_6__["CheckinDetailsComponent"],
        _checkin_error_component__WEBPACK_IMPORTED_MODULE_12__["CheckinErrorComponent"],
        _checkin_covid_component__WEBPACK_IMPORTED_MODULE_13__["CheckinCovidComponent"],
        _checkout_guest_component__WEBPACK_IMPORTED_MODULE_15__["CheckoutQRScanComponent"],
        _checkout_message_component__WEBPACK_IMPORTED_MODULE_16__["CheckoutMessageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ui_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedContentModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VisitorCheckinModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _checkin_component__WEBPACK_IMPORTED_MODULE_14__["CheckinComponent"],
                    _checkin_result_component__WEBPACK_IMPORTED_MODULE_11__["CheckinResultsComponent"],
                    _checkin_qr_scan_component__WEBPACK_IMPORTED_MODULE_10__["CheckinQRScanComponent"],
                    _checkin_preferences_component__WEBPACK_IMPORTED_MODULE_9__["CheckinPreferencesComponent"],
                    _checkin_photo_component__WEBPACK_IMPORTED_MODULE_8__["CheckinPhotoComponent"],
                    _checkin_group_component__WEBPACK_IMPORTED_MODULE_7__["CheckinGroupComponent"],
                    _checkin_details_component__WEBPACK_IMPORTED_MODULE_6__["CheckinDetailsComponent"],
                    _checkin_error_component__WEBPACK_IMPORTED_MODULE_12__["CheckinErrorComponent"],
                    _checkin_covid_component__WEBPACK_IMPORTED_MODULE_13__["CheckinCovidComponent"],
                    _checkout_guest_component__WEBPACK_IMPORTED_MODULE_15__["CheckoutQRScanComponent"],
                    _checkout_message_component__WEBPACK_IMPORTED_MODULE_16__["CheckoutMessageComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ui_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedContentModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(ROUTES),
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslateLoader"],
                            useFactory: HttpLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]],
                        },
                    }),
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "vKhx":
/*!****************************************************!*\
  !*** ./src/app/checkin/checkin-group.component.ts ***!
  \****************************************************/
/*! exports provided: CheckinGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinGroupComponent", function() { return CheckinGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");


class CheckinGroupComponent {
}
CheckinGroupComponent.ɵfac = function CheckinGroupComponent_Factory(t) { return new (t || CheckinGroupComponent)(); };
CheckinGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckinGroupComponent, selectors: [["checkin-group"]], decls: 0, vars: 0, template: function CheckinGroupComponent_Template(rf, ctx) { }, styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckinGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'checkin-group',
                template: `

    `,
                styles: [`

    `]
            }]
    }], null, null); })();


/***/ }),

/***/ "vjuE":
/*!******************************************************!*\
  !*** ./src/app/checkin/checkin-details.component.ts ***!
  \******************************************************/
/*! exports provided: CheckinDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinDetailsComponent", function() { return CheckinDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "D57K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "s2Ay");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _checkin_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkin-state.service */ "cvcL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "29Wa");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "Cd2c");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../libs/components/src/lib/icon/icon.component */ "ukpX");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "csyo");

















const _c0 = ["checkin-details", ""];
const _c1 = function () { return ["/welcome"]; };
function CheckinDetailsComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](41, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](46, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](53, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CheckinDetailsComponent_form_2_Template_button_click_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.updateGuest(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](58, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "app-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](62, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 14, ctx_r0.form));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 16, "Confirm Details"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 18, "Host"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 20, "The email address of your host is required"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 22, "Host Phone Number"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 24, "Name"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 26, "Please enter your full name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 28, "Email"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](41, 30, "A valid email address is required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](46, 32, "Guest Phone Number"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](53, 34, "Organisation/ Company"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](58, 36, "Next"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](40, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](62, 38, "Close"));
} }
function CheckinDetailsComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("diameter", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "Updating data and checking in..."), " ");
} }
//import { CalendarEvent } from '../../../../../libs/events/src/lib/event.class'
class CheckinDetailsComponent {
    // let nameValue = document.getElementById("name").value;
    // host = FormControl(this.host);
    // name = this.name;
    // email : String;
    // phone : String;
    // organization : String;
    constructor(_checkin, _router, translateService) {
        this._checkin = _checkin;
        this._router = _router;
        this.translateService = translateService;
        this.form = this._checkin.form;
        this.loading = false;
        {
            this.translateService.setDefaultLang('en');
            this.translateService.use(localStorage.getItem('lang') || 'en');
        }
    }
    ngOnInit() {
        this.form.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe((_) => (!_ ? this.previous() : ''));
    }
    updateGuest() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            yield this._checkin.updateGuest();
            yield this._checkin.checkinGuest();
            var evenepoc = this._checkin.eventend;
            var qrscan = history.state.data.qrepoc;
            this.loading = false;
            if (this._checkin.entry === false || qrscan > evenepoc) {
                console.log(this._checkin.entry);
                this._router.navigate(['/checkin', 'error']);
            }
            else {
                this._router.navigate(['/checkin', 'photo']);
            }
        });
    }
    previous() {
        this._router.navigate(['/checkin', 'scan']);
    }
}
CheckinDetailsComponent.ɵfac = function CheckinDetailsComponent_Factory(t) { return new (t || CheckinDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_checkin_state_service__WEBPACK_IMPORTED_MODULE_5__["CheckinStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"])); };
CheckinDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CheckinDetailsComponent, selectors: [["", "checkin-details", ""]], attrs: _c0, decls: 6, vars: 4, consts: [["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtrustConstantResourceUrl"]("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css")], ["class", "bg-white rounded shadow overflow-hidden relative flex flex-col items-center my-4 mx-auto", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["load_state", ""], [1, "bg-white", "rounded", "shadow", "overflow-hidden", "relative", "flex", "flex-col", "items-center", "my-4", "mx-auto", 3, "formGroup"], [1, "text-2xl", "m-4"], ["field", "", 1, "flex", "flex-col"], ["form", "host"], [1, "glyphicon", "glyphicon-user"], ["appearance", "outline"], ["matInput", "", "name", "host", "formControlName", "host", "id", "host", "placeholder", "Host's Email Address"], ["form", "email"], [1, "glyphicon", "glyphicon-phone"], ["matInput", "", "type", "text", "name", "hostphone", "formControlName", "hostphone", "id", "hostphone", "placeholder", "Phone Number"], ["form", "name"], ["matInput", "", "type", "text", "name", "name", "formControlName", "name", "id", "name", "placeholder", "Full Name"], [1, "glyphicon", "glyphicon-envelope"], ["matInput", "", "type", "text", "name", "email", "formControlName", "email", "id", "email", "placeholder", "Email Address"], ["matInput", "", "type", "text", "name", "phone", "formControlName", "phone", "id", "phone", "placeholder", "Phone Number"], [1, "glyphicon", "glyphicon-briefcase"], ["matInput", "", "type", "text", "name", "organisation", "formControlName", "organisation", "id", "organozation", "placeholder", "Organisation / Company"], ["mat-button", "", 3, "click"], ["mat-icon-button", "", 1, "absolute", "top-0", "right-0", 3, "routerLink"], ["className", "material-icons"], [1, "flex", "flex-col", "items-center", "m-auto"], [3, "diameter"], [1, "my-4", "text-lg", "text-white"]], template: function CheckinDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CheckinDetailsComponent_form_2_Template, 63, 41, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CheckinDetailsComponent_ng_template_4_Template, 5, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, ctx.form) && !ctx.loading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _libs_components_src_lib_icon_icon_component__WEBPACK_IMPORTED_MODULE_11__["IconComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: ["[_nghost-%COMP%] {\n                position: absolute;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background-color: rgba(0, 0, 0, 0.5);\n            }\n\n            form[_ngcontent-%COMP%] {\n                width: 40rem;\n                max-width: calc(100vw - 2rem);\n            }\n\n            [field][_ngcontent-%COMP%] {\n                width: calc(100% - 2rem);\n            }\n\n            .absolute[_ngcontent-%COMP%] {\n                position: absolute;\n            }\n\n            button[_ngcontent-%COMP%] {\n                margin-bottom: 1rem;\n                width: 8rem;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CheckinDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: '[checkin-details]',
                template: `
        <head>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
            />
        </head>

        <form
            *ngIf="(form | async) && !loading; else load_state"
            [formGroup]="form | async"
            class="bg-white rounded shadow overflow-hidden relative flex flex-col items-center my-4 mx-auto"
        >
            <h3 class="text-2xl m-4">{{ 'Confirm Details' | translate }}</h3>
            <div field class="flex flex-col">
                <label form="host">
                    <i class="glyphicon glyphicon-user"> </i>
                    {{ 'Host' | translate }}</label
                >
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="host"
                        formControlName="host"
                        id="host"
                        placeholder="Host's Email Address"
                    />
                    <mat-error>
                        {{
                            'The email address of your host is required'
                                | translate
                        }}
                    </mat-error>
                </mat-form-field>
            </div>

            <div field class="flex flex-col">
                <label form="email"
                    ><i class="glyphicon glyphicon-phone"></i>
                    {{ 'Host Phone Number' | translate }}</label
                >
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        type="text"
                        name="hostphone"
                        formControlName="hostphone"
                        id="hostphone"
                        placeholder="Phone Number"
                    />
                </mat-form-field>
            </div>

            <div field class="flex flex-col">
                <label form="name">
                    <i class="glyphicon glyphicon-user"></i>
                    {{ 'Name' | translate }}</label
                >
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        type="text"
                        name="name"
                        formControlName="name"
                        id="name"
                        placeholder="Full Name"
                    />
                    <mat-error>{{
                        'Please enter your full name' | translate
                    }}</mat-error>
                </mat-form-field>
            </div>
            <div field class="flex flex-col">
                <label form="email"
                    ><i class="glyphicon glyphicon-envelope"></i>
                    {{ 'Email' | translate }}</label
                >
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        type="text"
                        name="email"
                        formControlName="email"
                        id="email"
                        placeholder="Email Address"
                    />
                    <mat-error>{{
                        'A valid email address is required' | translate
                    }}</mat-error>
                </mat-form-field>
            </div>
            <div field class="flex flex-col">
                <label form="email"
                    ><i class="glyphicon glyphicon-phone"></i>
                    {{ 'Guest Phone Number' | translate }}</label
                >
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        type="text"
                        name="phone"
                        formControlName="phone"
                        id="phone"
                        placeholder="Phone Number"
                    />
                </mat-form-field>
            </div>
            <div field class="flex flex-col">
                <label form="email"
                    ><i class="glyphicon glyphicon-briefcase"></i>
                    {{ 'Organisation/ Company' | translate }}</label
                >
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        type="text"
                        name="organisation"
                        formControlName="organisation"
                        id="organozation"
                        placeholder="Organisation / Company"
                    />
                </mat-form-field>
            </div>
            <button mat-button (click)="updateGuest()">
                {{ 'Next' | translate }}
            </button>
            <a
                mat-icon-button
                class="absolute top-0 right-0"
                [routerLink]="['/welcome']"
            >
                <app-icon className="material-icons">{{
                    'Close' | translate
                }}</app-icon>
            </a>
        </form>

        <ng-template #load_state>
            <div class="flex flex-col items-center m-auto">
                <mat-spinner [diameter]="48"></mat-spinner>
                <div class="my-4 text-lg text-white">
                    {{ 'Updating data and checking in...' | translate }}
                </div>
            </div>
        </ng-template>
    `,
                styles: [
                    `
            :host {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.5);
            }

            form {
                width: 40rem;
                max-width: calc(100vw - 2rem);
            }

            [field] {
                width: calc(100% - 2rem);
            }

            .absolute {
                position: absolute;
            }

            button {
                margin-bottom: 1rem;
                width: 8rem;
            }
        `,
                ],
            }]
    }], function () { return [{ type: _checkin_state_service__WEBPACK_IMPORTED_MODULE_5__["CheckinStateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "zw/1":
/*!**********************************************!*\
  !*** ./src/app/checkin/checkin.component.ts ***!
  \**********************************************/
/*! exports provided: CheckinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckinComponent", function() { return CheckinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "s2Ay");
/* harmony import */ var _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @user-interfaces/common */ "20lr");
/* harmony import */ var _ui_topbar_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/topbar-header.component */ "/dba");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "sEIs");








const _c0 = ["app-checkin", ""];
class CheckinComponent {
    constructor(_settings, translateService) {
        this._settings = _settings;
        this.translateService = translateService;
        this.translateService.setDefaultLang('en');
        this.translateService.use(localStorage.getItem('lang') || 'en');
    }
    get background() {
        return this._settings.get('app.home.background');
    }
}
CheckinComponent.ɵfac = function CheckinComponent_Factory(t) { return new (t || CheckinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
CheckinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckinComponent, selectors: [["", "app-checkin", ""]], attrs: _c0, decls: 3, vars: 2, consts: [[1, "w-full"], [1, "flex-1", "w-full", "bg-center", "bg-cover", "relative"]], template: function CheckinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a-topbar-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx.background + ")");
    } }, directives: [_ui_topbar_header_component__WEBPACK_IMPORTED_MODULE_3__["TopbarHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n                display: flex;\n                flex-direction: column;\n                height: 100%;\n                width: 100%;\n            }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckinComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[app-checkin]',
                template: `
        <a-topbar-header class="w-full"></a-topbar-header>
        <div
            class="flex-1 w-full bg-center bg-cover relative"
            [style.background-image]="'url(' + background + ')'"
        >
            <router-outlet></router-outlet>
        </div>
    `,
                styles: [
                    `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
            }
        `,
                ],
            }]
    }], function () { return [{ type: _user_interfaces_common__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=checkin-checkin-module.js.map