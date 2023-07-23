import useActive from "@/hooks/useActive";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

interface HorizontalMenuItemType {
  id: string;
  path: string;
  text: string;
}

const HorizontalMenuItem = ({ id, path, text }: HorizontalMenuItemType) => {
  const active = useActive(id);

  return (
    <div className="horizontal-menu-item ">
      <NavLink className="horizontal-menu-item-link" to={path} end={id == "setting.item1"}>
        <span
          className={`horizontal-menu-item-text ${classNames({
            "font-semibold": active,
            "font-medium": !active,
          })}`}
        >
          {text}
        </span>
      </NavLink>
      {active && <div className="horizontal-menu-item-active"></div>}
    </div>
  );
};

export default HorizontalMenuItem;
