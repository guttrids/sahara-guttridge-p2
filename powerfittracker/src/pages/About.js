
import DSAList from "./DSAList";

export default function App() {
    return (
        <>
            <div className="flex flex-col justify-center items-center mt-4">
                <h1 className="text-emerald-500 font-bold text-3xl">
                    Weekly Workout Goals
                </h1>
                
                <DSAList />
            </div>
        </>
    );
}