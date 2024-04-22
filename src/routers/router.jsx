
// 
// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
//   RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../components/SingleBook";
import Navbar from "../components/Navbar";
// import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello </div>,
    element: <App/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:"/shop",
            element:<Shop/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/blog",
            element:<Blog/>
        },
        {
            path:"/singleBook",
            element:<SingleBook/>
        },
  
    ]
  },
]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );
export default router;