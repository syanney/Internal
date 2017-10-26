import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeesHomeComponent } from './employees-home/employees-home.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

const employeeRoutes: Routes = [    
    {
        path: '', component: EmployeesHomeComponent, // EmployeesHomeComponent contains the <router-outlet>
        children: [
            { path: '', component: EmployeeListComponent },
            { path: 'create', component: EmployeeCreateComponent },
            { path: 'edit/:id', component: EmployeeEditComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(employeeRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class EmployeesRoutingModule { }