class EmployeeWage {
    empWagePerHour: number;
    numOfWorkingDays:number;
    dailyEmployeeWage: number;
    dailyHour: number;
    totalWorkingDays: number;
    totalMonthlyWage: number;
    totalHrsInMonth: number;
    totalWorkingHrs: number;
    companyName:string;
    constructor(companyName:string,empWagePerHour:number,numOfWorkingDays:number,totalHrsInMonth:number){
        this.companyName=companyName
        this.empWagePerHour = empWagePerHour;
        this.numOfWorkingDays = numOfWorkingDays;
        this.totalWorkingDays = 0;
        this.totalMonthlyWage = 0;
        this.totalHrsInMonth = totalHrsInMonth;
        this.totalWorkingHrs = 0;
    }
    employeeDailyWage(): number {
        var attendance = Math.round(Math.random() * 2);
        switch (attendance) {
            case 0: this.dailyHour = 0
                this.dailyEmployeeWage = this.empWagePerHour * this.dailyHour
                break;
            case 1: this.dailyHour = 8
                this.dailyEmployeeWage = this.empWagePerHour * this.dailyHour
                break;
            case 2: this.dailyHour = 4
                this.dailyEmployeeWage = this.empWagePerHour * this.dailyHour
                break;
        }
        return this.dailyEmployeeWage
    }
    monthlyWage():void {
        console.log(this.companyName + ' Wage Computation')
        while (this.totalWorkingDays < this.numOfWorkingDays && this.totalWorkingHrs < this.totalHrsInMonth) {
            this.totalWorkingDays++
            //console.log(this.totalWorkingDays)
            this.totalMonthlyWage = this.totalMonthlyWage + this.employeeDailyWage()
            this.totalWorkingHrs = this.totalWorkingHrs + this.dailyHour
        }
        console.log('Total Employee Hours :', this.totalWorkingHrs)
        console.log('Employee Monthly Wage is :', this.totalMonthlyWage)
        console.log('---------------------------------------------')
    }
}

let company1 = new EmployeeWage('company1',20,20,100)
company1.monthlyWage()
let company2 = new EmployeeWage('company2',22,22,120)
company2.monthlyWage()