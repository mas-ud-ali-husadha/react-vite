import React, { Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import classNames from "classnames";
import { BsSearch, BsXLg } from "react-icons/bs";

type MultiSelectType<T, U> = {
  data: T[];
  value: (item: U) => React.ReactNode;
  label: (item: T) => React.ReactNode;
  id: keyof T;
  select: U[];
  setSelect: (item: U[]) => void;
};

const MultiSelect = <T, U>({
  data,
  value,
  label,
  id,
  select,
  setSelect,
}: MultiSelectType<T, U>) => {
  return (
    <Combobox
      value={select}
      onChange={(e) => {
        setSelect(e);
      }}
      multiple
      className="w-full min-w-[200px]"
    >
      <div className="relative">
        <Combobox.Button className="p-1 min-h-[35px] w-full h-full border border-textSecondary flex justify-between rounded-md">
          <TransitionGroup className="flex gap-1">
            {select.map((item, i) => (
              <CSSTransition
                key={String(item)}
                timeout={300}
                classNames="test"
              >
                <div className={`flex gap-0.5 item-center text-white`}>
                  <div
                    className="bg-primary rounded-l py-0.5 px-1 flex items-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      const copy = [...select];
                      copy.splice(i, 1);
                      setSelect(copy);
                    }}
                  >
                    <BsXLg />
                  </div>
                  <div className="bg-primary rounded-r py-0.5 px-3">
                    {value && value(item)}
                  </div>
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
          <div className="flex h-full items-center pl-4 pr-2 my-auto ml-auto">
            <BsSearch />
          </div>
        </Combobox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Combobox.Options className="absolute flex flex-col gap-1 mt-1 max-h-60 w-48 overflow-auto rounded-md bg-white  text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {data.length === 0 ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Nothing found.
              </div>
            ) : (
              data.map((item: T) => (
                <Combobox.Option
                  key={String(item[id])}
                  className={({ active, selected }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${classNames(
                      {
                        "bg-amber-200 text-textPrimary": selected,
                        "bg-primary text-white": active,
                      }
                    )}`
                  }
                  value={item[id]}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {label && label(item)}
                      </span>
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};

export default MultiSelect;
