import {
  createBrowserRouter,
} from "react-router";
import MainLayout from "../Layout/MainLayout";
import Register from "../Pages/Home/Authentication/Register";
import Login from "../Pages/Home/Authentication/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
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