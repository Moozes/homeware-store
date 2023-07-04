import App from "App";
import About from "pages/About/About";
import AllProducts from "pages/AllProducts/AllProducts";
import Home from "pages/Home/Home";
import ShoppingCart from "pages/ShoppingCart/ShoppingCart";
import SingleProduct from "pages/SingleProduct/SingleProduct";
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <p>not found</p>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "products",
                element: <AllProducts/>
            },
            {
                path: "products/:id",
                element: <SingleProduct/>
            },
            {
                path: "shopping-cart",
                element: <ShoppingCart/>
            },
        ]
    }
])

export default router;