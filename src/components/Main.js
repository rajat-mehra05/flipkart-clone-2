import React, { useState } from "react";
import Inputs from "./Inputs";
import sortProducts from "../utils/sortProduct";
import filterProducts from "../utils/filterProducts";
import products from "../data/products.json";
import ProductsGrid from "./ProductsGrid";

const MainContainer = () => {
  const [sortBy, setSortBy] = useState(null);
  const [filterBy, setFilterBy] = useState(null);

  const sortedProducts = sortProducts(products, sortBy);
  const filteredProducts = filterProducts(sortedProducts, filterBy);

  return (
    <>
      <div className="main">
        <Inputs
          sortBy={sortBy}
          setSortBy={setSortBy}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
        />
        <ProductsGrid products={filteredProducts} />
      </div>
    </>
  );
};

export default MainContainer;
