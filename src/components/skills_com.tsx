interface Props {
  name: string;
  icon: string;
  size: string;
}

function Skills(props: Props) {
  const size = props.size;
  const className = size + "self-end";
  return (
    <div className="flex flex-wrap justify-center rounded-4xl bg-gray2 p-2 px-4">
      <div className="h-12 w-12 rounded-full bg-white2 p-1 max-sm:h-10 max-sm:w-10">
        <img className={className} src={props.icon} alt="" />
      </div>
      <div className="ml-3 self-center text-3xl font-bold text-white text-center max-sm:text-base">
        {props.name}
      </div>
    </div>
  );
}

export default Skills;
