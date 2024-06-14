import Button from "../../components/button/Button";
import "./cart.css";

const Cart = () => {
  return (
    <>
      <div>
        <h1 className="cart">Cart</h1>
        <h2 className="cart-items">(3 items)</h2>
        <div className="cart-container">
          <div className="detail-container">
            <div className="product-cart">
              <img
                src="src/assets/images/earbuds/earbuds_01.png"
                alt="earbuds"
              />
              <div className="img-detail">
                <p>Product detail</p>
                <div className="select-container">
                  <p>Cant:</p>
                  <select className="select-cart">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="2">3</option>
                  </select>
                </div>
              </div>
              <div className="product-price">
                <div className="products">
                  <h4> €</h4>
                  <p className="remove">Remove</p>
                </div>
              </div>
            </div>
            <p class="delivery text-bold bold">
              <img src="src/assets/images/icons/Delivery.svg" alt="delivery" />
              Delivers 29 Apr to <span>08023</span>
            </p>
            <hr />
          </div>
          <div className="summary-container">
            <div className="summary">
              <h3 className="receipt-title">Order Summary</h3>
              <div className="totals">
                <div className="receipt">
                  <h4>Subtotal</h4>
                  <h4>Shipping costs</h4>
                  <h4>estimated VAT</h4>
                  <h4>Total estimated</h4>
                </div>
                <div className="prices">
                  <h5>€</h5>
                  <h5>€</h5>
                  <h5>Including</h5>
                  <h5>€</h5>
                  <p className="payment">
                    or € /month with 3 monthly istallments *
                  </p>
                </div>
              </div>
              <hr className="hr-summary" />
            </div>
            <Button buttonText="Complete the purchase" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
