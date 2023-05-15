interface Props {
  title: string;
}

const Heading = (props: Props) => {
  return (
    <div className="bg-gradient-to-br from-purple3 to-purple1 bg-clip-text pb-4 text-center text-6xl font-bold text-transparent max-sm:text-3xl">
      {props.title}
    </div>
  );
};

export default Heading;
