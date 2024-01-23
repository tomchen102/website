import {createBrowserRouter, Navigate} from "react-router-dom";
import App from "./layout/App.tsx";

const router = createBrowserRouter([{
    path: "/",
    element: <App/>,
    children: [{
        path: "/",
        element: <div>home</div>,
    }, {
        path: "/about",
        element: <div>about</div>,
    }],
}, {
    path: "*",
    element:<Navigate to={"/"}/>
}]);

export default router;