import { Popover } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <Popover.Group className="hidden tablet:flex tablet:gap-x-12">
      <Link href="/home" className="text-body1 font-semibold text-base-content hover:text-primary">
        Home
      </Link>
      {/* <Link
				href='/about'
				className='text-sm font-semibold leading-6 text-white'>
				About
			</Link> */}
      <Link href="/contact" className="text-body1 font-semibold text-base-content hover:text-primary">
        Contact
      </Link>
    </Popover.Group>
  );
};

export default Navbar;
