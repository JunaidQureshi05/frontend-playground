const isValidIPv4 = (IpAdress) => {
  let octates = IpAdress.split(".");
  if (octates.length !== 4) return false;
  return octates.every(
    (o) =>
      parseInt(o) >= 0 && parseInt(o) <= 255 && parseInt(o).toString() === o
  );
};

module.exports = isValidIPv4;
