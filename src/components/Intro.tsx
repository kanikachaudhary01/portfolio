import InntroMap from "./InntroMap";
import dino from "../assets/dino.png";

function Intro() {
    return (
        <div className="rounded-2xl h-[30rem] w-[50rem] m-5 shadow-[0px_0px_5px_5px]  shadow-[#57C785] flex flex-1/2 hover:shadow-[0px_0px_8px_8px] transition duration-300">
            <div className=" mx-10 my-10 flex flex-col mt-40 gap-5 ">
                {InntroMap.map((intro, index) => (
                    <a
                        className="bg-gradient-to-r from-[#2A7B9B] to-[#57C785] w-10 h-10  flex items-center p-2 rounded-full"
                        key={index}
                        href={intro.url}
                        target="_blank"
                    >
                        <div>{intro.icon}</div>
                    </a>
                ))}
            </div>
            <div className="mt-30 ">
                <h1 className="text-5xl ">
                    Hi, I'm{" "}
                    <span className="bg-gradient-to-r from-[#2A7B9B] to-[#57C785] bg-clip-text text-transparent">
                        Kanika
                    </span>
                </h1>
                <h3 className="text-2xl mt-4">Web Developer</h3>
                <p className="mt-10 text-gray-700">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Veritatis, obcaecati omnis. Adipisci, error illum! Possimus
                    ducimus eos omnis facere neque quae fugiat sit ipsa
                    voluptas, suscipit vitae? Magni, commodi tempore!
                </p>
            </div>
            <div className="mx-10 my-10 mt-20">
                <img className="rounded-full " src={dino} alt="" />
            </div>
        </div>
    );
}

export default Intro;
