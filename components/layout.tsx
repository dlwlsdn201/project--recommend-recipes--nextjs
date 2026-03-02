import React, { ReactNode } from 'react';
import Header from './header';
import { useRouter } from 'next/router';
import { TransitionGroup, Transition } from 'react-transition-group';
import SuccessAlert from './Modules/Alert/Success';
import { commonStore } from '@/source/store';
import FailureAlert from './Modules/Alert/Failure';
interface IProps {
  children: ReactNode;
}
const TIMEOUT = 150;
const getTransitionStyles = {
  entering: {
    position: 'absolute',
    opacity: 0,
  },
  entered: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 0,
  },
};

const renderAlert = (isError) => {
  return isError ? <FailureAlert /> : <SuccessAlert />;
};

const Layout = ({ children }: IProps) => {
  const router = useRouter();
  const { isFetched, isError } = commonStore();

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div role="alertdialog" className="absolute w-[100%] flex justify-end z-20">
        {isFetched && renderAlert(isError)}
      </div>
      <Header />
      <TransitionGroup className="relative flex-1 min-h-0 overflow-hidden">
        <Transition
          key={router.pathname}
          timeout={{
            enter: TIMEOUT,
            exit: TIMEOUT,
          }}
        >
          {(status) => (
            <div
              className="h-full flex flex-col"
              style={{
                ...getTransitionStyles[status],
              }}
            >
              <main className="flex-1 min-h-0 overflow-y-auto bg-base-200">
                <div className="w-full flex justify-center p-6 md:p-6">{children}</div>
              </main>
            </div>
          )}
        </Transition>
      </TransitionGroup>
    </div>
  );
};

export default Layout;
