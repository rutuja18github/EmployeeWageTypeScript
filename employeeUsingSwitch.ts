class EmployeeWage{
 empWagePerHour: number = 20;
 numOfWorkingDays=20;
 dailyEmployeeWage: number;
 dailyHour: number;
 totalWorkingDays:number=0;
 totalMonthlyWage:number=0;
 totalHrsInMonth:number=100;
 totalWorkingHrs:number=0;
 randomValue: number;
employeeDailyWage():number {
     this.randomValue = Math.round(Math.random() * 2);
    console.log(this.randomValue)
    switch (this.randomValue) {
        case 0: this.dailyHour = 0
            console.log('Employee is absent')
            this.dailyEmployeeWage = this.empWagePerHour * this.dailyHour
            console.log('Employee Daily Wage is :',this.dailyEmployeeWage)
            break;
        case 1: this.dailyHour = 8
            console.log('Employee is present')
            this.dailyEmployeeWage = this.empWagePerHour * this.dailyHour
            console.log('Employee Daily Wage is :',this.dailyEmployeeWage)
            break;
        case 2: this.dailyHour = 4
            console.log('Employee is present')
            this.dailyEmployeeWage = this.empWagePerHour * this.dailyHour
            console.log('Employee Daily Wage is :',this.dailyEmployeeWage)
            break;
    }
    return this.dailyEmployeeWage
}
monthlyWage(){
        while(this.totalWorkingDays < this.numOfWorkingDays && this.totalWorkingHrs < this.totalHrsInMonth ){
            this.totalWorkingDays++
            console.log(this.totalWorkingDays)
            this.totalMonthlyWage = this.totalMonthlyWage+this.employeeDailyWage()
            this.totalWorkingHrs =this.totalWorkingHrs+this.dailyHour
        }
        console.log('Total Employee Hours :',this.totalWorkingHrs)
        console.log('Employee Monthly Wage is :',this.totalMonthlyWage)
    }
}

let employeeWage=new EmployeeWage()
employeeWage.monthlyWage()