
function age() {

    // Date of Birth (Input)
    let inputDay = document.getElementById("day").value;
    let inputMonth = document.getElementById("month").value;
    let inputYear = document.getElementById("year").value;

    console.log("Day", inputDay, " Month", inputMonth, " Year", inputYear);

    let date = new Date(); // Current Date

    let currDay = date.getDate();
    let currMonth = 1 + date.getMonth();
    let currYear = date.getFullYear();

    let monthsArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (inputDay > currDay) {
        currDay = currDay + monthsArray[currMonth - 1];
        currMonth = currMonth - 1;
    }

    if (inputMonth > currMonth) {
        currMonth = currMonth + 12;
        currYear = currYear - 1;
    }

    // Age Result
    let dayResult = currDay - inputDay;
    let monthResult = currMonth - inputMonth;
    let yearResult = currYear - inputYear;

    console.log("Your age is ", yearResult, " years ", monthResult, " months and", dayResult, " days");

    // Display age on screen
    document.getElementById("year-result").innerText = yearResult;
    document.getElementById("month-result").innerText = monthResult;
    document.getElementById("days-result").innerText = dayResult;

}