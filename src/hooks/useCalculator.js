export const useCalculator = () => {
  const subtotal = (quantity, price) => {
    return Math.floor(quantity * price);
  };

  const totalPriceCart = (array) => {
    const subtotals = array.map((product) => {
      return subtotal(product.quantity, product.price);
    });
    const total = subtotals.reduce((total, subtotals) => total + subtotals, 0);
    return total;
  }; return {subtotal, totalPriceCart}
};
