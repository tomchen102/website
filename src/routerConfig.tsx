import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "@/layout/App.tsx";
import { Home } from "@/page/home/Home.tsx";

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
    element:<Navigate to={"/"}/>
}]);

export default router;