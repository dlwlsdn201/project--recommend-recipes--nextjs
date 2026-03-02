import Image from 'next/image';
import { loginStore } from '@/source/store';
import SnsLogin from './Sns';

/**
 * 로그인 폼 컴포넌트
 * - Clean & Warm 디자인 시스템 적용 (card, input-bordered, btn-primary)
 * - indigo 계열 제거, primary(orange) 적용
 */
const Login = ({ handleLogin }) => {
  const { setUserId } = loginStore();

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-4 pb-32 md:px-6 max-w-md mx-auto">
      <div className="card bg-base-100 shadow-xl rounded-2xl p-6 md:p-8">
        <div className="flex flex-col items-center">
          <Image src="/images/logo.png" alt="냉장고를 부탁해" width={120} height={80} className="object-contain" />
          <h2 className="mt-6 text-center text-h1 tracking-tight text-base-content">로 그 인</h2>
        </div>

        <form className="mt-8 space-y-6">
          <div>
            <label htmlFor="email" className="block text-body2 text-base-content">
              메일
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value="sampleId@gmail.com"
                onChange={(e) => setUserId(e.target.value)}
                required
                className="input input-bordered w-full rounded-xl text-body2 text-base-content focus:input-primary placeholder:text-base-content/50"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-body2 text-base-content">
                비밀번호
              </label>
              <button
                type="button"
                onClick={() => alert('준비 중입니다.')}
                className="text-body2 font-semibold text-primary hover:text-primary/80"
              >
                비밀번호 찾기
              </button>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value="00000000"
                className="input input-bordered w-full rounded-xl text-body2 text-base-content focus:input-primary placeholder:text-base-content/50"
              />
            </div>
          </div>

          <div className="!mt-10">
            <button type="button" onClick={handleLogin} className="btn btn-primary w-full rounded-2xl">
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-caption text-base-content/70">
          아직 회원이 아니신가요?{' '}
          <button
            type="button"
            onClick={() => alert('준비 중입니다.')}
            className="text-body2 font-semibold text-primary hover:text-primary/80"
          >
            회원가입
          </button>
        </p>
        <SnsLogin />
      </div>
    </div>
  );
};

export default Login;
