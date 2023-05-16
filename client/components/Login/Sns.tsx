import React from 'react';
import { SNS_GOOGLE, SNS_KAKAO } from '../Modules/Icons';

const SnsLogin = () => {
	const showLoginModal = () => window.confirm('로그인 창 실행');

	return (
		<div className='container mt-4' data-testid='sns-login'>
			<div className='inner-container w-[100%] inline-grid grid-cols-3 grid-flow-col-dense grid-rows-1'>
				<div className='h-[100%] bg-slate-800 col-span-1  flex align-middle px-4 py-4'>
					<span className='title my-[auto] break-keep'>SNS 로그인</span>
				</div>
				<div className='inline-grid grid-flow-col col-span-2 gap-6 bg-slate-900 px-8'>
					<span className='sns-item my-[auto] justify-self-center col-span-1'>
						<a href='#' onClick={() => showLoginModal()}>
							{SNS_KAKAO()}
						</a>
					</span>
					<span className='sns-item my-[auto] justify-self-center col-span-1'>
						<a href='#' onClick={() => showLoginModal()}>
							{SNS_GOOGLE()}
						</a>
					</span>
				</div>
			</div>
		</div>
	);
};

export default SnsLogin;
