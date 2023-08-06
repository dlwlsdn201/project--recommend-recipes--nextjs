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
    <div className="relative h-[100%]">
      <div role="alertdialog" className="absolute w-[100%] flex justify-end p-4 z-10">
        {isFetched && renderAlert(isError)}
      </div>
      <Header />
      <TransitionGroup style={{ position: 'relative' }}>
        <Transition
          key={router.pathname}
          timeout={{
            enter: TIMEOUT,
            exit: TIMEOUT,
          }}
        >
          {(status) => (
            <div
              style={{
                ...getTransitionStyles[status],
              }}
            >
              <main>
                <div className="h-[100%] w-[100%] p-[2em] ">{children}</div>
              </main>
            </div>
          )}
        </Transition>
      </TransitionGroup>
      {/* <footer>footer</footer> */}
    </div>
  );
};

export default Layout;
