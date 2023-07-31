import React, { forwardRef } from "react";
import InputVariant from "./InputVariant";

interface InputType extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: string;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputType>(
  ({ variant = "default", className, ...props }, ref) => {
    const style = InputVariant(variant);

    return (
      <input
        ref={ref}
        className={`${style} ${String(
          className
        )} font-light tracking-wide outline-none placeholder:text-slate-400`}
        {...props}
      />
    );
  }
);

export default Input;
