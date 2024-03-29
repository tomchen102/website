import Button from "@/components/ui/button/button.tsx";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();

    return <div>
        home
        <Button variant="outline"
                className="rounded-full"
                onClick={() => {
                    navigate("/about");
                }}
        >
            About
        </Button>
    </div>;
};