import { createBrowserRouter } from "react-router-dom";
import AddService from "../component/AddService/AddService";
import Blogs from "../component/Blogs/Blogs";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import Home from "../component/Home/Home";
import MyReviews from "../component/MyReviews/MyReviews";
import ServiceDetails from "../component/Services/ServiceDetails";
import Services from "../component/Services/Services";
import SignUp from "../component/SignUp/SignUp";
import SignIn from "../component/SingnIn/SignIn";
import Main from "../Layout/Main";
import PrivetRoutes from "./PrivetRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: "/",
        loader: async () =>
          fetch(
            "https://pixel-shooter-server-side-khalidmimmuzahid.vercel.app/services"
          ),
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
        loader: async () =>
          fetch(
            "https://pixel-shooter-server-side-khalidmimmuzahid.vercel.app/allservices"
          ),
        element: <Services />,
      },
      {
        path: "/addservice",
        loader: async () =>
          fetch(
            "https://pixel-shooter-server-side-khalidmimmuzahid.vercel.app/allservices"
          ),
        element: (
          <PrivetRoutes>
            <AddService />
          </PrivetRoutes>
        ),
      },
      {
        path: "servicedetails/:id",
        loader: async ({ params }) =>
          fetch(
            `https://pixel-shooter-server-side-khalidmimmuzahid.vercel.app/servicedetails/${params.id}`
          ),
        element: <ServiceDetails />,
      },
    ],
  },
]);
