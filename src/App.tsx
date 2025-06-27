import { useState } from "react";
import Loader from "./components/Loader";
import Intro from "./components/Intro";
import TechStack from "./components/TechStack";

function App() {
    const [isLoaderTrue, setIsLoaderTrue] = useState<boolean>(true);

    return (
        <>
            {isLoaderTrue ? (
                <Loader setIsLoaderTrue={setIsLoaderTrue} />
            ) : (
                <>
                  <div className="flex ">
                      <Intro /> 
                    <TechStack />
                  </div>
                </>
            )}
        </>
    );
}

export default App;
