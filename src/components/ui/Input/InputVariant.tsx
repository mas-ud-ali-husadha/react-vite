import classNames from "classnames";

const InputVariant = (variant?: string) => {
  return classNames({
    "border-primary border-b-2 pb-2 w-full": variant == "border-bottom",
    "border-textPrimary text-sm border py-1.5 px-2 rounded w-full":
      variant == "default",
  });
};

export default InputVariant;
