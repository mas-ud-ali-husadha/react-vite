import React from "react";
import classNames from "classnames";

interface Props {
  headerStart: React.ReactNode;
  headerEnd: React.ReactNode;
  headerMiddle?: React.ReactNode;
  className?: string;
}

const Header = (props: Props) => {
  const { headerStart, headerEnd, headerMiddle, className } = props;

  return (
    <header className={classNames("header z-10", className)}>
      <div className={"header-wrapper container mx-auto h-20 pb-2"}>
        <div className="header-action header-action-start">{headerStart}</div>
        {headerMiddle && (
          <div className="header-action header-action-middle">
            {headerMiddle}
          </div>
        )}
        <div className="header-action header-action-end mt-3">{headerEnd}</div>
      </div>
    </header>
  );
};

export default Header;
