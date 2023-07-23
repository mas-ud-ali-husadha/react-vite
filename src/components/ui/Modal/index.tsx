import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { VscChromeClose } from "react-icons/vsc";

interface MyModalProps {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  loading: boolean;
}

export default function Modal({
  open,
  onClose,
  title,
  loading,
  children,
}: MyModalProps) {
  return (
    <>
      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => {
            if (loading) {
              return;
            }
            onClose();
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-5 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="relative text-lg font-bold leading-6 text-gray-900 text-center flex justify-center items-center"
                  >
                    {title}
                    <VscChromeClose
                      className="absolute right-0 top-0 text-gray-500 cursor-pointer"
                      onClick={() => {
                        if (loading) {
                          return;
                        }
                        onClose();
                      }}
                    />
                  </Dialog.Title>
                  <div className="border-b border-gray-200 my-2"></div>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
