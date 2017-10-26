import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { EmployeesDataService } from '../services/employees-data.service';
import { EmployeeDetails } from '../employee-details';

@Component({
    selector: 'internal-employee-edit',
    templateUrl: './employee-edit.component.html'
})
export class EmployeeEditComponent implements OnInit {

    employee: EmployeeDetails;

    constructor(private _router: Router,
                private _activatedRoute: ActivatedRoute,
                private _employeesDataService: EmployeesDataService) {
    }

    ngOnInit() {

        this._activatedRoute.params.subscribe(params => {
            const employeeId = parseInt(params['id']);

            this._employeesDataService.getEmployeeDetails(employeeId)
                .subscribe(employeeDetails => {
                    this.employee = employeeDetails;
                });
        });
    }

    onSaveEmployee(employee: EmployeeDetails) {
        this._employeesDataService.updateEmployee(employee).subscribe(() => this.goToEmployeeList());
    }   

    goToEmployeeList(): void {
        this._router.navigate(['employees']);
    } 
}
