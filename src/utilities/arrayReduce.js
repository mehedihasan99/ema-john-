const arrayReduce = (arr, key) => {
  const totalPrice = arr.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.key;
  }, 0);
  return totalPrice;
};

export { arrayReduce };
