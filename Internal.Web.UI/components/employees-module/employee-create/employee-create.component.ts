import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeeDetails } from '../employee-details';
import { EmployeesDataService } from '../services/employees-data.service';

@Component({
    selector: 'internal-employee-create', // Not needed when we navigate to this component via routing.
    templateUrl: './employee-create.component.html'
})
export class EmployeeCreateComponent {

    constructor(private _router: Router,
                private _employeesDataService: EmployeesDataService) {
    }

    onSaveEmployee(employee: EmployeeDetails) {        
        this._employeesDataService.createEmployee(employee).subscribe(() => this.goToEmployeeList());        
    }   

    goToEmployeeList() {
        this._router.navigate(['employees']);
    } 
}
