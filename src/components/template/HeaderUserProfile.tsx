import { BiChevronDown } from "react-icons/bi";

const HeaderUserProfile = () => {
  return (
    <div className="flex gap-3 items-center cursor-pointer">
      <img
        className="inline-block h-10 w-10 rounded-full ring-2 ring-white m-auto"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
      <BiChevronDown size={25} />
    </div>
  );
};

export default HeaderUserProfile;
