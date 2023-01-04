"use client";

import { Fragment, useState } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Slider() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="w-max inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 dark:text-gray-300 ring-1 ring-gray-900/10 dark:ring-gray-300/10 hover:ring-gray-900/20"
      >
        Resume{" "}
        <span className="text-indigo-200" aria-hidden="true">
          &rarr;
        </span>
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-min">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute top-0 left-0 -ml-8 flex flex-col pt-4 pr-2 sm:-ml-10 sm:pr-4">
                        <button
                          title="Close panel"
                          type="button"
                          className="rounded-md text-black dark:text-white focus:outline-none focus:ring-2 dark:focus:ring-white focus:ring-slate-800"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child>

                    <div className="flex h-full flex-col overflow-y-scroll py-4  bg-white  dark:text-gray-200 dark:bg-slate-900 shadow-xl">
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        <iframe
                          src="https://docs.google.com/document/d/e/2PACX-1vQ8jxqzqDE3TASPvv9BLWcCXoL8P6JXGwyLkmahguJGRJw2DrQxcDMu-OVJxdcLdGJswUNpP0Tefvt8/pub?embedded=true"
                          className="min-w-max sm:w-[595px] h-full"
                        ></iframe>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
