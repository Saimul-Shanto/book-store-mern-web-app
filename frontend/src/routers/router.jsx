import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path: "/orders",
            element:<div>orders</div>
        },
        {
            path:"/about",
            element:<div>about</div>
        }
      ]
    },
  ]);

export default router;