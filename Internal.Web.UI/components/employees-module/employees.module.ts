import { NgModule } from '@angular/core';

import { SharedModule } from 'shared-module/shared.module';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesHomeComponent } from './employees-home/employees-home.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeesDataService } from './services/employees-data.service';
import { EmployeeDetailsFormComponent } from './employee-details-form/employee-details-form.component';

@NgModule({
    imports: [
        SharedModule,
        EmployeesRoutingModule
    ],
    declarations: [
        EmployeesHomeComponent,
        EmployeeListComponent,
        EmployeeCreateComponent,
        EmployeeEditComponent,
        EmployeeDetailsFormComponent
    ],
    providers: [
        EmployeesDataService
    ],
    exports: [
        EmployeeDetailsFormComponent
    ]
})
export class EmployeesModule { }
