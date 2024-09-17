import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav id="navbar" className="nav">
        <div class="hamburger">☰</div>
        <div className="nav-left">
          <img
            className="logo"
            src="\assets\images\google-logo.png"
            alt="Google"
          />
          <ul className="nav-list">
            <li>Phones</li>
            <li>
              <NavLink to="/" active className="earbuds">
                Earbuds
              </NavLink>
            </li>
            <li>
              <NavLink to="/watches" active className="smartwatch">
                Watches
              </NavLink>
            </li>
            <li>Smart Home</li>
            <li>Accesories</li>
            <li>Subscriptions</li>
          </ul>
        </div>
        <div className="nav-icons">
          <img src="./assets/images/icons/Search.svg" alt="Search" />
          <img src="./assets/images/icons/Help.svg" alt="Help" />
          <NavLink to="/cart">
            <img src="./assets/images/icons/Cart.svg" alt="Cart" />
          </NavLink>
          <img src="./assets/images/icons/Avatar.svg" alt="Avatar" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
