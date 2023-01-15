let scoreHome = document.getElementById("scoreBoxHome");
let scoreGuest = document.getElementById("scoreBoxGuest");

const homeBtnOne = document.getElementById("addOneHome");
const homeBtnTwo = document.getElementById("addTwoHome");
const homeBtnTree = document.getElementById("addTreeHome");

const GuestBtnOne = document.getElementById("addOneGuest");
const GuestBtnTwo = document.getElementById("addTwoGuest");
const GuestBtnTree = document.getElementById("addTreeGuest");

let guestCount = 0;
let homeCount = 0;

function homeAddOne() {
  homeCount = homeCount + 1;
  scoreHome.textContent = homeCount;
  console.log(homeCount);
}

function homeAddTwo() {
  homeCount = homeCount + 2;
  scoreHome.textContent = homeCount;
  console.log(homeCount);
}

function homeAddTree() {
  homeCount = homeCount + 3;
  scoreHome.textContent = homeCount;
  console.log(homeCount);
}

function GuestAddOne() {
  guestCount = guestCount + 1;
  scoreGuest.textContent = guestCount;
  console.log(guestCount);
}

function GuestAddTwo() {
  guestCount = guestCount + 2;
  scoreGuest.textContent = guestCount;
  console.log(guestCount);
}

function GuestAddTree() {
  guestCount = guestCount + 3;
  scoreGuest.textContent = guestCount;
  console.log(guestCount);
}

function resetHome() {
  homeCount = 0;
  scoreHome.textContent = homeCount;
}

function resetGuest() {
  guestCount = 0;
  scoreGuest.textContent = guestCount;
}
