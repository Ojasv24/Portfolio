import gmail from "./assets//gmail_purple_svg.svg";
import linkdin from "./assets/linkdind_purple_svg.svg";
import github from "./assets/gitbhut_svg_purple.svg";
import twitter from "./assets/twitter_purple_svg.svg";
import ContactButtons from "./components/contact_buttons";
import Heading from "./components/heading";

const ContactPage = () => {
  return (
    <div className=" bg-black px-20 py-10 max-sm:p-2">
      <div className="flex flex-row justify-center max-lg:flex-col">
        <Heading title="Contact Me" />
        <div className="ml-2  w-1 rounded-2xl bg-white max-lg:my-2 max-lg:h-1 max-lg:w-full"></div>
        <div className=" ml-8 flex w-max items-center gap-x-4 rounded-4xl border-4 border-gray2 bg-gray2 p-2 transition-all duration-500 hover:border-purple1 max-lg:ml-0 max-lg:w-max ">
          <img className="h-10 w-10 max-sm:h-8 max-sm:w-8" src={gmail} alt="" />
          <div className="text-4xl font-extrabold text-white max-md:text-3xl max-sm:text-base ">
            ojasv.rathore@gmail.com
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-x-2 p-4 max-lg:justify-start">
        <ContactButtons icon={linkdin} link="" />
        <ContactButtons icon={github} link="" />
        <ContactButtons icon={twitter} link="" />
      </div>
    </div>
  );
};

export default ContactPage;
