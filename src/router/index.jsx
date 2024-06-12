import { createBrowserRouter } from "react-router-dom";
import Layout from "./src/layout/Layout.jsx";
import Earbuds from "../pages/earbuds.jsx";
import Watches from "../pages/watches.jsx";

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
