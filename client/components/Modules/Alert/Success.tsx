import React, { ReactElement } from 'react';

const SuccessAlert = (): ReactElement => {
  return (
    <div className="alert alert-success w-[25%]">
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
