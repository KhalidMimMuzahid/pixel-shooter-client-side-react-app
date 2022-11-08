import { createBrowserRouter } from "react-router-dom";
import Blogs from "../component/Blogs/Blogs";
import Home from "../component/Home/Home";
import Services from "../component/Services/Services";
import SignUp from "../component/SignUp/SignUp";
import SignIn from "../component/SingnIn/SignIn";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <h1>this is error page</h1>,
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/about",
        element: <div>about</div>,
      },
    ],
  },
]);
