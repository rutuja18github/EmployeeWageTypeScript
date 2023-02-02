var EmployeeWage = /** @class */ (function () {
    function EmployeeWage() {
        this.empWagePerHour = 20;
        this.numOfWorkingDays = 20;
        this.totalWorkingDays = 0;
        this.totalMonthlyWage = 0;
        this.totalHrsInMonth = 100;
        this.totalWorkingHrs = 0;
    }
    EmployeeWage.prototype.employeeDailyWage = function () {
        this.randomValue = Math.round(Math.random() * 2);
        console.log(this.randomValue);
        switch (this.randomValue) {
            case 0:
                this.dailyHour = 0;
                console.log('Employee is absent');
                this.dailyEmployeeWage = this.empWagePerHour * this.dailyHour;
                console.log('Employee Daily Wage is :', this.dailyEmployeeWage);
                break;
            case 1:
                this.dailyHour = 8;
                console.log('Employee is present');
                this.dailyEmployeeWage = this.empWagePerHour * this.dailyHour;
                console.log('Employee Daily Wage is :', this.dailyEmployeeWage);
                break;
            case 2:
                this.dailyHour = 4;
                console.log('Employee is present');
                this.dailyEmployeeWage = this.empWagePerHour * this.dailyHour;
                console.log('Employee Daily Wage is :', this.dailyEmployeeWage);
                break;
        }
        return this.dailyEmployeeWage;
    };
    EmployeeWage.prototype.monthlyWage = function () {
        while (this.totalWorkingDays < this.numOfWorkingDays && this.totalWorkingHrs < this.totalHrsInMonth) {
            this.totalWorkingDays++;
            console.log(this.totalWorkingDays);
            this.totalMonthlyWage = this.totalMonthlyWage + this.employeeDailyWage();
            this.totalWorkingHrs = this.totalWorkingHrs + this.dailyHour;
        }
        console.log('Total Employee Hours :', this.totalWorkingHrs);
        console.log('Employee Monthly Wage is :', this.totalMonthlyWage);
    };
    return EmployeeWage;
}());
var employeeWage = new EmployeeWage();
employeeWage.monthlyWage();
