import classNames from "classnames";

const ButtonVariant = (variant?: string) =>
  classNames({
    "bg-primary text-white": variant == "primary",
    "bg-slate-700 text-white": variant == "secondary",
    "bg-primary text-white border border-borderPrimary shadow-lg":
      variant == "primary-border",
  });

export default ButtonVariant;
