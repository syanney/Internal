"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var employees_home_component_1 = require("./employees-home/employees-home.component");
var employee_list_component_1 = require("./employee-list/employee-list.component");
var employee_create_component_1 = require("./employee-create/employee-create.component");
var employee_edit_component_1 = require("./employee-edit/employee-edit.component");
var employeeRoutes = [
    {
        path: '', component: employees_home_component_1.EmployeesHomeComponent,
        children: [
            { path: '', component: employee_list_component_1.EmployeeListComponent },
            { path: 'create', component: employee_create_component_1.EmployeeCreateComponent },
            { path: 'edit/:id', component: employee_edit_component_1.EmployeeEditComponent }
        ]
    }
];
var EmployeesRoutingModule = /** @class */ (function () {
    function EmployeesRoutingModule() {
    }
    EmployeesRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(employeeRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], EmployeesRoutingModule);
    return EmployeesRoutingModule;
}());
exports.EmployeesRoutingModule = EmployeesRoutingModule;
