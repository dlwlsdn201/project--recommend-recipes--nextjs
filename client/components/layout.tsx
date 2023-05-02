import React from 'react';
import Header from './header';

const Layout = ({ children }) => {
	return (
		<div className='relative'>
			<Header />
			<main>
				<div className='h-[100%] w-[100%] p-[2em] border-2 border-yellow-200'>
					{children}
				</div>
			</main>
			<footer>footer</footer>
		</div>
	);
};

export default Layout;
