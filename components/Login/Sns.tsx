import React from 'react';
import { SNS_GOOGLE, SNS_KAKAO } from '../Modules/Icons';

/**
 * SNS 로그인 영역
 * - Clean & Warm 디자인 시스템 적용 (bg-base-200, text-base-content)
 * - 기존 slate 계열 제거
 */
const SnsLogin = () => {
  const showLoginModal = () => alert('준비 중입니다.');

  return (
    <div className="mt-6 rounded-xl bg-base-200 p-4" data-testid="sns-login">
      <div className="flex flex-row sm:flex-row items-center sm:justify-between gap-4">
        <span className="text-body2 text-base-content">SNS 로그인</span>
        <div className="flex flex-1 gap-6 justify-center sm:justify-end">
          <button
            type="button"
            className="sns-item transition-opacity rounded text-[rgb(255,255,0)] bg-[rgb(0,0,0)]"
            onClick={showLoginModal}
            aria-label="카카오 로그인"
          >
            {SNS_KAKAO()}
          </button>
          <button
            type="button"
            className="sns-item transition-opacity rounded"
            onClick={showLoginModal}
            aria-label="구글 로그인"
          >
            {SNS_GOOGLE()}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SnsLogin;
