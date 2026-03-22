interface Props {
  icon: string;
  link: string;
  label?: string;
}

const ContactButtons = (props: Props) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-purple1/40 hover:bg-white/[0.08] hover:shadow-[0_0_20px_rgba(156,18,220,0.2)]"
    >
      <img
        className="h-7 w-7 transition-transform duration-300 group-hover:scale-110 max-sm:h-6 max-sm:w-6"
        src={props.icon}
        alt={props.label || ""}
      />
    </a>
  );
};

export default ContactButtons;
