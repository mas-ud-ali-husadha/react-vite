import classNames from "classnames";
import { BiChevronDown } from "react-icons/bi";
import { Popover, Transition } from "@headlessui/react";
import { useState } from "react";
import { usePopper } from "react-popper";
import useActive from "@/hooks/useActive";

interface DropdownType {
  text: string;
  id: string;
  children?: React.ReactNode;
}

const Dropdown = ({ text, id, children }: DropdownType) => {
  const [open, setOpen] = useState(false);

  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);

  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 15],
        },
      },
    ],
  });

  const active = useActive(id);
  return (
    <div
      className="relative "
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      ref={setReferenceElement}
    >
      <Popover className="horizontal-menu-item relative">
        <Popover.Button className="flex justify-center gap-1 items-center focus:outline-none">
          <span
            className={`horizontal-menu-item-text ${classNames({
              "font-semibold": active,
              "font-medium": !active,
            })}`}
          >
            {text}
          </span>
          <BiChevronDown size={22} />
        </Popover.Button>
        {active && <div className="horizontal-menu-item-active"></div>}
        <Transition
          show={open}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
            className="horizontal-dropdown-panel"
          >
            {children}
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};

export default Dropdown;
