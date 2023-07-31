import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Button } from "..";
import { AiOutlineWarning } from "react-icons/ai";

interface MyModalProps {
  open: boolean;
  title?: string;
  onClose?: () => void;
  loading?: boolean;
  onSubmit?: () => void;
}

export default function DeleteModal({
  open,
  onClose,
  loading = false,
  onSubmit,
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
            onClose && onClose();
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
            <div className="flex min-h-full items-center justify-center  text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="py-11 w-full max-w-md transform overflow-hidden rounded-2xl bg-white  text-left align-middle shadow-xl transition-all">
                  <div className="flex flex-col gap-9 items-center">
                    <AiOutlineWarning size="7em" />
                    <div className="h2">Yakin Hapus Data ?</div>
                    <div className="flex gap-10">
                      <Button
                        className="px-10 py-4"
                        variant="secondary"
                        text="Batal"
                        onClick={onClose}
                      />
                      <Button
                        className="px-10 py-4"
                        variant="primary"
                        text="Hapus"
                        disabled={loading}
                        onClick={onSubmit}
                      />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
