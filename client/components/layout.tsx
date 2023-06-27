import React from 'react';
import Header from './header';

const Layout = ({ children }) => {
	return (
		<div className='relative h-[100%]'>
			<Header />
			<main>
				<div className='h-[100%] w-[100%] p-[2em] '>{children}</div>
			</main>
			{/* <footer>footer</footer> */}
		</div>
	);
};

export default Layout;
