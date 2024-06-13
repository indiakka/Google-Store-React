import AddToCart from "../../components/addToCart/AddToCart";
import "./earbuds.css";

const Earbuds = () => {
  return (
    <>
      <div class="header-bottom">
        <p class="details">🡨 See product details</p>
      </div>
      <div className="container-earbuds">
        <section class="images-section">
          <div class="samples">
            <input
              id="model-earbud"
              type="image"
              src="src/assets/images/earbuds/earbuds_01.png"
            />
            <input
              id="model-earbud"
              type="image"
              src="src/assets/images/earbuds/earbuds_02.png"
            />
            <input
              id="model-earbud"
              type="image"
              src="src/assets/images/earbuds/earbuds_03.png"
            />
            <input
              id="model-earbud"
              type="image"
              src="src/assets/images/earbuds/earbuds_04.png"
            />
          </div>
        </section>
        <img
          class="main-banner"
          src="src/assets/images/earbuds/earbuds_01.png"
          alt="Earbuds"
        />
        <section class="main-aside">
          <article id="description">
            <h1>Google Pixel Buds Pro</h1>
            <span>Music & Sound</span>
            <p class="price">229 €</p>
            <hr />
          </article>
          <article id="choose">
            <span>Choose a color</span>
            <div class="colors">
              <input id="blue" type="text" />
              <input id="white" type="text" />
              <input id="black" type="text" />
              <input id="grey" type="text" />
              <input id="green" type="text" />
              <input id="orange" type="text" />
            </div>
          </article>

          <AddToCart />
        </section>
      </div>
    </>
  );
};

export default Earbuds;
