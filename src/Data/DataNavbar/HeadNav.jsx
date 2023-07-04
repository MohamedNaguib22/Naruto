import "./DataNav.css";
const HeadNav = (props) => {
  return (
    <div className="flex gap-2 items-center cursor-pointer">
      <span className="text-blue-600">{props.icon}</span>
      <div className="font-medium hover:text-blue-600 transition-all duration-200">{props.head}</div>
    </div>
  );
};

export default HeadNav;
