import { commonStore } from '@/source/store';
import React, { ReactElement, useEffect, useState } from 'react';
import { IAlertProps } from './type';

const SuccessAlert = (props: IAlertProps): ReactElement => {
  const { setIsError, setIsFetched } = commonStore();
  const [animateType, setAnimateType] = useState('animate__fadeInRight');

  useEffect(() => {
    // Alert UI 활성화 상태 관리 로직
    const { duration } = props;
    const defaultDuration: 2000 = 2000;
    const customDuration: number = duration ? duration * 1000 : undefined;
    console.log({ customDuration, defaultDuration });
    setTimeout(() => {
      setAnimateType('animate__flipOutX');
    }, customDuration ?? defaultDuration);

    setTimeout(
      () => {
        setIsError(false);
        setIsFetched(false);
      },
      customDuration ? customDuration + 1000 : defaultDuration + 1000,
    );
  }, []);

  return (
    <div className={`alert alert-success w-[25%] animate__animated ${animateType}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>요청이 성공하였습니다.</span>
    </div>
  );
};

export default SuccessAlert;
