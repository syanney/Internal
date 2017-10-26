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
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var employees_data_service_1 = require("../services/employees-data.service");
var EmployeeEditComponent = /** @class */ (function () {
    function EmployeeEditComponent(_router, _activatedRoute, _employeesDataService) {
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this._employeesDataService = _employeesDataService;
    }
    EmployeeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.params.subscribe(function (params) {
            var employeeId = parseInt(params['id']);
            _this._employeesDataService.getEmployeeDetails(employeeId)
                .subscribe(function (employeeDetails) {
                _this.employee = employeeDetails;
            });
        });
    };
    EmployeeEditComponent.prototype.onSaveEmployee = function (employee) {
        var _this = this;
        this._employeesDataService.updateEmployee(employee).subscribe(function () { return _this.goToEmployeeList(); });
    };
    EmployeeEditComponent.prototype.goToEmployeeList = function () {
        this._router.navigate(['employees']);
    };
    EmployeeEditComponent = __decorate([
        core_1.Component({
            selector: 'internal-employee-edit',
            templateUrl: './employee-edit.component.html'
        }),
        __metadata("design:paramtypes", [router_2.Router,
            router_1.ActivatedRoute,
            employees_data_service_1.EmployeesDataService])
    ], EmployeeEditComponent);
    return EmployeeEditComponent;
}());
exports.EmployeeEditComponent = EmployeeEditComponent;
