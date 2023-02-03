class EmployeeWage {
    dailyEmployeeWage: number;
    dailyHour: number;
    totalWorkingDays: number = 0;
    totalMonthlyWage: number = 0;
    totalWorkingHrs: number = 0;

    employeeDailyWage(empWagePerHour:number): number {
        var attendance = Math.round(Math.random() * 2);
        switch (attendance) {
            case 0: this.dailyHour = 0
                this.dailyEmployeeWage =empWagePerHour * this.dailyHour
                break;
            case 1: this.dailyHour = 8
                this.dailyEmployeeWage = empWagePerHour * this.dailyHour
                break;
            case 2: this.dailyHour = 4
                this.dailyEmployeeWage =empWagePerHour * this.dailyHour
                break;
        }
        return this.dailyEmployeeWage
    }
    monthlyWage(companyName:string,empWagePerHour:number,numOfWorkingDays:number,totalHrsInMonth:number):void {
        console.log(companyName + ' Wage Computation')
        while (this.totalWorkingDays <numOfWorkingDays && this.totalWorkingHrs < totalHrsInMonth) {
            this.totalWorkingDays++
            console.log(this.totalWorkingDays)
            this.totalMonthlyWage = this.totalMonthlyWage + this.employeeDailyWage(empWagePerHour)
            this.totalWorkingHrs = this.totalWorkingHrs + this.dailyHour
        }
        console.log('Total Employee Hours :', this.totalWorkingHrs)
        console.log('Employee Monthly Wage is :', this.totalMonthlyWage)
        console.log('---------------------------------------------')
    }
}

let company1 = new EmployeeWage()
company1.monthlyWage('company1',20,20,100)
let company2 = new EmployeeWage()
company2.monthlyWage('company2',22,22,120)