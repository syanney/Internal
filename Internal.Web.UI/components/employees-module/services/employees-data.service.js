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
var http_1 = require("@angular/common/http");
var api_url_1 = require("shared-module/api-url");
var EmployeesDataService = /** @class */ (function () {
    function EmployeesDataService(_httpClient) {
        this._httpClient = _httpClient;
    }
    EmployeesDataService.prototype.getEmployees = function () {
        var url = api_url_1.ApiUrl.value + "/employees";
        return this._httpClient.get(url);
    };
    EmployeesDataService.prototype.getEmployeeDetails = function (employeeId) {
        var url = api_url_1.ApiUrl.value + "/employees/" + employeeId;
        return this._httpClient.get(url);
    };
    EmployeesDataService.prototype.createEmployee = function (employee) {
        var url = api_url_1.ApiUrl.value + "/employees";
        return this._httpClient.post(url, employee);
    };
    EmployeesDataService.prototype.updateEmployee = function (employee) {
        var url = api_url_1.ApiUrl.value + "/employees/" + employee.id;
        return this._httpClient.put(url, employee);
    };
    EmployeesDataService.prototype.deleteEmployee = function (employeeId) {
        var url = api_url_1.ApiUrl.value + "/employees/" + employeeId;
        return this._httpClient.delete(url);
    };
    EmployeesDataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], EmployeesDataService);
    return EmployeesDataService;
}());
exports.EmployeesDataService = EmployeesDataService;
