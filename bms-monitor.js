
function isInRange(value, min, max) {
  return value >= min && value <= max;
}

function batteryIsOk(temperature, soc, chargeRate) {
  return (
    isInRange(temperature, 0, 45) &&
    isInRange(soc, 20, 80) &&
    isInRange(chargeRate, 0, 0.8)
  );
}

module.exports = {
  batteryIsOk,
};
