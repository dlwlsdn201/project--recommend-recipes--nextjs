import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface IProps {
  modal: boolean;
  setOpen: Function;
  setClose: Function;
  customIcon: React.ReactElement;
  content: React.ReactElement;
  testId: string;
}

export default function CustomModal(props: IProps) {
  const { modal, testId, setClose, customIcon, content } = props;
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={modal} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={() => setClose()}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-base-content/30 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden card bg-base-100 shadow-xl rounded-2xl text-left transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="card-body px-4 pb-4 pt-5 sm:p-6 sm:pb-4" data-testid={testId}>
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary sm:mx-0 sm:h-10 sm:w-10">
                      {customIcon}
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left flex-1">
                      <Dialog.Title as="h2" className="text-h1 text-base-content">
                        추천 결과
                      </Dialog.Title>
                      <div className="border-base-200 w-[90%] border-t-2 mx-auto mt-4 mb-8" />
                      <div className="mt-2" data-testid="homePage-result-modal-content">
                        {content}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 bg-base-100 rounded-b-2xl">
                  <button
                    type="button"
                    className="btn btn-outline btn-primary rounded-2xl text-body2"
                    onClick={() => setClose()}
                    ref={cancelButtonRef}
                  >
                    닫기
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
