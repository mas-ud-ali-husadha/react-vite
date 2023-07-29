import { useAppDispatch } from "@/hooks/useAppDispatch";
import { userLoggedOut } from "@/store/auth/login/slice";
import { Popover, Transition } from "@headlessui/react";
import { BiChevronDown, BiLogOut, BiUserPin } from "react-icons/bi";

const HeaderUserProfile = () => {
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(userLoggedOut());
  };

  return (
    <Popover className="relative ">
      <Popover.Button className="outline-none relative flex gap-3 items-center cursor-pointer">
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white m-auto"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <BiChevronDown size={25} />
      </Popover.Button>
      <Transition
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute z-10 bg-white border mt-3 rounded">
          <div className="p-2 text-xs font-semibold flex gap-2 items-center cursor-pointer">
            <BiUserPin size="1.5em" className="w-6" />
            Profile
          </div>
          <div onClick={handleLogOut} className="p-2 text-xs font-semibold flex gap-2 items-center cursor-pointer">
            <BiLogOut size="1.5em" className="w-6" />
            Logout
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default HeaderUserProfile;
