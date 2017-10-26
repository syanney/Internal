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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var router_1 = require("@angular/router");
var employee_details_1 = require("../employee-details");
var EmployeeDetailsFormComponent = /** @class */ (function () {
    function EmployeeDetailsFormComponent(_router) {
        this._router = _router;
        this.onSaveEmployee = new core_1.EventEmitter();
    }
    EmployeeDetailsFormComponent.prototype.ngOnInit = function () {
        this.employee = this.employee || new employee_details_1.EmployeeDetails();
    };
    EmployeeDetailsFormComponent.prototype.onSubmit = function () {
        this.onSaveEmployee.emit(this.employee);
    };
    EmployeeDetailsFormComponent.prototype.onCancel = function () {
        this.goToEmployeeList();
    };
    EmployeeDetailsFormComponent.prototype.goToEmployeeList = function () {
        this._router.navigate(['employees']);
    };
    __decorate([
        core_2.Input(),
        __metadata("design:type", employee_details_1.EmployeeDetails)
    ], EmployeeDetailsFormComponent.prototype, "employee", void 0);
    __decorate([
        core_2.Output(),
        __metadata("design:type", Object)
    ], EmployeeDetailsFormComponent.prototype, "onSaveEmployee", void 0);
    EmployeeDetailsFormComponent = __decorate([
        core_1.Component({
            selector: 'internal-employee-details',
            templateUrl: './employee-details-form.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], EmployeeDetailsFormComponent);
    return EmployeeDetailsFormComponent;
}());
exports.EmployeeDetailsFormComponent = EmployeeDetailsFormComponent;
