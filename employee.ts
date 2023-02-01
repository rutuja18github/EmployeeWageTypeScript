var wagePerHour:number=20
var dailyEmployeeWage:number
var randomValue:number = Math.round(Math.random() * 2);
console.log(randomValue)

function employeeCheck(attendance:number):number{
    if(attendance == 1){
        let fullDayHour:number=8
        console.log('Employee is present')
        dailyEmployeeWage=wagePerHour*fullDayHour
        return dailyEmployeeWage
    }else if(attendance ==2){
        let fullDayHour:number=4
        console.log('Employee is present')
        dailyEmployeeWage=wagePerHour*fullDayHour
        return dailyEmployeeWage
    }
    else{
        let fullDayHour:number=0
        console.log('Employee is absent')
        dailyEmployeeWage=wagePerHour*fullDayHour
        return dailyEmployeeWage
    }
}
console.log('Employee Daily Wage is :',employeeCheck(randomValue))