function analyzeCarMileage(cars) {
  let totalMileage = cars.reduce((acc, car) => acc + car.mileage, 0);
  let averageMileage = totalMileage / cars.length;
  let highestMileageCar;
  let lowestMileageCar;
  cars.forEach((car) => {
    if (car.mileage > highestMileageCar?.mileage || !highestMileageCar) {
      highestMileageCar = car;
    }
    if (car.mileage < lowestMileageCar?.mileage || !lowestMileageCar) {
      lowestMileageCar = car;
    }
  });
  return {
    averageMileage: parseFloat(averageMileage.toFixed(2)),
    highestMileageCar,
    lowestMileageCar,
    totalMileage,
  };
}

module.exports = analyzeCarMileage;
