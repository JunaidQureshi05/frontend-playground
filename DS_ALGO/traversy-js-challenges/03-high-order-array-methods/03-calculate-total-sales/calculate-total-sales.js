function calculateTotalSalesWithTax(products, taxRate) {
  let total = products.reduce(
    (acc, current) => current.price * current.quantity + acc,
    0
  );
  let grandTotal = total + (total * taxRate) / 100;
  return grandTotal;
}

module.exports = calculateTotalSalesWithTax;
