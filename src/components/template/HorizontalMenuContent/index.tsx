import {
  NAV_ITEM_TYPE_TITLE,
  NAV_ITEM_TYPE_COLLAPSE,
  NAV_ITEM_TYPE_ITEM,
} from "@/constants/navigation";
import { Dropdown, DropdownItem } from "@/components/ui";
import navigationConfig, { NavigationItem } from "@/configs/navigation";
import HorizontalMenuItem from "./HorizontalMenuItem";
import HorizontalMenuDropdownItem from "./HorizontalMenuDropdownItem";
import { Fragment } from "react";

const HorizontalMenuContent = () => {
  return (
    <div className="flex gap-16">
      {navigationConfig.map((nav: NavigationItem) => {
        if (
          nav.type === NAV_ITEM_TYPE_TITLE ||
          nav.type === NAV_ITEM_TYPE_COLLAPSE
        ) {
          return (
            <Dropdown text={nav.title} id={nav.key} key={nav.key}>
              {nav?.subMenu?.map((secondarySubNav) => (
                <Fragment key={secondarySubNav.key}>
                  {secondarySubNav?.subMenu &&
                  secondarySubNav?.subMenu?.length > 0 ? (
                    <DropdownItem text={secondarySubNav.title}>
                      {secondarySubNav?.subMenu?.map((tertiarySubNav) => (
                        <HorizontalMenuDropdownItem
                          text={tertiarySubNav.title}
                          key={tertiarySubNav.key}
                          path={tertiarySubNav.path}
                        />
                      ))}
                    </DropdownItem>
                  ) : (
                    <HorizontalMenuDropdownItem
                      key={secondarySubNav.key}
                      text={secondarySubNav.title}
                      path={secondarySubNav.path}
                    />
                  )}
                </Fragment>
              ))}
            </Dropdown>
          );
        }
        if (nav.type === NAV_ITEM_TYPE_ITEM) {
          return (
            <HorizontalMenuItem
              id={nav.key}
              key={nav.key}
              text={nav.title}
              path={nav.path}
            />
          );
        }
        return <></>;
      })}
    </div>
  );
};

export default HorizontalMenuContent;
