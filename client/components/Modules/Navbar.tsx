import { Popover } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
	return (
		<Popover.Group className='hidden tablet:flex tablet:gap-x-12'>
			<Link href='/home' className='text-sm font-semibold leading-6 text-white'>
				Home
			</Link>
			<a href='#' className='text-sm font-semibold leading-6 text-white'>
				About
			</a>
			<a href='#' className='text-sm font-semibold leading-6 text-white'>
				Contact
			</a>
		</Popover.Group>
	);
};

export default Navbar;
