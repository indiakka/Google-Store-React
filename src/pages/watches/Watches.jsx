import AddToCart from "../../components/addToCart/AddToCart";
import "./watches.css";

const Watches = () => {
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
              <div className="smartwatch-box">
                <div className="image-container">
                  <img
                    className="small-img"
                    src="src/assets/images/smartwatch/smartwatch_black.png"
                    alt="smartwatch_black"
                  />
                  <p className="text">Midnight Zen</p>
                </div>
              </div>
              <div className="smartwatch-box">
                <div className="image-container">
                  <img
                    className="small-img"
                    src="src/assets/images/smartwatch/smartwatch_pink.png"
                    alt="smartwatch_pink"
                  />
                  <p className="text">Lilac Bliss</p>
                </div>
              </div>
              <div className="smartwatch-box">
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
            <AddToCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watches;
