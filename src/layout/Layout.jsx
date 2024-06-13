
import Navbar from "../components/navbar/Navbar";
import "./layout.css";
import Button from "../components/button/Button";
const Layout = () => {
  return (
    <div>
      <div >
        <Navbar />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;