var EmpWageBuilder = /** @class */ (function () {
    function EmpWageBuilder(companyName, empWagePerHour, numOfWorkingDays, totalHrsInMonth) {
        this.companyName = companyName;
        this.empWagePerHour = empWagePerHour;
        this.numOfWorkingDays = numOfWorkingDays;
        this.totalWorkingDays = 0;
        this.totalMonthlyWage = 0;
        this.totalHrsInMonth = totalHrsInMonth;
        this.totalWorkingHrs = 0;
    }
    EmpWageBuilder.prototype.employeeDailyWage = function () {
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
    EmpWageBuilder.prototype.monthlyWage = function () {
        console.log(this.companyName + ' Wage Computation');
        while (this.totalWorkingDays < this.numOfWorkingDays && this.totalWorkingHrs < this.totalHrsInMonth) {
            this.totalWorkingDays++;
            //console.log(this.totalWorkingDays)
            this.totalMonthlyWage = this.totalMonthlyWage + this.employeeDailyWage();
            this.totalWorkingHrs = this.totalWorkingHrs + this.dailyHour;
        }
        console.log('Total Employee Hours :', this.totalWorkingHrs);
        console.log('Employee Monthly Wage is :', this.totalMonthlyWage);
        console.log('---------------------------------------------');
    };
    return EmpWageBuilder;
}());
var company1 = new EmpWageBuilder('company1', 20, 20, 100);
company1.monthlyWage();
var company2 = new EmpWageBuilder('company2', 22, 22, 120);
company2.monthlyWage();
