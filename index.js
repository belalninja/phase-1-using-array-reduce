const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const reducer = function (batteryBatches) {
  return batteryBatches.reduce((accum, current) => {
    return (accum += current);
  }, 0);
};
const totalBatteries = reducer(batteryBatches);
totalBatteries;
