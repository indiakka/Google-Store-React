import Earbuds from "../pages/Earbuds";
import Watches from "../pages/Watches";
import { createBrowserRouter } from "react-router-dom";
export const router = createBrowserRouter([
  {
    // path: "/",
    // element: <Layout />,
    // children: [
    //   {
    path: "/",
    element: <Earbuds />,
    //   },
    // ],
  },
  {
    path: "/",
    element: <Watches />,
  },
]);
