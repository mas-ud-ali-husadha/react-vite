import { NavLink } from "react-router-dom";

const HorizontalMenuDropdownItem = ({
  text,
  path,
}: {
  text: string;
  path: string;
}) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => (isActive ? "font-bold " : "font-normal")}
    >
      {text}
    </NavLink>
  );
};

export default HorizontalMenuDropdownItem;
