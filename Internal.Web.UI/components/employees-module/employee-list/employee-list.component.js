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
var lodash_1 = require("lodash");
var employees_data_service_1 = require("../services/employees-data.service");
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(_employeesDataService) {
        this._employeesDataService = _employeesDataService;
        this.employees = [];
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._employeesDataService.getEmployees().subscribe(function (retrievedEmployees) {
            return (_a = _this.employees).push.apply(_a, retrievedEmployees);
            var _a;
        });
    };
    EmployeeListComponent.prototype.onDeleteEmployee = function (employeeId) {
        var _this = this;
        this._employeesDataService.deleteEmployee(employeeId).subscribe(function () { return lodash_1.remove(_this.employees, function (employee) { return employee.id === employeeId; }); });
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'internal-employee-list',
            templateUrl: './employee-list.component.html'
        }),
        __metadata("design:paramtypes", [employees_data_service_1.EmployeesDataService])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
