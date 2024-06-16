import AddToCart from "../../components/addToCart/AddToCart";
import "./watches.css";
import Selector from "../../components/selector/Selector";
import { useState } from "react";

const Watches = () => {
  const [color, setColor] = useState("Midnight Zen");
  const [image, setImage] = useState("Midnight Zen");
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <div className="main">
        <div className="product">
          <p className="text"> 🡠 See products details</p>
          <div className="main-img">
            <img
              src="src/assets/images/smartwatch/smartwatch_black.png"
              alt="smartwatch_black"
            />
          </div>
        </div>
        <div className="product-details">
          <div className="product-detail">
            <p className="titles bold">Fitbit Inspire 3</p>
            <p className="text">Health and Fitness Tracker</p>
            <p className="subtitles bold">99,95€</p>
            <hr />
          </div>
          <p className="text choose-color">Choose a color</p>
          <div className="choose-product">
            <div className="detail-container">
              <div
                style={{
                  borderWidth: color === "Midnight Zen" ? "3px" : "1px",
                }}
                onClick={() => {
                  setColor("Midnight Zen");
                  setImage("src/assets/images/smartwatch/smartwatch_black.png");
                }}
                className="smartwatch-box"
              >
                <div className="image-container">
                  <img
                    className="small-img"
                    src="src/assets/images/smartwatch/smartwatch_black.png"
                    alt="smartwatch_black"
                  />
                  <p className="text">Midnight Zen</p>
                </div>
              </div>
              <div
                style={{ borderWidth: color === "Lilac Bliss" ? "3px" : "1px" }}
                onClick={() => {
                  setColor("Lilac Bliss");
                  setImage("src/assets/images/smartwatch/smartwatch_pink.png");
                }}
                className="smartwatch-box"
              >
                <div className="image-container">
                  <img
                    className="small-img"
                    src="src/assets/images/smartwatch/smartwatch_pink.png"
                    alt="smartwatch_pink"
                  />
                  <p className="text">Lilac Bliss</p>
                </div>
              </div>
              <div
                style={{
                  borderWidth: color === "Morning Glow" ? "3px" : "1px",
                }}
                onClick={() => {
                  setColor("Morning Glow");
                  setImage(
                    "src/assets/images/smartwatch/smartwatch_yellow.png"
                  );
                }}
                className="smartwatch-box"
              >
                <div className="image-container">
                  <img
                    className="small-img"
                    src="src/assets/images/smartwatch/smartwatch_yellow.png"
                    alt="smartwatch_yellow"
                  />
                  <p className="text">Morning Glow</p>
                </div>
              </div>
            </div>
            <div className="buy">
              <p className="titles bold">99,95€</p>
              <div className="option-container">
                <Selector setQuantity={setQuantity} />
                <AddToCart
                  color={color}
                  quantity={quantity}
                  product={"watch"}
                  image={image}
                  price={99.95}
                />
              </div>
              <p className="delivery text-bold bold">
                <img
                  src="src/assets/images/icons/Delivery.svg"
                  alt="delivery"
                />
                Delivers 29 Apr to <span>08023</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watches;
