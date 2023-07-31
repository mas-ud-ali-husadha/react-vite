import { forwardRef } from "react";

export interface SwitchItemProps {
  [key: string]: string | number;
}

interface SwitchProps {
  data: SwitchItemProps[];
  value: string | number;
  onChange: (selectedItem: any) => void;
  label: string;
  returnValue: string;
  [key: string]: any;
}

const Switch = forwardRef<HTMLDivElement, SwitchProps>(
  (
    { data, value, onChange, label = "label", returnValue = "value", ...props },
    ref
  ) => {
    return (
      <div
        className="flex text-white rounded cursor-pointer"
        ref={ref}
        {...props}
      >
        {data.map((item, i) => (
          <div
            key={i}
            className={`${
              value == item[returnValue] ? "bg-active" : "bg-primary"
            } py-2 px-3 transition-all  first:rounded-l last:rounded-r  cursor-pointer`}
            onClick={() => {
              onChange(item[returnValue]);
            }}
          >
            {item[label]}
          </div>
        ))}
      </div>
    );
  }
);

export default Switch;
