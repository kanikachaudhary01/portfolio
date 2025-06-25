import { useState } from "react"
import Loader from "./components/Loader"
import Intro from "./components/Intro"

function App() {
  const [isLoaderTrue,setIsLoaderTrue]=useState<boolean>(true)
  
  return (
    <>
   {isLoaderTrue ?  <Loader setIsLoaderTrue={setIsLoaderTrue}/> : <Intro/>}
    
    </>
  )
}

export default App
