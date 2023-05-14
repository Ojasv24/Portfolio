import useIsVisible from "../utils/useFadeIn";

interface Props {
  name: string;
  projectDescription: string[];
  techIcons: string[];
  sourceIcons: string[];
  sourceLinks: string[];
  techIconsSize: string[];
  sourceIconsSize: string[];
  image: string;
  reverse?: boolean;
}

function Project(props: Props) {
  const { ref, isVisible } = useIsVisible(true);
  const hClass = !props.reverse
    ? isVisible
      ? " translate-x-0 opacity-100 "
      : " translate-x-full opacity-0 "
    : isVisible
    ? " -translate-x-0 opacity-100 "
    : " -translate-x-full opacity-0 ";

  const makeReverse = props.reverse ? "flex-row-reverse" : "flex-row";
  const leftPadding = props.reverse ? " pr-10 " : " pl-10 ";
  return (
    <div
      className={
        "flex justify-center rounded-4xl  p-10 px-4 max-lg:flex-col-reverse max-md:items-start max-sm:p-0 " +
        makeReverse
      }
      ref={ref as any}
    >
      <div className="flex flex-col flex-wrap justify-center">
        <div className="flex text-5xl font-bold text-white max-lg:mt-10 max-sm:text-2xl">
          {props.name}
        </div>
        <ul className=" list-disc p-3 pl-10 text-lg font-medium text-white max-sm:px-4 max-sm:py-2 max-sm:text-lg  ">
          {props.projectDescription.map((desc, _) => (
            <li>{desc}</li>
          ))}
        </ul>
        <div className="mx-2 h-0.5 bg-gray"></div>
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
        <div className="flex flex-wrap pt-4 ">
          {props.sourceIcons.map((svg, index) => (
            <a href={props.sourceLinks[index]}>
              <img
                key={index}
                className={
                  props.sourceIconsSize[index] +
                  " mb-2 mr-2 hover:cursor-pointer max-sm:h-6 max-sm:w-6"
                }
                src={svg}
                alt=""
              />
            </a>
          ))}
        </div>
      </div>

      <div
        className={
          " relative flex h-auto max-w-4xl transition duration-500 ease-in-out max-lg:p-0 " +
          hClass +
          leftPadding
        }
      >
        <div className="group relative max-w-7xl self-start">
          <div className="absolute -inset-0.5 animate-tilt rounded-4xl bg-gradient-to-r from-purple1 to-pink opacity-70 blur transition-all duration-500 group-hover:-inset-3 group-hover:opacity-100"></div>

          <img className="relative rounded-4xl shadow-lg " src={props.image} />
        </div>
      </div>
    </div>
  );
}

export default Project;
