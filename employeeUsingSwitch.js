var empWagePerHour = 20;
var dailyEmployeeWage;
var fullDayHour;
var randomValue = Math.round(Math.random() * 2);
console.log(randomValue);
function employee(attendance) {
    switch (attendance) {
        case 0:
            fullDayHour = 0;
            console.log('Employee is absent');
            dailyEmployeeWage = empWagePerHour * fullDayHour;
            break;
        case 1:
            fullDayHour = 8;
            console.log('Employee is present');
            dailyEmployeeWage = empWagePerHour * fullDayHour;
            break;
        case 2:
            fullDayHour = 4;
            console.log('Employee is present');
            dailyEmployeeWage = empWagePerHour * fullDayHour;
            break;
    }
    return dailyEmployeeWage;
}
console.log(employee(randomValue));
