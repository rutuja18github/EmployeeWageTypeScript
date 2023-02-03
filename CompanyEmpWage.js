"use strict";
exports.__esModule = true;
var employeeUsingSwitch_1 = require("./employeeUsingSwitch");
var CompanyEmpWage = /** @class */ (function () {
    function CompanyEmpWage() {
        this.companyEmployeeWage = [];
    }
    CompanyEmpWage.prototype.companyWage = function (noOfEmployee, companyName, empWagePerHour, numOfWorkingDays, totalHrsInMonth) {
        this.company1 = new employeeUsingSwitch_1.EmployeeWage(companyName, empWagePerHour, numOfWorkingDays, totalHrsInMonth);
        var companyEmployeeWagesArray = this.company1.empWageBuilder(noOfEmployee);
        //console.log(companyEmployeeWagesArray)
        this.companyEmployeeWage.push(companyEmployeeWagesArray);
        //console.log(this.companyEmployeeWage)
    };
    CompanyEmpWage.prototype.print = function () {
        for (var _i = 0, _a = this.companyEmployeeWage; _i < _a.length; _i++) {
            var company_1 = _a[_i];
            console.log(company_1);
        }
        //console.log(this.companyEmployeeWage)
    };
    return CompanyEmpWage;
}());
var company = new CompanyEmpWage();
company.companyWage(3, 'company1', 20, 20, 100);
//console.log('---------------------------------------------')
company.companyWage(2, 'company2', 18, 22, 120);
company.print();
