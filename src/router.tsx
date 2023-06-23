import App from "App";
import About from "pages/About/About";
import Home from "pages/Home/Home";
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
        ]
    }
])

export default router;