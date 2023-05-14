interface Props {
  name: string;
  id: string;
  size: string;
}

const NavBarButton = (props: Props) => {
  return (
    <a href={"#" + props.id} className=' p-1 rounded-2xl'>
      <div className="text-xl font-bold text-white max-sm:text-xl hover:text-purple1 ">
        {props.name}
      </div>
    </a>
  );
};

export default NavBarButton;
