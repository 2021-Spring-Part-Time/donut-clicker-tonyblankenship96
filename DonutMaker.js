class DonutMaker {
  constructor(numDonuts, numAutoClickers, autoClickerPrice) {
    this.numDonuts = numDonuts;
    this.numAutoClickers = numAutoClickers;
    this.autoClickerPrice = autoClickerPrice;
  }

  addDonut() {
    this.numDonuts++;
  }

  addAutoClicker() {
    if (this.numDonuts >= this.autoClickerPrice) {
      this.numAutoClickers++;
      this.numDonuts -= this.autoClickerPrice;
      this.autoClickerPrice *= 1.1;
      this.autoClickerPrice = Math.floor(this.autoClickerPrice);
    }
  }

  activateAutoClickers() {
    if (this.numAutoClickers > 0) {
      this.numDonuts += this.numAutoClickers * 1;
    } 
  }
}

export default DonutMaker;
