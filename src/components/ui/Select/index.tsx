import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import InputVariant from "../Input/InputVariant";

type SelectType = {
  data: { [key: string]: string | number }[];
  label: string;
  returnValue: string;
  value: any;
  variant?: string;
  className?: string;
  onChange: (item: any) => void;
};

const Select = ({
  data,
  label,
  returnValue,
  value,
  variant = "default",
  className,
  onChange,
}: SelectType) => {
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? data
      : data.filter((item) =>
          String(item[label])
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  const style = InputVariant(variant);

  return (
    <div className="relative">
      <Combobox
        value={data.find((i) => i.value == value)}
        onChange={(e) => onChange(e[returnValue])}
      >
        <div className="relative">
          <Combobox.Button>
            <Combobox.Input
              className={`${String(style)} ${String(
                className
              )} font-light tracking-wide outline-none placeholder:text-slate-400`}
              displayValue={(item: any) => item[label]}
              onChange={(event) => setQuery(event.target.value)}
            />
          </Combobox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredPeople.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((item) => (
                  <Combobox.Option
                    key={item[returnValue]}
                    className={({ selected }) =>
                      `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                        selected ? "bg-teal-600 text-white" : "text-gray-900"
                      }`
                    }
                    value={item}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {item[label]}
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
    </div>
  );
};

export default Select;
