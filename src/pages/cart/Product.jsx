import "./product.css";

const Product = ({ color, quantity, product, image, price }) => {
  return (
    <div>
      <div className="product-cart">
        <img src={image} alt={product} />
        <div className="img-detail">
          <p>
            {product} - {color}
          </p>
          <div className="select-container">
            <p>Quantity: {quantity}</p>
          </div>
        </div>
        <div className="product-price">
          <div className="products">
            <h4>{price} €</h4>
            <p className="remove">Remove</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
