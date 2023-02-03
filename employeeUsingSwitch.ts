export class EmployeeWage {
    empWagePerHour: number;
    numOfWorkingDays:number;
    dailyEmployeeWage: number;
    dailyHour: number;
    totalHrsInMonth: number;
    companyName:string;
    constructor(companyName:string,empWagePerHour:number,numOfWorkingDays:number,totalHrsInMonth:number){
        this.companyName=companyName
        this.empWagePerHour = empWagePerHour;
        this.numOfWorkingDays = numOfWorkingDays;
        this.totalHrsInMonth = totalHrsInMonth;
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
    monthlyWage():number[] {
        let totalWorkingDays = 0;
        let totalMonthlyWage = 0;
        let totalWorkingHrs = 0;
        while (totalWorkingDays < this.numOfWorkingDays &&totalWorkingHrs < this.totalHrsInMonth) {
            totalWorkingDays++
            //console.log(this.totalWorkingDays)
            totalMonthlyWage = totalMonthlyWage + this.employeeDailyWage()
            totalWorkingHrs = totalWorkingHrs + this.dailyHour
        }
        const EmpArry:number[]=[totalWorkingHrs,totalMonthlyWage]
        return EmpArry
    }
    empWageBuilder(totalNumberOfEmployee:number):any{
        let companyTotalWage=0
        let employeeArray:any=[]
        for(let i=1;i<=totalNumberOfEmployee;i++){
            let empArry=this.monthlyWage()
            companyTotalWage = companyTotalWage+empArry[1]  
            let empObj={
                empName:"employee"+i,
                employeeTotalHours:empArry[0],
                employeeTotalWage:empArry[1]
            } 
            employeeArray.push(empObj)
        }
        let companyObj={
            companyName:this.companyName ,
            employee:employeeArray,
            companyTotalWage:companyTotalWage
        }
        //console.log('Company total wage',companyTotalWage) 
        return companyObj
    }
}
// let company1 = new EmployeeWage('company1',20,20,100)
// company1.empWageBuilder(2)
// console.log('---------------------------------------------')
// let company2 = new EmployeeWage('company2',22,22,120)
// company2.empWageBuilder(4)