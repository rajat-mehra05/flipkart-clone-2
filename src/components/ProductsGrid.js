import ProductCard from "./ProductCard";

const ProductsGrid = ({ products }) => {
  return (
    <div className="products-grid">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductsGrid;
