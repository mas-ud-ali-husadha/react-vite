import classNames from "classnames";
import React from "react";

interface PageContainerTyoe {
  children: React.ReactNode;
  setting?: {
    [index: string]: string | boolean | number;
  };
}

const PageContainer = ({ children, setting }: PageContainerTyoe) => {
  const setClass = classNames({
    "my-8 px-4 md:px-0 ": !setting?.nopadding,
  });
  return (
    <main className=" flex flex-auto flex-col justify-between ">
      <div
        className={`container h-full mx-auto flex flex-auto flex-col ${setClass}`}
      >
        {children}
      </div>
    </main>
  );
};

export default PageContainer;
