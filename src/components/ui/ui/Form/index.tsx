import classNames from "classnames";
import React, { ReactNode } from "react";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  className?: string;
  spacing?: string;
}

const Form: React.FC<FormProps> = ({
  children,
  className,
  spacing = "default",
  ...props
}) => {
  
  const customGap = classNames({
    " gap-6 my-8 max-w-lg ": spacing == "default",
    " gap-8 my-5": spacing == "medium",
  });

  return (
    <form
      className={`flex flex-col w-full center m-auto ${customGap} ${className || ""}`}
      {...props}
    >
      {children}
    </form>
  );
};

export default Form;
