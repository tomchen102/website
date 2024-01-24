import {Button} from "@/components/ui/button.tsx";

export const Home = () => {
    const buttonWords: string = "click me";
    return <div>
        home
        <Button variant="outline" className="rounded-full">
            {buttonWords}
        </Button>
    </div>;
};