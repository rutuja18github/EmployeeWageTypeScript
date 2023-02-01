var wagePerHour = 20;
var dailyEmployeeWage;
var randomValue = Math.round(Math.random() * 2);
console.log(randomValue);
function employeeCheck(attendance) {
    if (attendance == 1) {
        var fullDayHour = 8;
        console.log('Employee is present');
        dailyEmployeeWage = wagePerHour * fullDayHour;
        return dailyEmployeeWage;
    }
    else if (attendance == 2) {
        var fullDayHour = 4;
        console.log('Employee is present');
        dailyEmployeeWage = wagePerHour * fullDayHour;
        return dailyEmployeeWage;
    }
    else {
        var fullDayHour = 0;
        console.log('Employee is absent');
        dailyEmployeeWage = wagePerHour * fullDayHour;
        return dailyEmployeeWage;
    }
}
console.log('Employee Daily Wage is :', employeeCheck(randomValue));
