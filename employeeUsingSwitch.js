var EmployeeWage = /** @class */ (function () {
    function EmployeeWage() {
        this.totalWorkingDays = 0;
        this.totalMonthlyWage = 0;
        this.totalWorkingHrs = 0;
    }
    EmployeeWage.prototype.employeeDailyWage = function (empWagePerHour) {
        var attendance = Math.round(Math.random() * 2);
        switch (attendance) {
            case 0:
                this.dailyHour = 0;
                this.dailyEmployeeWage = empWagePerHour * this.dailyHour;
                break;
            case 1:
                this.dailyHour = 8;
                this.dailyEmployeeWage = empWagePerHour * this.dailyHour;
                break;
            case 2:
                this.dailyHour = 4;
                this.dailyEmployeeWage = empWagePerHour * this.dailyHour;
                break;
        }
        return this.dailyEmployeeWage;
    };
    EmployeeWage.prototype.monthlyWage = function (companyName, empWagePerHour, numOfWorkingDays, totalHrsInMonth) {
        console.log(companyName + ' Wage Computation');
        while (this.totalWorkingDays < numOfWorkingDays && this.totalWorkingHrs < totalHrsInMonth) {
            this.totalWorkingDays++;
            console.log(this.totalWorkingDays);
            this.totalMonthlyWage = this.totalMonthlyWage + this.employeeDailyWage(empWagePerHour);
            this.totalWorkingHrs = this.totalWorkingHrs + this.dailyHour;
        }
        console.log('Total Employee Hours :', this.totalWorkingHrs);
        console.log('Employee Monthly Wage is :', this.totalMonthlyWage);
        console.log('---------------------------------------------');
    };
    return EmployeeWage;
}());
var company1 = new EmployeeWage();
company1.monthlyWage('company1', 20, 20, 100);
var company2 = new EmployeeWage();
company2.monthlyWage('company2', 22, 22, 120);
