var EmployeeWage = /** @class */ (function () {
    function EmployeeWage(companyName, empWagePerHour, numOfWorkingDays, totalHrsInMonth) {
        this.companyName = companyName;
        this.empWagePerHour = empWagePerHour;
        this.numOfWorkingDays = numOfWorkingDays;
        this.totalWorkingDays = 0;
        this.totalMonthlyWage = 0;
        this.totalHrsInMonth = totalHrsInMonth;
        this.totalWorkingHrs = 0;
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
        while (this.totalWorkingDays < this.numOfWorkingDays && this.totalWorkingHrs < this.totalHrsInMonth) {
            this.totalWorkingDays++;
            //console.log(this.totalWorkingDays)
            this.totalMonthlyWage = this.totalMonthlyWage + this.employeeDailyWage();
            this.totalWorkingHrs = this.totalWorkingHrs + this.dailyHour;
        }
        console.log('Total Employee Hours :', this.totalWorkingHrs);
        console.log('Employee Monthly Wage is :', this.totalMonthlyWage, '\n');
        return this.totalMonthlyWage;
    };
    EmployeeWage.prototype.empWageBuilder = function (totalNumberOfEmployee) {
        var companyTotalWage = 0;
        console.log(this.companyName + ' Wage Computation \n');
        for (var i = 1; i <= totalNumberOfEmployee; i++) {
            console.log('Employee ' + i + ' Wage');
            companyTotalWage = companyTotalWage + this.monthlyWage();
            //console.log()     
        }
        console.log('Company total wage', companyTotalWage);
    };
    return EmployeeWage;
}());
var company1 = new EmployeeWage('company1', 20, 20, 100);
company1.empWageBuilder(2);
console.log('---------------------------------------------');
var company2 = new EmployeeWage('company2', 22, 22, 120);
company2.empWageBuilder(3);
