import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import FormHeroFirst from "./FormHeroFirst";
import { useDispatch, useSelector } from "react-redux";
import FormHeroSeconde from "../global/FormHeroSeconde";
import { openHeaderForm } from "../../config/creatorActions";
import SelectAgence from "./SelectAgence";

export default function Modal() {
  const dispatch = useDispatch()
  const isOpenModal = useSelector(state => state.headerForm.isOpen)
  const formActive = useSelector((state) => state.formActive);

  return (
    <div>
      <Transition.Root show={isOpenModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => dispatch(openHeaderForm(false))}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/70 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed md:-top-20 inset-0 z-10 overflow-y-auto">
            <div className="flex md:min-h-full items-center justify-center md:p-4 text-center sm:items-center pt-0 p-0 md:pt-32">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden md:rounded-lg bg-gray-50 backdrop-blur md:px-4 px-2 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:p-2 dark:bg-primary-dark/50 w-screen md:h-full h-screen md:w-[500px]">
                  {formActive == "1" ? (
                    <FormHeroFirst />
                  ) : (
                    <FormHeroSeconde >
                      <SelectAgence />
                    </FormHeroSeconde>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
