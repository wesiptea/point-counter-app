// 1 - initial home and guest counts to 0
// 2 - listen for clicks on 3 home buttons
// 3 - listen for clicks on 3 guest buttons
// 4 - increment the count variable in html to reflect the modified count 


let homeCountEl = document.getElementById("home-count-el");
let guestCountEl = document.getElementById("guest-count-el");

let count = 0;

function homeIncrement1() {
    count += 1;
    homeCountEl.textContent = count;
    guestCountEl.textContent = count;
    console.log(count);
}
