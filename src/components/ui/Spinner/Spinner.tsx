import React, { ForwardedRef, forwardRef } from "react";
import { CgSpinner } from "react-icons/cg";
import { IconType } from "react-icons";

interface SpinnerProps {
  indicator?: IconType;
  size?: string | number;
  style?: React.CSSProperties;
  ref?: ForwardedRef<HTMLElement>;
}

const Spinner = forwardRef(
  (props: SpinnerProps, ref: ForwardedRef<HTMLElement>) => {
    const {
      indicator: Component = CgSpinner,
      size = 40,
      style,
      ...rest
    } = props;

    const spinnerStyle: React.CSSProperties = {
      height: size,
      width: size,
      ...style,
    };

    return (
      <Component
        ref={ref}
        style={spinnerStyle}
        className="animate-spin text-indigo-600"
        {...rest}
      />
    );
  }
);

Spinner.displayName = "Spinner";

export default Spinner;
