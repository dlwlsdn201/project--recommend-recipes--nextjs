import React from 'react';
import { BounceLoader } from 'react-spinners';

// Custom Loading Spin 컴포넌트
const Loading = ({ spinning, children }) => {
  return spinning ? (
    <div className="w-[100%] relative">
      {children}
      <div className="absolute left-0 top-0 w-[100%] h-[100%] opacity-60 bg-zinc-800 rounded-2xl flex items-center justify-center flex-col" />
      <div className="absolute left-0 top-0 w-[100%] h-[100%] flex items-center justify-center gap-2 flex-col">
        <BounceLoader color="#F97316" />
        <span className="text-body2 text-base-100">Loading...</span>
      </div>
    </div>
  ) : (
    children
  );
};

export default Loading;
