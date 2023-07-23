import React from "react";

interface InputLabelType {
  label: string;
  children: React.ReactNode;
  errors?: any;
  name?: string;
  desc?: string;
}
const InputLabel = ({
  label,
  children,
  name,
  desc,
  errors,
}: InputLabelType) => {
  return (
    <div className="grid grid-cols-12 justify-center   w-full">
      <label className="text-textPrimary font-medium mt-2 col-span-2">{label}</label>
      <div className="flex flex-col gap-1 col-span-10">
        {children}
        {desc && (
          <span className="text-xs font-light text-gray-400">{desc}</span>
        )}
        <span className="text-xs font-medium text-red-600 h-1 mt-1 ">
          {name &&
            errors?.[name]?.message &&
            "* " + String(errors[name]?.message)}
        </span>
      </div>
    </div>
  );
};

export default InputLabel;
