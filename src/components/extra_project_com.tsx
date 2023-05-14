interface Props {
  name: string;
  projectDescription: string[];
  techIcons: string[];
  sourceIcons: string[];
  sourceLinks: string[];
  techIconsSize: string[];
  sourceIconsSize: string[];
}

function ExtraProject(props: Props) {
  return (
    <div className=" flex max-w-md flex-col rounded-2xl border-2 border-purple3 bg-gray2 p-4  shadow-xl transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">
      <div className="flex justify-between ">
        <div className="text-3xl font-bold text-white max-sm:text-xl">
          {props.name}
        </div>
        <div className="flex flex-wrap self-center  ">
          {props.sourceIcons.map((svg, index) => (
            <a href={props.sourceLinks[index]}>
              <img
                key={index}
                className={
                  props.sourceIconsSize[index] +
                  " mb-2 mr-2 max-sm:h-6 max-sm:w-6"
                }
                src={svg}
                alt=""
              />
            </a>
          ))}
        </div>
      </div>
      <div className="text-xl text-white max-sm:text-base">
        {props.projectDescription[0]}
      </div>
      <div className="flex flex-wrap pt-4 ">
        {props.techIcons.map((svg, index) => (
          <img
            key={index}
            className={
              props.techIconsSize[index] + " mb-2 mr-2 max-sm:h-6 max-sm:w-6"
            }
            src={svg}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}

export default ExtraProject;
