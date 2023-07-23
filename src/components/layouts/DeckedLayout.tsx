import Header from "@/components/template/Header";
import HeaderLogo from "@/components/template/HeaderLogo";
import HeaderUserProfile from "@/components/template/HeaderUserProfile";
import SecondaryHeader from "@/components/template/SecondaryHeader";
import Views from "@/views";

const DeckedLayout = () => {
  return (
    <div className=" flex flex-auto flex-col h-full">
      <div className="flex flex-col flex-auto min-w-0 relative w-full h-full">
        <Header
          className="shadow dark:shadow-2xl"
          headerStart={<HeaderLogo />}
          headerEnd={<HeaderUserProfile />}
        />
        <SecondaryHeader />
        <Views />
      </div>
    </div>
  );
};

export default DeckedLayout;
