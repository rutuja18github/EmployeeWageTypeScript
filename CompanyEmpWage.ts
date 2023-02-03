import { EmployeeWage } from "./employeeUsingSwitch";

class CompanyEmpWage{
    private company1:EmployeeWage
    companyEmployeeWage:any[]=[]
    companyWage(noOfEmployee:number,companyName:string,empWagePerHour:number,numOfWorkingDays:number,totalHrsInMonth:number){
        this.company1 = new EmployeeWage(companyName,empWagePerHour,numOfWorkingDays,totalHrsInMonth)
        const companyEmployeeWagesArray=this.company1.empWageBuilder(noOfEmployee)
        this.companyEmployeeWage.push(companyEmployeeWagesArray)
    }
    print():void{
        for(let company of this.companyEmployeeWage){
            console.log(company)
        }
        //console.log(this.companyEmployeeWage)
    }
}
let company =new CompanyEmpWage();
company.companyWage(3,'company1',20,20,100)
company.companyWage(2,'company2',18,22,120)
company.print()