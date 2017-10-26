import { Component, EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeeDetails } from '../employee-details';

@Component({
    selector: 'internal-employee-details', 
    templateUrl: './employee-details-form.component.html'
})
export class EmployeeDetailsFormComponent implements OnInit {

    @Input() employee: EmployeeDetails;  
    @Output() onSaveEmployee = new EventEmitter<EmployeeDetails>();

    constructor(private _router: Router) {
    }

    ngOnInit() {
        this.employee = this.employee || new EmployeeDetails();
    }

    onSubmit() {
        this.onSaveEmployee.emit(this.employee);
    }

    onCancel() {
        this.goToEmployeeList();
    }

    goToEmployeeList() {
        this._router.navigate(['employees']);
    }       
}
