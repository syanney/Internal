import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { EmployeeSummary } from '../employee-summary';
import { EmployeeDetails } from '../employee-details';
import { ApiUrl } from 'shared-module/api-url';

@Injectable()
export class EmployeesDataService {

    constructor(private _httpClient: HttpClient) {        
    }

    getEmployees(): Observable<EmployeeSummary[]> {

        const url = `${ApiUrl.value}/employees`;
        return this._httpClient.get<EmployeeSummary[]>(url);
    }

    getEmployeeDetails(employeeId: number): Observable<EmployeeDetails> {

        const url = `${ApiUrl.value}/employees/${employeeId}`;
        return this._httpClient.get<EmployeeDetails>(url);
    }

    createEmployee(employee: EmployeeDetails): Observable<Object> {

        const url = `${ApiUrl.value}/employees`;
        return this._httpClient.post(url, employee);
    }

    updateEmployee(employee: EmployeeDetails): Observable<any> {

        const url = `${ApiUrl.value}/employees/${employee.id}`;
        return this._httpClient.put(url, employee);
    }

    deleteEmployee(employeeId: number): Observable<Object> {

        const url = `${ApiUrl.value}/employees/${employeeId}`;
        return this._httpClient.delete(url);
    }
}