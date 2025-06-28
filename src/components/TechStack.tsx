import TechProp from "./TechProp";

const techStackData = [
  { heading: "TailwindCSS", color: "#38BDF8" },
  { heading: "JavaScript", color: "#F7DF1E" },
  { heading: "TypeScript", color: "#3178C6" },
  { heading: "ReactJS", color: "#61DAFB" },
  { heading: "HTML", color: "#E34F26" },
];

function TechStack() {
  return (
    <div className="rounded-2xl h-[30rem] w-[28rem] p-5  m-5 text-[2rem] flex flex-col items-center justify-center shadow-2xl">
      {techStackData.map((tech, index) => (
        <TechProp key={index} heading={tech.heading} color={tech.color} />
      ))}
    </div>
  );
}

export default TechStack;
