import React, { ReactNode } from 'react';
import Header from './header';
import { useRouter } from 'next/router';
import { TransitionGroup, Transition } from 'react-transition-group';
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

const Layout = ({ children }: IProps) => {
  const router = useRouter();

  return (
    <div className="relative h-[100%]">
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
