import './navbar.css'

const Navbar = () => {
  return (
    <>
      <nav id="navbar" class="nav">
        <div class="nav-left">
          <img
            class="logo"
            src="src\assets\images\google-logo.png"
            alt="Google"
          />
          <ul class="nav-list">
            <li>Phones</li>
            <li class="active-item">Earbuds</li>
            <li>
              <a class="smartwatch" href="./smartwatch.html">
                Watches
              </a>
            </li>
            <li>Smart Home</li>
            <li>Accesories</li>
            <li>Subscriptions</li>
          </ul>
        </div>
        <div class="nav-icons">
          <img src=".src\assets\images/icons/Search.svg" alt="Search" />
          <img src=".src\assets\images/icons/Help.svg" alt="Help" />
          <img src=".src\assets\images/icons/Cart.svg" alt="Cart" />
          <img src=".src\assets\images/icons/Avatar.svg" alt="Avatar" />
        </div>
      </nav>
    </>
  );
}

export default Navbar
