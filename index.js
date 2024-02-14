
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

    // Year Result with animation
    let yearResAnimate = setInterval(() => {
        animateResult("year-result", yearResult, yearResAnimate);
    }, 20);

    // Month Result Animation with delay
    let monthResAnimate = setInterval(() => {
        animateResult("month-result", monthResult, monthResAnimate);
    }, 300);

    // Day Result Animate with delay
    let dayResAnimate = setInterval(() => {
        animateResult("days-result", dayResult, dayResAnimate);
    }, 100);

}




function animateResult(result, value, animateInterval) {

    clearInterval(animateInterval);

    let count = 0;

    let idInterval = setInterval(function () {
        let output = document.getElementById(result);
        output.innerText = count;
        count++;
        if (count > value) {
            clearInterval(idInterval);
        }
    }, 40);

}