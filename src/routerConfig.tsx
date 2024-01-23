import {createBrowserRouter, Navigate} from "react-router-dom";
import App from "@/layout/App.tsx";
import {Button} from "@/components/ui/button.tsx";

const Home = () => {
    const buttonWords: string = "click me";
    return <div>
        home
        <Button variant="outline" className="rounded-full">
            {buttonWords}
        </Button>
    </div>;
};

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