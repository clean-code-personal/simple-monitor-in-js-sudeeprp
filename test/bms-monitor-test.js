const {expect} = require('chai');
const {batteryIsOk} = require('../bms-monitor');

describe('BMS monitor', ()=> {
  it('reports ok when all parameters are in range', ()=> {
    expect(batteryIsOk(25, 70, 0.7)).to.be.true;
  });

  it('reports not ok when temperature is out of range', () => {
    expect(batteryIsOk(50, 85, 0)).to.be.false;
  });

  it('reports not ok when state of charge is too low', () => {
    expect(batteryIsOk(25, 19, 0.7)).to.be.false;
  });

  it('reports not ok when state of charge is too high', () => {
    expect(batteryIsOk(25, 81, 0.7)).to.be.false;
  });

  it('reports not ok when charge rate is too high', () => {
    expect(batteryIsOk(25, 70, 0.9)).to.be.false;
  });
});
