import coptright from "./assets/copyright.svg";

const CopyRight = () => {
  return (
    <div className="flex justify-center gap-x-2 bg-Background p-2">
      <img className="h-6 w-6" src={coptright} alt="" />
      <div className="font-bold text-white ">Ojasv Rathore</div>
    </div>
  );
};

export default CopyRight;
