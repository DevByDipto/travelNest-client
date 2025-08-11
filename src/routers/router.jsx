import {
  createBrowserRouter,
} from "react-router";
import MainLayout from "../Layout/MainLayout";
import Register from "../Pages/Authentication/Register";
import Login from "../Pages/Authentication/Login";
import Home from "../Pages/Home/Home";
import AllPackages from "../Pages/allPackages/AllPackages";
import ErrorPage from "../Components/ErrorPage";
import AddPackage from "../Pages/addPackage/AddPackage";
import PrivateRoute from '../routers/PrivateRoute'
import ManageMyPackages from "../Pages/manageMyPackages/ManageMyPackages";
import UpdateMyPackage from "../Pages/manageMyPackages/UpdateMyPackage ";
import AddBooking from "../Pages/booking/AddBooking";
import MyBookings from "../Pages/booking/MyBookings";
import About from "../Pages/about/About";
import TermsAndConditions from "../Pages/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
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
    {  path:'about-us',
      element: <About></About>
    },
    {  path:'add-package',
      element: <PrivateRoute><AddPackage></AddPackage></PrivateRoute>
    },
    {  path:'manage-my-packages',
      element: <PrivateRoute><ManageMyPackages></ManageMyPackages></PrivateRoute>
    },
    {  path:'update-my-Package/:id',
      element: <PrivateRoute><UpdateMyPackage></UpdateMyPackage></PrivateRoute>
    },
    {  path:'add-booking/:id',
      element: <PrivateRoute><AddBooking></AddBooking></PrivateRoute>
    },
    {  path:'my-bookings',
      element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
    },
    {  path:'register',
      element: <Register></Register>
    },
    {  path:'login',
      element: <Login></Login>
    },
    {  path:'termsAndConditions',
      element: <TermsAndConditions></TermsAndConditions>
    },
    {  path:'privacyPolicy',
      element: <PrivacyPolicy></PrivacyPolicy>
    },

    ]
  },
]);

export default router