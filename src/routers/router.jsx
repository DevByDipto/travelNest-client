import {
  createBrowserRouter,
} from "react-router";
import MainLayout from "../Layout/MainLayout";
import Register from "../Pages/Authentication/Register";
import Login from "../Pages/Authentication/Login";
import Home from "../Pages/Home/Home";
import AllPackages from "../Pages/allPackages/AllPackages";
import ErrorPage from "../Components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
    {  path:'/',
      element: <Home></Home>
    },
    {  path:'all-packages',
      element: <AllPackages></AllPackages>
    },
    {  path:'register',
      element: <Register></Register>
    },
    {  path:'login',
      element: <Login></Login>
    },

    ]
  },
]);

export default router