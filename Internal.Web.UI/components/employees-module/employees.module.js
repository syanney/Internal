"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shared_module_1 = require("shared-module/shared.module");
var employees_routing_module_1 = require("./employees-routing.module");
var employees_home_component_1 = require("./employees-home/employees-home.component");
var employee_list_component_1 = require("./employee-list/employee-list.component");
var employee_create_component_1 = require("./employee-create/employee-create.component");
var employee_edit_component_1 = require("./employee-edit/employee-edit.component");
var employees_data_service_1 = require("./services/employees-data.service");
var employee_details_form_component_1 = require("./employee-details-form/employee-details-form.component");
var EmployeesModule = /** @class */ (function () {
    function EmployeesModule() {
    }
    EmployeesModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                employees_routing_module_1.EmployeesRoutingModule
            ],
            declarations: [
                employees_home_component_1.EmployeesHomeComponent,
                employee_list_component_1.EmployeeListComponent,
                employee_create_component_1.EmployeeCreateComponent,
                employee_edit_component_1.EmployeeEditComponent,
                employee_details_form_component_1.EmployeeDetailsFormComponent
            ],
            providers: [
                employees_data_service_1.EmployeesDataService
            ],
            exports: [
                employee_details_form_component_1.EmployeeDetailsFormComponent
            ]
        })
    ], EmployeesModule);
    return EmployeesModule;
}());
exports.EmployeesModule = EmployeesModule;
