import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Management from "../pages/Management/Management";
import AboutUs from "../pages/AboutUs/AboutUs";
import AddProduct from "../pages/AddProduct/AddProduct";
import Update from "../pages/Update";
import Cart from "../pages/Cart/Cart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/products",
                element: <Products/>
            },
            {
                path: "/product/:id",
                element: <ProductDetails/>
            },
            {
                path: "/manage",
                element: <Management/>
            },
            {
                path: "/about",
                element: <AboutUs/>
            },
            {
                path: "add",
                element: <AddProduct/>
            },
            {
                path:"update/:id",
                element: <Update/>
            },
            {
                path: "/cart",
                element: <Cart/>
            }
        ]
    }
])

export default router;