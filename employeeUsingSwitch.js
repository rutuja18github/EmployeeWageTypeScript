"use strict";
exports.__esModule = true;
exports.EmployeeWage = void 0;
var EmployeeWage = /** @class */ (function () {
    function EmployeeWage(companyName, empWagePerHour, numOfWorkingDays, totalHrsInMonth) {
        this.companyName = companyName;
        this.empWagePerHour = empWagePerHour;
        this.numOfWorkingDays = numOfWorkingDays;
        this.totalHrsInMonth = totalHrsInMonth;
    }
    EmployeeWage.prototype.employeeDailyWage = function () {
        var attendance = Math.round(Math.random() * 2);
        switch (attendance) {
            case 0:
                this.dailyHour = 0;
                this.dailyEmployeeWage = this.empWagePerHour * this.dailyHour;
                break;
            case 1:
                this.dailyHour = 8;
                this.dailyEmployeeWage = this.empWagePerHour * this.dailyHour;
                break;
            case 2:
                this.dailyHour = 4;
                this.dailyEmployeeWage = this.empWagePerHour * this.dailyHour;
                break;
        }
        return this.dailyEmployeeWage;
    };
    EmployeeWage.prototype.monthlyWage = function () {
        var totalWorkingDays = 0;
        var totalMonthlyWage = 0;
        var totalWorkingHrs = 0;
        while (totalWorkingDays < this.numOfWorkingDays && totalWorkingHrs < this.totalHrsInMonth) {
            totalWorkingDays++;
            //console.log(this.totalWorkingDays)
            totalMonthlyWage = totalMonthlyWage + this.employeeDailyWage();
            totalWorkingHrs = totalWorkingHrs + this.dailyHour;
        }
        var EmpArry = [totalWorkingHrs, totalMonthlyWage];
        return EmpArry;
    };
    EmployeeWage.prototype.empWageBuilder = function (totalNumberOfEmployee) {
        var companyTotalWage = 0;
        var employeeArray = [];
        for (var i = 1; i <= totalNumberOfEmployee; i++) {
            var empArry = this.monthlyWage();
            companyTotalWage = companyTotalWage + empArry[1];
            var empObj = {
                empName: "employee" + i,
                employeeTotalHours: empArry[0],
                employeeTotalWage: empArry[1]
            };
            employeeArray.push(empObj);
        }
        var companyObj = {
            companyName: this.companyName,
            employee: employeeArray,
            companyTotalWage: companyTotalWage
        };
        console.log('Company total wage', companyTotalWage);
        return companyObj;
    };
    return EmployeeWage;
}());
exports.EmployeeWage = EmployeeWage;
// let company1 = new EmployeeWage('company1',20,20,100)
// company1.empWageBuilder(2)
// console.log('---------------------------------------------')
// let company2 = new EmployeeWage('company2',22,22,120)
// company2.empWageBuilder(4)
