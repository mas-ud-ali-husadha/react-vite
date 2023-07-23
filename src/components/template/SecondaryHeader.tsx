import useResponsive from "@/hooks/useResponsive";
import HorizontalMenuContent from "./HorizontalMenuContent";

const SecondaryHeader = () => {
  const { md } = useResponsive();

  return (
    <>
      {md && (
        <div className={"flex items-center bg-primary"}>
          <div
            className={
              "h-16 flex items-center px-4 container mx-auto text-white"
            }
          >
            <HorizontalMenuContent />
          </div>
        </div>
      )}
    </>
  );
};

export default SecondaryHeader;
