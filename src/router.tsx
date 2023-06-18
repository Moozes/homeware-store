import App from "App";
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <p>not found</p>,
        children: [
            {
                index: true,
                element: <p>default child of app</p>
            },
            {
                path: "2nd",
                element: <p>2nd child of app</p>
            },
        ]
    }
])

export default router;