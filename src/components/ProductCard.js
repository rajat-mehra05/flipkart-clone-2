const ProductCard = ({ product }) => {
  return (
    <>
      <div className="card-container">
        <div className="card-img-container">
          <img src={product.img} alt={product.name} width="200px" />
        </div>
        <div className="card-description">
          <p
            className="brand-name"
            style={{ color: "black", fontWeight: "600" }}
          >
            {" "}
            {product.brand}{" "}
          </p>
          <p
            className="product-name"
            style={{ color: "grey", fontWeight: "450" }}
          >
            {" "}
            {product.name}{" "}
          </p>
          <p style={{ color: "green", fontWeight: "550" }}>
            {" "}
            ₹ {product.price}{" "}
          </p>
          <p>
            {" "}
            <strong> Sizes: </strong> {product.size.join(" , ")}{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
