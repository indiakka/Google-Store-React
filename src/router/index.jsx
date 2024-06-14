import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout.jsx";
import Watches from "../pages/watches/Watches.jsx";
import Earbuds from "../pages/earbuds/Earbuds.jsx";
import Cart from '../pages/cart/Cart.jsx'
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Earbuds />,
      },
      {
        path: "/watches",
        element: <Watches />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
