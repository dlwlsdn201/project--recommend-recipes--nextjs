import { useRecoilState, useRecoilValue } from 'recoil';
import SnsLogin from './Sns';
import { userIdState } from '../../source/atoms';
import Image from 'next/image';

const Login = () => {
	const [userId, setUserId] = useRecoilState(userIdState);

	console.log('userId:', userId);
	return (
		<div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 laptop:px-8'>
			<div className='mobile:mx-auto mobile:w-full mobile:max-w-sm'>
				<Image
					className='mx-auto h-10 w-auto'
					src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
					alt='Your Company'
					width={200}
					height={200}
				/>
				{/* <img
				/> */}
				<h2 className=' animate-bounce mt-10 text-center text-2xl font-bold leading-9 tracking-tight'>
					로 그 인
				</h2>
			</div>

			<div className='mt-10 mobile:mx-auto mobile:w-full mobile:max-w-sm'>
				<form className='space-y-6' action='#' method='POST'>
					<div>
						<label
							htmlFor='email'
							className='block text-sm font-medium leading-6 '>
							Email address
						</label>
						<div className='mt-2'>
							<input
								id='email'
								name='email'
								type='email'
								autoComplete='email'
								onChange={(e) => setUserId(e.target.value)}
								required
								className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 mobile:text-sm mobile:leading-6'
							/>
						</div>
					</div>

					<div>
						<div className='flex items-center justify-between'>
							<label
								htmlFor='password'
								className='block text-sm font-medium leading-6 '>
								Password
							</label>
							<div className='text-sm'>
								<a
									href='#'
									className='font-semibold text-indigo-600 hover:text-indigo-500'>
									비밀번호 찾기
								</a>
							</div>
						</div>
						<div className='mt-2'>
							<input
								id='password'
								name='password'
								type='password'
								autoComplete='current-password'
								required
								className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 mobile:text-sm mobile:leading-6'
							/>
						</div>
					</div>

					<div className='!mt-10'>
						<button
							type='submit'
							className='flex transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-600 duration-500 w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
							Sign in
						</button>
					</div>
				</form>

				<p className='mt-10 text-center text-sm text-gray-500'>
					아직 회원이 아니신가요?{' '}
					<a
						href='#'
						className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500 '>
						회원가입
					</a>
				</p>
				<SnsLogin />
			</div>
		</div>
	);
};

export default Login;
