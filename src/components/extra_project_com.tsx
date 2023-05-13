interface Props {
  name: string;
  projectDescription: string[];
  techIcons: string[];
  sourceIcons: string[];
  sizes: string[];
  reverse?: boolean;
}

function ExtraProject(props: Props) {
  return (
    <div className=" flex max-w-xs flex-col rounded-2xl border-2 border-purple3 bg-gray2 p-4  shadow-xl transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">
      <div className="flex justify-between ">
        <div className="text-3xl font-bold text-white max-sm:text-xl">
          Project Name
        </div>
        <div className="flex flex-wrap self-center  ">
          {props.sourceIcons.map((svg, index) => (
            <button>
              <img
                key={index}
                className={
                  props.sizes[index] + " mb-2 mr-2 max-sm:h-6 max-sm:w-6"
                }
                src={svg}
                alt=""
              />
            </button>
          ))}
        </div>
      </div>
      <div className="text-xl text-white max-sm:text-base">
        Descriptionssd sad asd sd asis sjdhs ds k dsk aks djkahsjks dnajksnd
        ajksd kasnd kasns dnckls ndjfn sdnnknd aklknak nfnasndskldnufofh
        iqwlwndna
      </div>
      <div className="flex flex-wrap pt-4 ">
        {props.techIcons.map((svg, index) => (
          <img
            key={index}
            className={props.sizes[index] + " mb-2 mr-2 max-sm:h-6 max-sm:w-6"}
            src={svg}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}

export default ExtraProject;
