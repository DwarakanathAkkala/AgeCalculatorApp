let errors = true;
let monthsArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function age() {

    if (errors == true) return;

    // Date of Birth (Input)
    let inputDay = document.getElementById("day").value;
    let inputMonth = document.getElementById("month").value;
    let inputYear = document.getElementById("year").value;

    if (inputYear < 1500) {
        alert("We do not support Historical ages :-)");
        return;
    }

    if (sessionStorage.length > 0) {
        if (sessionStorage.getItem("daycheck") == inputDay &&
            sessionStorage.getItem("monthcheck") == inputMonth &&
            sessionStorage.getItem("yearcheck") == inputYear) {
            return;
        }
    }

    let date = new Date(); // Current Date

    let currDay = date.getDate();
    let currMonth = 1 + date.getMonth();
    let currYear = date.getFullYear();

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

    sessionStorage.setItem("daycheck", inputDay);
    sessionStorage.setItem("monthcheck", inputMonth);
    sessionStorage.setItem("yearcheck", inputYear);

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

let dayEle = document.getElementById("day");
let monthEle = document.getElementById("month");
let yearEle = document.getElementById("year");


// Check Inputs
dayEle.addEventListener("input", () => { checkInputs(); })
monthEle.addEventListener("input", () => { checkInputs(); });
yearEle.addEventListener("input", () => { checkInputs(); });

function checkInputs() {

    let dayValueCheck = dayEle.value;
    let monthValueCheck = monthEle.value;
    let yearValueCheck = yearEle.value;

    let list = document.querySelectorAll('label');


    // Reset Errors
    for (let i = 0; i < list.length; i++) {
        list[i].classList.remove("error");
    }

    dayEle.classList.remove("error");
    monthEle.classList.remove("error");
    yearEle.classList.remove("error");

    document.getElementById("day-input-error").innerText = "";
    document.getElementById("month-input-error").innerText = "";
    document.getElementById("year-input-error").innerText = "";


    if (dayValueCheck == "" || dayValueCheck == "undefined") {
        document.getElementById("day-input-error").innerText = "This field is required";
        dayEle.classList.add("error");
        return;
    }

    if (dayValueCheck < 1 || dayValueCheck > 31) {
        document.getElementById("day-input-error").innerText = "Must be a valid day";
        return;
    }

    // Leap Year Birth Day
    if (new Date(yearValueCheck, 1, 29).getDate() == 29) {
        monthsArray[1] = 29;
        document.getElementById("day-input-error").innerText = "";
    }

    if (!(new Date(yearValueCheck, 1, 29).getDate() == 29)) {
        monthsArray[1] = 28;
    }

    if (monthValueCheck == "" || monthValueCheck == "undefined") {
        document.getElementById("month-input-error").innerText = "This field is required";
        monthEle.classList.add("error");
        return;
    }

    if (monthValueCheck < 1 || monthValueCheck > 12) {
        document.getElementById("month-input-error").innerText = "Must be a valid month";
        return;
    }

    if (dayValueCheck > monthsArray[monthValueCheck - 1]) {
        document.getElementById("day-input-error").innerText = "Must be a valid date";
        document.getElementById("month-input-error").innerText = "";

        for (let i = 0; i < list.length; i++) {
            list[i].classList.add("error");
        }

        return;
    }

    if (yearValueCheck == "" || yearValueCheck == "undefined") {
        document.getElementById("year-input-error").innerText = "This field is required";
        return;
    }

    if (yearValueCheck > new Date().getFullYear()) {
        document.getElementById("year-input-error").innerText = "Must be a valid year";
    }

    else {
        // Updating error flag/boolean value
        errors = false;

        for (let i = 0; i < list.length; i++) {
            list[i].classList.remove("error");
        }

        dayEle.classList.remove("error");
        monthEle.classList.remove("error");
        yearEle.classList.remove("error");

        document.getElementById("day-input-error").innerText = "";
        document.getElementById("month-input-error").innerText = "";
        document.getElementById("year-input-error").innerText = "";
    }

}