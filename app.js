import DonutMaker from "./DonutMaker.js";

const Donut = new DonutMaker(0, 0, 100, 1, 10);

const donutBtnCount = document.querySelector(".donutButton"),
  autoClickerBtnCount = document.querySelector(".autoClicker"),
  multiplierBtnCount = document.querySelector(".multiplier");

const donutCount = document.createElement("p");
donutCount.innerText = "Donuts: " + Donut.numDonuts;
donutBtnCount.appendChild(donutCount);

const autoClickerPriceCount = document.createElement("p");
autoClickerPriceCount.innerText =
  "Auto Clicker Price :" +
  Donut.autoClickerPrice +
  " " +
  "Auto Clickers: " +
  Donut.numAutoClickers;
autoClickerBtnCount.appendChild(autoClickerPriceCount);

const multiplierPriceCount = document.createElement("p");
multiplierPriceCount.innerText =
  "Multiplier price: " +
  Donut.clickMultiplierPrice +
  " " +
  "Multiplier: " +
  Donut.clickMultiplier;
multiplierBtnCount.appendChild(multiplierPriceCount);