import { Disclosure, Menu } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import CartIcons from '@/layout/header/buttons/cart/CartIcons'
import HeaderMenu from '@/layout/header/menu/HeaderMenu'
import { menu } from '@/layout/header/menu/menu.data'
import HeaderProfile from '@/layout/header/profile/HeaderProfile'

import logo from './../../../../public/images/logo.svg'

const Header: FC = () => {
	return (
		<Disclosure
			as='nav'
			className='bg-gradient-to-r from-steel-blue via-moderate-purple to-vivid-purple'
		>
			{({ open }) => (
				<>
					<div className='mx-auto px-2 sm:px-6 lg:px-8'>
						<div className='relative flex h-16 items-center justify-between'>
							<div className='absolute inset-y-0 left-0 flex items-center lg:hidden'>
								{/* Mobile menu button*/}
								<Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
									<span className='sr-only'>Open main menu</span>
									{open ? (
										<XMarkIcon
											className='block h-6 w-6 text-white-gray'
											aria-hidden='true'
										/>
									) : (
										<Bars3Icon
											className='block h-6 w-6 text-white-gray'
											aria-hidden='true'
										/>
									)}
								</Disclosure.Button>
							</div>
							<div className='flex flex-1 items-center justify-center lg:items-stretch lg:justify-start'>
								<div className='flex flex-shrink-0 items-center'>
									<Image
										className='block h-8 w-auto lg:hidden'
										src={logo}
										alt='logo'
									/>
									<Link href='/'>
										<Image
											className='hidden h-8 w-auto lg:block'
											src={logo}
											alt='logo'
										/>
									</Link>
								</div>
								<div className='hidden lg:ml-6 lg:block'>
									<div className='flex space-x-4'>
										<HeaderMenu />
									</div>
								</div>
							</div>
							<div className='absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0'>
								<span className='sr-only'>View notifications</span>
								<Link href='/CartPageTern'>
									<CartIcons />
								</Link>

								{/* Profile dropdown */}
								<Menu as='div' className='relative ml-3'>
									<div>
										<Link href='/auth'>
											<HeaderProfile />
										</Link>
										{/*<HeaderProfileAuth />*/}
									</div>
								</Menu>
							</div>
						</div>
					</div>

					<Disclosure.Panel className='lg:hidden'>
						<div className='space-y-1 px-2 pt-2 pb-3 text-white-gray'>
							{menu.map(item => (
								<Disclosure.Button
									key={item.name}
									as='a'
									href={item.link}
									className={cn(
										item.current
											? 'bg-gray-900 text-white'
											: 'text-gray-300 hover:bg-gray-700 hover:text-white',
										'block rounded-md px-3 py-2 text-base font-medium'
									)}
									aria-current={item.current ? 'page' : undefined}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	)
}

export default Header
