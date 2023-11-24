let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homeCount = 0;
let guestCount = 0;

homeScore.innerText = 0;
guestScore.innerText = 0;


// home score increases
function addOneHome() {
    homeCount++; 
    homeScore.innerText = homeCount;
}

function addTwoHome() {
    homeCount += 2; 
    homeScore.innerText = homeCount;
}

function addThreeHome() {
    homeCount += 3; 
    homeScore.innerText = homeCount;
}

//guest score increases
function addOneGuest() {
    guestCount++; 
    guestScore.innerText = guestCount;
}

function addTwoGuest() {
    guestCount += 2; 
    guestScore.innerText = guestCount;
}

function addThreeGuest() {
    guestCount += 3; 
    guestScore.innerText = guestCount;
}