import React, { forwardRef, useState } from "react";
import InputVariant from "./InputVariant";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

interface InputType extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: string;
  iconColor?: string;
}

const InputPassword = forwardRef<HTMLInputElement, InputType>(
  ({ variant = "default", iconColor = "text-textPrimary", ...props }, ref) => {
    const [show, setShow] = useState(false);
    const style = InputVariant(variant);

    return (
      <div className="relative flex">
        <input
          ref={ref}
          className={`${style} outline-none w-full`}
          {...props}
          type={show ? "text" : "password"}
        />
        {show ? (
          <AiOutlineEye
            className={`absolute right-0 mt-0.5 ${iconColor} cursor-pointer`}
            size="1.5em"
            onClick={() => setShow(!show)}
          />
        ) : (
          <AiOutlineEyeInvisible
            className={`absolute right-0 mt-0.5 ${iconColor} cursor-pointer `}
            size="1.5em"
            onClick={() => setShow(!show)}
          />
        )}
      </div>
    );
  }
);

export default InputPassword;
