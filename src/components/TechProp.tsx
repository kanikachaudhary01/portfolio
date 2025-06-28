type TechPropProps = {
  heading: string;
  color: string;
};

function TechProp({ heading, color }: TechPropProps) {
  return (
    <div
      className="flex items-center gap-10 py-4 px-4 justify-center  rounded-xl transition-all duration-300 hover:scale-105 w-full"
      style={{ boxShadow: `0px 0px 5px 5px transparent` }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0px 0px 10px 5px ${color}`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `0px 0px 5px 5px transparent`;
      }}
    >
      <div className="text-4xl">{heading}</div>
    </div>
  );
}

export default TechProp;
