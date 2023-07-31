import React from "react";

interface InputLabelType {
  label: string;
  children: React.ReactNode;
  errors?: any;
  name?: string;
}
const InputLabelVertical = ({
  label,
  children,
  name,
  errors,
}: InputLabelType) => {
  return (
    <div className="flex flex-col ">
      <label className="text-primary font-medium mb-2">{label}</label>
      {children}
      <span className="text-xs font-medium text-red-600 h-1 mt-2 ">
        {name &&
          errors?.[name]?.message &&
          "* " + String(errors[name]?.message)}
      </span>
    </div>
  );
};

export default InputLabelVertical;
