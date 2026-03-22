import Heading from "./components/heading";

const AboutME = () => {
  return (
    <div className="flex flex-col items-center bg-black p-20 max-md:px-10 max-sm:content-start max-sm:items-start max-sm:px-2">
      <Heading title="About ME" />
      <div className="text-xl text-white max-sm:text-base">
        I'm Ojasv Rathore, a Backend Engineer at Swiggy, where I architect
        high-throughput delivery logistics, ETA prediction engines, and SLA
        compliance systems at scale. From designing real-time Redis caching
        pipelines to building custom order transformers and microservice
        architectures, my work directly impacts millions of daily orders.
        Awarded twice at org-level for compliance and driver experience impact,
        I thrive on solving complex distributed systems problems. Beyond
        backend, I enjoy building functional and visually appealing apps with
        Flutter, React, and Angular.
      </div>
    </div>
  );
};

export default AboutME;
