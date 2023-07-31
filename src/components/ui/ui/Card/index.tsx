import classNames from "classnames";

interface CardType {
  type?: string;
  border?: boolean;
  padding?: boolean;
  children: React.ReactNode;
  className?: string;
}
const Card = ({
  type,
  border = false,
  padding,
  children,
  className,
}: CardType) => {
  const variant = classNames("card", className, {
    "border-t-4": border,
    "md:px-6 py-8": padding,
    "border-primary": type == "primary",
  });

  return <div className={variant}>{children}</div>;
};

export default Card;
