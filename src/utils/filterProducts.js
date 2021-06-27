const filterProducts = (products, filterBy) => {
  switch (filterBy) {
    case "s":
      return products.filter((p) => p.size.includes("S"));
    case "m":
      return products.filter((p) => p.size.includes("M"));
    case "l":
      return products.filter((p) => p.size.includes("L"));

    case "xl":
      return products.filter((p) => p.size.includes("XL"));
    default:
      return products;
  }
};

export default filterProducts;
