import { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Navbar from './Modules/Navbar';
import Link from 'next/link';
import { commonStore } from '@/source/store';
import { READ_LOGOUT } from '@/api';
import { useRouter } from 'next/router';
import 'animate.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animateType, setAnimateType] = useState(null);
  const { isLogin, setIsLogin } = commonStore();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await READ_LOGOUT();
      if (response.status === 200) {
        setIsLogin(false);
        handleDialog.close();
        router.push('/');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDialog = {
    open: () => {
      setAnimateType('animate__slideInRight');
    },
    close: () => {
      setAnimateType('animate__slideOutRight');
    },
  };

  useEffect(() => {
    // sidebar animation 슬라이드 로직
    if (animateType === 'animate__slideInRight') {
      setTimeout(() => {
        setMobileMenuOpen(true);
      }, 1);
    } else if (animateType === 'animate__slideOutRight') {
      setTimeout(() => {
        setMobileMenuOpen(false);
      }, 1100);
    } else {
      return;
    }
  }, [animateType]);

  return (
    <header className="sticky left-0 top-0 h-24 bg-dark ">
      <nav className=" flex max-w-[100%] mx-[1%] items-center justify-between p-6 laptop:px-8" aria-label="Global">
        <div className="flex laptop:flex-1 items-center">
          <Link href="/home" className="-m-1.5 p-1.5">
            <Image
              // className='h-8 w-auto'
              src={require('../public/images/logo.png').default}
              alt="Logo"
              width={72}
              height={64}
            />
          </Link>
          {/* <h3 className='text-white text-xl ml-2'>냉장고를 부탁해</h3> */}
        </div>
        <div className={`flex tablet:hidden ${isLogin ? 'initial' : 'hidden'}`}>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-500"
            onClick={() => handleDialog.open()}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {isLogin && <Navbar />}
        {/* <Popover.Group className='hidden laptop:flex laptop:gap-x-12'>
					<a href='#' className='text-sm font-semibold leading-6 text-white'>
						Home
					</a>
					<a href='#' className='text-sm font-semibold leading-6 text-white'>
						About
					</a>
					<a href='#' className='text-sm font-semibold leading-6 text-white'>
						Contact
					</a>
				</Popover.Group> */}
        <div className="hidden tablet:flex laptop:flex-1 laptop:justify-end">
          {isLogin ? (
            <button type="button" onClick={handleLogout}>
              Logout <span aria-hidden="true">&rarr;</span>
            </button>
          ) : (
            <Link href="/" className="text-sm font-semibold leading-6 text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
        </div>
      </nav>
      <Dialog as="div" className="laptop:hidden" open={mobileMenuOpen} onClose={() => handleDialog.open()}>
        <div className="fixed inset-0 z-10" onClickCapture={() => handleDialog.close()} />
        <Dialog.Panel
          className={`animate__animated ${animateType} fixed inset-y-0 right-0 z-10 w-[30%] overflow-y-auto bg-white px-6 py-6 mobile:max-w-sm mobile:ring-1 mobile:ring-gray-900/10`}
        >
          <div className="flex items-center justify-between">
            <Link href="/home" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                // className='h-8 w-auto'
                src={require('../public/images/logo.png').default}
                alt="Logo"
                width={48}
                height={48}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => handleDialog.close()}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root h-[100%]">
            <div className="-my-6 divide-y divide-gray-500/10 h-[100%] flex flex-col justify-between py-4">
              <div className="space-y-2 py-6">
                <Link
                  href="/home"
                  className="-mx-3 block rounded-laptop px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClickCapture={() => handleDialog.close()}
                >
                  Home
                </Link>
                <Link
                  href="/contact"
                  className="-mx-3 block rounded-laptop px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClickCapture={() => handleDialog.close()}
                >
                  Contact
                </Link>
              </div>
              <div className="py-6 text-gray-900">
                {isLogin ? (
                  <button type="button" onClick={handleLogout}>
                    Logout
                  </button>
                ) : (
                  <Link
                    href="/"
                    className="-mx-3 block rounded-laptop px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
