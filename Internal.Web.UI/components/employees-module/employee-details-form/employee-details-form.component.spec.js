"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var testing_2 = require("@angular/platform-browser-dynamic/testing");
var employees_module_1 = require("../employees.module");
var TestHostComponent = /** @class */ (function () {
    function TestHostComponent() {
        this.employee = { firstName: "emma" };
    }
    TestHostComponent = __decorate([
        core_1.Component({
            template: "<internal-employee-details [employee]=\"employee\"></internal-employee-details>"
        })
    ], TestHostComponent);
    return TestHostComponent;
}());
describe('EmployeeDetailsFormComponent tests ->', function () {
    var testHostComponent;
    var testHostComponentFixture;
    var RouterStub = /** @class */ (function () {
        function RouterStub() {
        }
        return RouterStub;
    }());
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.initTestEnvironment(testing_2.BrowserDynamicTestingModule, testing_2.platformBrowserDynamicTesting()).configureTestingModule({
            imports: [employees_module_1.EmployeesModule],
            declarations: [TestHostComponent],
            providers: [{ provide: router_1.Router, useClass: RouterStub }]
        });
    }));
    beforeEach(function () {
        testHostComponentFixture = testing_1.TestBed.createComponent(TestHostComponent);
        testHostComponent = testHostComponentFixture.componentInstance;
        testHostComponentFixture.detectChanges(); // Trigger initial data binding.
    });
    it('should display firstName from component in the template', testing_1.async(function () {
        testHostComponentFixture.whenStable().then(function () {
            var firstNameInputElement = testHostComponentFixture.debugElement.query(platform_browser_1.By.css('#firstName')).nativeElement;
            expect(firstNameInputElement.value).toBe(testHostComponent.employee.firstName);
        });
    }));
});
