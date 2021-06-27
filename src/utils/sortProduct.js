const sortProducts = (products, sortBy) => {
  switch (sortBy) {
    case "h-t-l":
      return products.slice().sort((a, b) => b.price - a.price);

    case "l-t-h":
      return products.slice().sort((a, b) => a.price - b.price);

    default:
      return products;
  }
};

export default sortProducts;
