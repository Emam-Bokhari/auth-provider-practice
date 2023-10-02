import { createBrowserRouter } from "react-router-dom";
import Home from './../pages/Home';
import MainLayout from "../layout/MainLayout";
import Login from './../pages/Login/Login';
import SignUp from './../pages/SignUp/SignUp';
import Products from "../pages/Products/Products";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signUp",
                element: <SignUp />
            },
            {
                path: "/products",
                element: <Products />
            }
        ]
    }
])
export default Router