// import classNames from "classnames";
import { Popover, Transition } from "@headlessui/react";
import { useState } from "react";
import { usePopper } from "react-popper";

interface DropdownType {
  text: string;
  active?: boolean;
  children?: React.ReactNode;
}

const DropDownItem = ({ text, children }: DropdownType) => {
  const [open, setOpen] = useState(false);

  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null);

  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "right",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 20],
        },
      },
    ],
  });

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      ref={setReferenceElement}
    >
      <Popover>
        <Popover.Button>{text}</Popover.Button>
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

export default DropDownItem;
