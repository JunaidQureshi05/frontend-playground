function staircaseClimbingCombinations(steps) {
  return helper(0, steps);
}

function helper(currentStep, steps) {
  if (currentStep > steps) {
    return 0;
  }
  if (currentStep === steps) {
    return 1;
  }
  return helper(currentStep + 1, steps) + helper(currentStep + 2, steps);
}

console.log(staircaseClimbingCombinations(3));
