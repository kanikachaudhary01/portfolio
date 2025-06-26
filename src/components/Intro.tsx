
import IntroMap from "./IntroMap";
import kanika from '/src/assets/kanika.jpeg';

function Intro() {
    return (
        <div className="rounded-2xl h-[30rem] w-[50rem] m-5 shadow-lg flex flex-1/2">
          <div className=" mx-5 my-10 flex flex-col gap-5">
  {IntroMap.map((intro, index) => (
    <a
      key={index}
      href={intro.url}
      target="_blank"
    >
      <div>{intro.icon}</div>
    </a>
  ))}
</div>
<div className="mt-30 ">
  <h1 className="text-5xl ">Hi, I'm <span  className="text-[#2A7B9B] to-[#57C785]">Kanika</span></h1>
  <h3 className="text-2xl mt-4">Web Developer</h3>
  <p className="mt-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, obcaecati omnis. Adipisci, error illum! Possimus ducimus eos omnis facere neque quae fugiat sit ipsa voluptas, suscipit vitae? Magni, commodi tempore!</p>
</div>
<div className="mx-10 my-10">
  <img className="rounded-full " src={kanika} alt="" />
</div>
        </div>
    );
}

export default Intro;
