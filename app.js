import DonutMaker from "./DonutMaker.js";

const companyButton = document.querySelector('#companyInfoBtn');
const companyContent = document.querySelector('.companyInfoP');
companyButton.addEventListener('click', function(){
  companyContent.classList.toggle('companyInfoPShow');
});

const inspirationButton = document.querySelector('#inspirationBtn');
const inspirationContent = document.querySelector('.inspirationP');
inspirationButton.addEventListener('click', function(){
  inspirationContent.classList.toggle('inspirationPShow');
});

const devButton = document.querySelector('#devInfoBtn');
const devContent = document.querySelector('.devInfoP');
devButton.addEventListener('click', function(){
  devContent.classList.toggle('devInfoPShow');
});

const Donut = new DonutMaker(0, 0, 100, 1, 10);

const donutBtn = document.querySelector(".donutBtn"),
  donutCount = document.querySelector(".donutCount"),
  autoClickerBtn = document.querySelector(".autoClickerBtn"),
  autoClickerCount = document.querySelector(".autoClickerCount"),
  multiplierBtn = document.querySelector(".multiplierBtn"),
  multiplierCount = document.querySelector(".multiplierCount");

donutBtn.addEventListener("click", () => {
  Donut.addDonut();
  donutCount.innerHTML = "Donuts: " + Number(Donut.numDonuts).toFixed(2);
});

autoClickerBtn.addEventListener("click", () => {
  Donut.addAutoClicker();
  donutCount.innerHTML = "Donuts: " + Number(Donut.numDonuts).toFixed(2);
  autoClickerCount.innerHTML =
    "Auto Clickers: " +
    Donut.numAutoClickers +
    " " +
    "Auto Clicker Price: " +
    Donut.autoClickerPrice;
});

multiplierBtn.addEventListener("click", () => {
  Donut.addClickMultiplier();
  donutCount.innerHTML = "Donuts: " + Number(Donut.numDonuts).toFixed(2);
  autoClickerCount.innerHTML =
    "Auto Clickers: " +
    Donut.numAutoClickers +
    " " +
    "Auto Clicker Price: " +
    Donut.autoClickerPrice;
  multiplierCount.innerHTML =
    "Multiplier: " +
    Number(Donut.clickMultiplier).toFixed(2) +
    " " +
    "Multiplier price: " +
    Donut.clickMultiplierPrice;
});

setInterval(function(){Donut.activateAutoClickers()}, 1000);
setInterval(function(){donutCount.innerHTML = "Donuts: " + Number(Donut.numDonuts).toFixed(2);}, 1000);