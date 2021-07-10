class DonutMaker {
  constructor(
    numDonuts,
    numAutoClickers,
    autoClickerPrice,
    clickMultiplier,
    clickMultiplierPrice
  ) {
    this.numDonuts = numDonuts;
    this.numAutoClickers = numAutoClickers;
    this.autoClickerPrice = autoClickerPrice;
    this.clickMultiplier = clickMultiplier;
    this.clickMultiplierPrice = clickMultiplierPrice;
  }

  addDonut() {
    this.numDonuts += 1 * this.getclickMultiplier();
  }

  addAutoClicker() {
    if (this.numDonuts >= this.autoClickerPrice) {
      this.numAutoClickers++;
      this.numDonuts -= this.autoClickerPrice;
      this.autoClickerPrice *= 1.1;
      this.autoClickerPrice = Math.floor(this.autoClickerPrice);
    }
  }

  addClickMultiplier() {
    if (this.numDonuts >= this.clickMultiplierPrice) {
      this.clickMultiplier *= 1.2;
      this.numDonuts -= this.clickMultiplierPrice;
      this.clickMultiplierPrice *= 1.1;
      this.clickMultiplierPrice = Math.floor(this.clickMultiplierPrice);
    }
  }

  activateAutoClickers() {
    if (this.numAutoClickers > 0) {
      this.numDonuts += this.numAutoClickers * this.clickMultiplier;
    }
  }

  getclickMultiplier(){
   return this.clickMultiplier
  }

}

export default DonutMaker;