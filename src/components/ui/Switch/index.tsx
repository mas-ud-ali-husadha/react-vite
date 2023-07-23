import { forwardRef } from "react";

export interface SwitchItemProps {
  label: string;
  value: string | number;
}

interface SwitchProps {
  data: SwitchItemProps[];
  value: string | number;
  onChange: (selectedItem: any) => void;
  [key: string]: any;
}

const Switch = forwardRef<HTMLDivElement, SwitchProps>(
  ({ data, value, onChange, ...props }, ref) => {
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
              value == item.value ? "bg-active" : "bg-primary"
            } py-2 px-3 transition-all  first:rounded-l last:rounded-r  cursor-pointer`}
            onClick={() => {
              onChange(item.value);
            }}
          >
            {item.label}
          </div>
        ))}
      </div>
    );
  }
);

export default Switch;
