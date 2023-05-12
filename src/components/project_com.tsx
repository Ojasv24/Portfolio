import test_image from "../assets/test_image.png";
import useFadeIn from "../utils/useFadeIn";

interface Props {
  name: string;
  techIcons: string[];
  sourceIcons: string[];
  sizes: string[];
}

function Project(props: Props) {
  const { ref, isVisible } = useFadeIn();
  const hClass = isVisible ? "translate-x-0" : "translate-x-full";
  return (
    <div
      className="flex justify-center rounded-4xl  p-10 px-4"
      ref={ref as any}
    >
      <div className="flex flex-col flex-wrap    justify-center">
        <div className="flex text-5xl font-bold text-white"> Project Name</div>
        <div className="p-3 text-lg text-white">
          {" "}
          Project Descriptopn askdha asjkdas as das das dasd asasdkm s ads
        </div>
        <div className="mx-2 h-0.5 bg-gray"></div>
        <div className="flex flex-wrap pt-4 ">
          {props.techIcons.map((svg, index) => (
            <img
              key={index}
              className={props.sizes[index] + " mb-2 mr-2"}
              src={svg}
              alt=""
            />
          ))}
        </div>
        <div className="flex flex-wrap pt-4 ">
          {props.sourceIcons.map((svg, index) => (
            <button>
              <img
                key={index}
                className={props.sizes[index] + " mb-2 mr-2"}
                src={svg}
                alt=""
              />
            </button>
          ))}
        </div>
      </div>

      <div
        className={
          "h-auto w-208 object-scale-down pl-10 transition duration-500 ease-in-out " +
          hClass
        }
      >
        <img
          className="h-auto w-auto rounded-4xl border-none align-middle shadow-lg"
          src={test_image}
        />
      </div>
    </div>
  );
}

export default Project;
