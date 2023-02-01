let empWagePerHour: number = 20;
var dailyEmployeeWage: number;
var fullDayHour: number;
var randomValue: number = Math.round(Math.random() * 2);
console.log(randomValue)

function employee(attendance: number) {
    switch (attendance) {
        case 0: fullDayHour = 0
            console.log('Employee is absent')
            dailyEmployeeWage = empWagePerHour * fullDayHour
            break;
        case 1: fullDayHour = 8
            console.log('Employee is present')
            dailyEmployeeWage = empWagePerHour * fullDayHour
            break;
        case 2: fullDayHour = 4
            console.log('Employee is present')
            dailyEmployeeWage = empWagePerHour * fullDayHour
            break;
    }
    return dailyEmployeeWage
}
console.log('Employee Daily Wage is :',employee(randomValue))