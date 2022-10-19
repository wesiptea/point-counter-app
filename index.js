// 1 - initial home and guest counts to 0
// 2 - listen for clicks on 3 home buttons
// 3 - listen for clicks on 3 guest buttons
// 4 - increment the count variable in html to reflect the modified count 


let homeCountEl = document.getElementById("home-count-el");
let guestCountEl = document.getElementById("guest-count-el");

let homeCount = 0;
let guestCount = 0;

function homeIncrement1() {
    homeCount += 1;
    homeCountEl.textContent = homeCount;
}

function guestIncrement1() {
    guestCount += 1;
    guestCountEl.textContent = guestCount;
}

function homeIncrement2() {
    homeCount += 2;
    homeCountEl.textContent = homeCount;
}

function guestIncrement2() {
    guestCount += 2;
    guestCountEl.textContent = guestCount;
}

function homeIncrement3() {
    homeCount += 3;
    homeCountEl.textContent = homeCount;
}

function guestIncrement3() {
    guestCount += 3;
    guestCountEl.textContent = guestCount;
}
