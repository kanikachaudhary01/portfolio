import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const languages = ["Hello", "Hola", "Bonjour", "  你好", "こんにちは"];

const Loader = ({setIsLoaderTrue}:{
     setIsLoaderTrue: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if(index >= languages.length )setIsLoaderTrue(false)
       const timer = setTimeout(() => {
            setIndex((curr) => curr + 1);
        }, 1500);
        return()=>clearTimeout(timer)
    }, [index]);
    return (
        <>
        <div className="flex justify-center items-center h-screen text-[8rem] font-semibold">
            <AnimatePresence mode="wait">
                <motion.div 
                key={languages[index]}
                    initial={{
                        y: 20,
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                    }}
                    exit={{
                        y:-20,
                        opacity:0
                    }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                    }}
                    
                >
                    {languages[index]}
                </motion.div>
            </AnimatePresence>
        </div>
            
        </>
    );
};

export default Loader;
