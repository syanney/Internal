import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { remove } from "lodash";

import { EmployeeSummary } from '../employee-summary';
import { EmployeesDataService } from '../services/employees-data.service';

@Component({
    selector: 'internal-employee-list', // Not needed when we navigate to this component via routing.
    templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {    

    employees: EmployeeSummary[] = [];
    x: number;
    y: string;

    constructor(private _employeesDataService: EmployeesDataService) {
    }

    ngOnInit() {
        this._employeesDataService.getEmployees().subscribe(retrievedEmployees => this.employees.push(...retrievedEmployees));
    }    

    onDeleteEmployee(employeeId: number) {
        this._employeesDataService.deleteEmployee(employeeId).subscribe(() => remove(this.employees, employee => employee.id === employeeId));
    }
}
