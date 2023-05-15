import gmail from "./assets//gmail_purple_svg.svg";
import linkdin from "./assets/linkdind_purple_svg.svg";
import github from "./assets/gitbhut_svg_purple.svg";
import twitter from "./assets/twitter_purple_svg.svg";
import ContactButtons from "./components/contact_buttons";
import Heading from "./components/heading";

const ContactPage = () => {
  return (
    <div className=" bg-black px-20 py-10 max-sm:p-2 ">
      <div className="flex flex-row justify-center max-lg:flex-col">
        <div className="self-start">
          <Heading title="Contact Me" />
        </div>
        <div className="mx-6 w-1 rounded-2xl bg-white max-lg:my-2 max-lg:h-1 max-lg:w-full max-sm:mx-0"></div>
        <div className="flex flex-col justify-start">
          <a
            href="mailto:ojasv.rathore@gmail.com"
            className="  flex w-max items-center gap-x-4 self-center rounded-4xl border-4 border-gray2 bg-gray2 p-2 transition-all duration-500 hover:border-purple1 max-lg:ml-0 max-lg:w-max "
          >
            <img
              className="h-10 w-10 max-sm:h-8 max-sm:w-8"
              src={gmail}
              alt=""
            />
            <div className="text-4xl font-extrabold  text-white max-md:text-3xl max-sm:text-base ">
              ojasv.rathore@gmail.com
            </div>
          </a>
          <div className="flex flex-wrap  gap-x-2 py-4 max-lg:m-0 max-lg:justify-center">
            <ContactButtons
              icon={linkdin}
              link="https://www.linkedin.com/in/ojasv-rathore-4486781b1/"
            />
            <ContactButtons icon={github} link="https://github.com/Ojasv24/" />
            <ContactButtons icon={twitter} link="https://twitter.com/home" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
