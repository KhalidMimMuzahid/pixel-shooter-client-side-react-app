import { createBrowserRouter } from "react-router-dom";
import AddService from "../component/AddService/AddService";
import Blogs from "../component/Blogs/Blogs";
import Home from "../component/Home/Home";
import MyReviews from "../component/MyReviews/MyReviews";
import ServiceDetails from "../component/Services/ServiceDetails";
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
      {
        path: "/",
        loader: async () => fetch("http://localhost:5000/services"),
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/myreviews",
        element: <MyReviews />,
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
        loader: async () => fetch("http://localhost:5000/allservices"),
        element: <Services />,
      },
      {
        path: "/addservice",
        loader: async () => fetch("http://localhost:5000/allservices"),
        element: <AddService />,
      },
      {
        path: "servicedetails/:id",
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/servicedetails/${params.id}`),
        element: <ServiceDetails />,
      },
    ],
  },
]);
