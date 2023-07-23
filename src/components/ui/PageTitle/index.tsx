import React from "react";

interface PageTitleType {
  title: string;
  children?: React.ReactNode;
}

const PageTitle = ({ title, children }: PageTitleType) => {
  return (
    <div className="flex justify-between mb-4">
      <h3>{title}</h3>
      {children && children}
    </div>
  );
};

export default PageTitle;
