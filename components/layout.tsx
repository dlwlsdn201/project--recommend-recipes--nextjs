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

// 라우트 전환 시 레이아웃(헤더 + 메인 컨텐츠) 전체에 적용될 페이드 인/아웃 스타일 정의
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

// 공통 알림 렌더링 유틸 - 성공/실패 상태에 따라 알림 컴포넌트를 분기
const renderAlert = (isError: boolean) => {
  return isError ? <FailureAlert /> : <SuccessAlert />;
};

/**
 * Layout 컴포넌트
 * - 페이지 공통 레이아웃 (알림, 헤더, 메인 컨텐츠) 관리
 * - 라우트 전환 시 헤더 영역과 메인 컨텐츠가 동일한 타이밍으로 페이드 전환되도록 TransitionGroup으로 래핑
 */
const Layout = ({ children }: IProps) => {
  const router = useRouter();
  const { isFetched, isError } = commonStore();

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* 전역 알림 영역 - 페이지 전환과 무관하게 항상 최상단에 고정 */}
      <div role="alertdialog" className="absolute w-[100%] flex justify-end z-20">
        {isFetched && renderAlert(isError)}
      </div>
      <Header />

      {/* 라우트 전환 시 헤더 + 메인 컨텐츠를 함께 페이드 인/아웃 처리 */}
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
              className="flex flex-col h-full"
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
