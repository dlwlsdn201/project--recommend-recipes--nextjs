import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import {
	ArrowPathIcon,
	Bars3Icon,
	ChartPieIcon,
	CursorArrowRaysIcon,
	FingerPrintIcon,
	SquaresPlusIcon,
	XMarkIcon
} from '@heroicons/react/24/outline';
import {
	ChevronDownIcon,
	PhoneIcon,
	PlayCircleIcon
} from '@heroicons/react/20/solid';
import Image from 'next/image';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Example() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className='bg-dark border-4 border-red-500'>
			<nav
				className=' flex max-w-[100%] mx-[1%] items-center justify-between p-6 laptop:px-8'
				aria-label='Global'>
				<div className='flex laptop:flex-1 items-center'>
					<a href='#' className='-m-1.5 p-1.5'>
						<Image
							// className='h-8 w-auto'
							src={require('../public/images/logo.png').default}
							alt='Logo'
							width={64}
							height={64}
						/>
					</a>
					<h3 className='text-white text-xl ml-2'>냉장고를 부탁해</h3>
				</div>
				<div className='flex laptop:hidden'>
					<button
						type='button'
						className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
						onClick={() => setMobileMenuOpen(true)}>
						<span className='sr-only'>Open main menu</span>
						<Bars3Icon className='h-6 w-6' aria-hidden='true' />
					</button>
				</div>
				<Popover.Group className='hidden laptop:flex laptop:gap-x-12'>
					{/* <Popover className='relative'>
						<Popover.Button className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-white'>
							Home
							<ChevronDownIcon
								className='h-5 w-5 flex-none text-gray-400'
								aria-hidden='true'
							/>
						</Popover.Button>

						<Transition
							as={Fragment}
							enter='transition ease-out duration-200'
							enterFrom='opacity-0 translate-y-1'
							enterTo='opacity-100 translate-y-0'
							leave='transition ease-in duration-150'
							leaveFrom='opacity-100 translate-y-0'
							leaveTo='opacity-0 translate-y-1'>
							<Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-laptop ring-1 ring-gray-900/5'>
								<div className='p-4'>
									{products.map((item) => (
										<div
											key={item.name}
											className='group relative flex items-center gap-x-6 rounded-laptop p-4 text-sm leading-6 hover:bg-gray-50'>
											<div className='flex h-11 w-11 flex-none items-center justify-center rounded-laptop bg-gray-50 group-hover:bg-white'>
												<item.icon
													className='h-6 w-6 text-gray-600 group-hover:text-indigo-600'
													aria-hidden='true'
												/>
											</div>
											<div className='flex-auto'>
												<a
													href={item.href}
													className='block font-semibold text-gray-900'>
													{item.name}
													<span className='absolute inset-0' />
												</a>
												<p className='mt-1 text-gray-600'>{item.description}</p>
											</div>
										</div>
									))}
								</div>
								<div className='grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50'>
									{callsToAction.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className='flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100'>
											<item.icon
												className='h-5 w-5 flex-none text-gray-400'
												aria-hidden='true'
											/>
											{item.name}
										</a>
									))}
								</div>
							</Popover.Panel>
						</Transition>
					</Popover> */}

					<a href='#' className='text-sm font-semibold leading-6 text-white'>
						Home
					</a>
					<a href='#' className='text-sm font-semibold leading-6 text-white'>
						About
					</a>
					<a href='#' className='text-sm font-semibold leading-6 text-white'>
						Contact
					</a>
				</Popover.Group>
				<div className='hidden laptop:flex laptop:flex-1 laptop:justify-end'>
					<a href='#' className='text-sm font-semibold leading-6 text-white'>
						Log in <span aria-hidden='true'>&rarr;</span>
					</a>
				</div>
			</nav>
			<Dialog
				as='div'
				className='laptop:hidden'
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}>
				<div className='fixed inset-0 z-10' />
				<Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-[30%] overflow-y-auto bg-white px-6 py-6 mobile:max-w-sm mobile:ring-1 mobile:ring-gray-900/10'>
					<div className='flex items-center justify-between'>
						<a href='#' className='-m-1.5 p-1.5'>
							<span className='sr-only'>Your Company</span>
							<Image
								// className='h-8 w-auto'
								src={require('../public/images/logo.png').default}
								alt='Logo'
								width={64}
								height={64}
							/>
						</a>
						<button
							type='button'
							className='-m-2.5 rounded-md p-2.5 text-gray-700'
							onClick={() => setMobileMenuOpen(false)}>
							<span className='sr-only'>Close menu</span>
							<XMarkIcon className='h-6 w-6' aria-hidden='true' />
						</button>
					</div>
					<div className='mt-6 flow-root'>
						<div className='-my-6 divide-y divide-gray-500/10'>
							<div className='space-y-2 py-6'>
								<a
									href='#'
									className='-mx-3 block rounded-laptop px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
									Features
								</a>
								<a
									href='#'
									className='-mx-3 block rounded-laptop px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
									Marketplace
								</a>
								<a
									href='#'
									className='-mx-3 block rounded-laptop px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
									Company
								</a>
							</div>
							<div className='py-6'>
								<a
									href='#'
									className='-mx-3 block rounded-laptop px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
									Log in
								</a>
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}
