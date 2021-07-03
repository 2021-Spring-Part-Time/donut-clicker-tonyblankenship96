import DonutMaker from "./DonutMaker";

describe("The creation of DonutMaker", () => {
  test("Does it add a donut?", () => {
    const underTest = new DonutMaker(0.0);
    underTest.addDonut();
    expect(underTest.numDonuts).toEqual(1);
  });
  test("Can it purchase an autoclicker and remove spent donuts?", () => {
    const underTest = new DonutMaker(100, 0, 100, 1, 10);
    underTest.addAutoClicker();
    expect(underTest.numAutoClickers).toEqual(1);
    expect(underTest.numDonuts).toEqual(0);
  });
  test("Should not allow autoclicker purchase with 99 donuts", () => {
    const underTest = new DonutMaker(99, 0, 100, 1, 10);
    underTest.addAutoClicker();
    expect(underTest.numAutoClickers).toEqual(0);
  });
  test("Will add donuts increase by the amount of autoclickers present when fired", () => {
    const underTest = new DonutMaker(110, 2, 100, 1, 10);
    underTest.activateAutoClickers();
    expect(underTest.numDonuts).toEqual(112);
  });
  test("Price of autoclicker goes up by 10% each time", () => {
    const underTest = new DonutMaker(100, 0, 100, 1, 10);
    underTest.addAutoClicker();
    expect(underTest.autoClickerPrice).toEqual(110);
    expect(underTest.numAutoClickers).toEqual(1);
    expect(underTest.numDonuts).toEqual(0);
  });
  test("Price of second autoclicker goes up", () => {
    const underTest = new DonutMaker(300, 0, 100, 1, 10);
    underTest.addAutoClicker();
    underTest.addAutoClicker();
    expect(underTest.autoClickerPrice).toEqual(121);
  });
  test("Can buy a click multiplier, and takes away donuts", () => {
    const underTest = new DonutMaker(10, 0, 100, 1, 10);
    underTest.addClickMultiplier();
    expect(underTest.clickMultiplier).toEqual(1.2);
    expect(underTest.numDonuts).toEqual(0);
  });
  test("clickmultiplier price goes up after 1st", () => {
    const underTest = new DonutMaker(21, 0, 100, 1, 10);
    underTest.addClickMultiplier();
    underTest.addClickMultiplier();
    expect(underTest.numDonuts).toEqual(0);
  });
  test("num of donuts goes up by the right amount with multiplier and autoclicker", () => {
    const underTest = new DonutMaker(0, 2, 0, 1.2, 0);
    underTest.activateAutoClickers();
    expect(underTest.numDonuts).toEqual(2.4)
  })
});
