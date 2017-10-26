import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

import { EmployeesModule } from '../employees.module';

@Component({    
    template: `<internal-employee-details [employee]="employee"></internal-employee-details>`
})
class TestHostComponent {   
    employee = { firstName: "emma" };   
}

describe('EmployeeDetailsFormComponent tests ->', () => {
    let testHostComponent: TestHostComponent;
    let testHostComponentFixture: ComponentFixture<TestHostComponent>;    
    class RouterStub { }

    beforeEach(async(() => {
        TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting()).configureTestingModule({            
            imports: [EmployeesModule],          
            declarations: [TestHostComponent], 
            providers: [{ provide: Router, useClass: RouterStub }]
        })          
    }));

    beforeEach(() => {
        
        testHostComponentFixture = TestBed.createComponent(TestHostComponent);
        testHostComponent = testHostComponentFixture.componentInstance;        
        testHostComponentFixture.detectChanges(); // Trigger initial data binding.
    });   

    it('should display firstName from component in the template', async(() => {
        
        testHostComponentFixture.whenStable().then(() => {
            const firstNameInputElement = testHostComponentFixture.debugElement.query(By.css('#firstName')).nativeElement;
            expect(firstNameInputElement.value).toBe(testHostComponent.employee.firstName);
        });
    }));    
});
