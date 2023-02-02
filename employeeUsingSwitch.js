var empWagePerHour = 20;
var numOfWorkingDays = 20;
var dailyEmployeeWage;
var dailyHour;
var totalWorkingDays = 0;
var totalMonthlyWage = 0;
var totalHrsInMonth = 100;
var totalWorkingHrs = 0;
function employeeDailyWage() {
    var randomValue = Math.round(Math.random() * 2);
    console.log(randomValue);
    switch (randomValue) {
        case 0:
            dailyHour = 0;
            console.log('Employee is absent');
            dailyEmployeeWage = empWagePerHour * dailyHour;
            console.log('Employee Daily Wage is :', dailyEmployeeWage);
            break;
        case 1:
            dailyHour = 8;
            console.log('Employee is present');
            dailyEmployeeWage = empWagePerHour * dailyHour;
            console.log('Employee Daily Wage is :', dailyEmployeeWage);
            break;
        case 2:
            dailyHour = 4;
            console.log('Employee is present');
            dailyEmployeeWage = empWagePerHour * dailyHour;
            console.log('Employee Daily Wage is :', dailyEmployeeWage);
            break;
    }
    return dailyEmployeeWage;
}
function monthlyWage() {
    while (totalWorkingDays < numOfWorkingDays && totalWorkingHrs < totalHrsInMonth) {
        totalWorkingDays++;
        console.log(totalWorkingDays);
        totalMonthlyWage = totalMonthlyWage + employeeDailyWage();
        totalWorkingHrs = totalWorkingHrs + dailyHour;
    }
    console.log('Total Employee Hours :', totalWorkingHrs);
    console.log('Employee Monthly Wage is :', totalMonthlyWage);
}
monthlyWage();
