function diceGameSimulation(noOfSimulation) {
  let results = [];
  for (let i = 0; i < noOfSimulation; i++) {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    let sum = dice1 + dice2;
    let result;
    switch (sum) {
      case 7:
      case 11:
        result = "win";
        break;
      case 2:
      case 3:
      case 12:
        result = "lose";
        break;
      default:
        result = "roll again";
    }
    results.push({ dice1, dice2, sum, result });
  }
  return results;
}

module.exports = diceGameSimulation;
