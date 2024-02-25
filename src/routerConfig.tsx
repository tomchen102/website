import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "@/layout/App";
import { Home } from "@/page/home/Home";

const router = createBrowserRouter([{
    path: "/",
    element: <App/>,
    children: [{
        path: "/",
        element: <Home/>,
    }, {
        path: "/about",
        element: <div>about</div>,
    }],
}, {
    path: "*",
    element: <Navigate to={"/"}/>
}]);

export default router;