interface Props {
  icon: string;
  link: string;
}

const ContactButtons = (props: Props) => {
  return (
    <a className="rounded-full border-2 border-gray2 bg-gray2 p-3 transition-all duration-500 hover:border-purple1">
      <img className="h-8 w-8 max-sm:h-6 max-sm:w-6" src={props.icon} alt="" />
    </a>
  );
};

export default ContactButtons;
