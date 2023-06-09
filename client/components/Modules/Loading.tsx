import React from 'react';
import { RingLoader } from 'react-spinners';

// Custom Loading Spin 컴포넌트
const Loading = ({ spinning, children }) => {
	return spinning ? (
		<div className='w-[100%] relative'>
			{children}
			<div className='absolute left-0 top-0 w-[100%] h-[100%] opacity-80 bg-zinc-800 flex items-center justify-center flex-col' />
			<div className='absolute left-0 top-0 w-[100%] h-[100%] flex items-center justify-center flex-col'>
				<RingLoader color='#36d7b7' />
				<p>Loading...</p>
			</div>
		</div>
	) : (
		children
	);
};

export default Loading;
