import SquaerButton from '@/ui/square-button/SquaerButton'
import Link from 'next/link'
import { FC } from 'react'
import { FaVk } from 'react-icons/fa'
import { FaTelegram } from 'react-icons/fa'
import { FaDribbble } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
const Footer: FC = () => {
	return (
		<footer className=' bg-gradient-to-r from-steel-blue via-moderate-purple to-vivid-purple sticky top-[100vh]'>
			<div className='mx-auto w-full p-4 sm:p-6'>
				<div className='md:flex md:justify-between'>
					<div className='mb-6 md:mb-0'>
						<Link href='/' className='flex items-center'>
							<img
								src='/images/logo.svg'
								className='h-8 mr-3'
								alt='FlowBite Logo'
							/>
						</Link>
					</div>
					<div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 text-white-gray'>
						<div>
							<h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'></h2>
							<ul className='text-gray-600 dark:text-gray-400'>
								<li className='mb-4'>
									<Link href='/aboutus' className='hover:underline'>
										О нас
									</Link>
								</li>
								<li>
									<Link href='/Trade-IN' className='hover:underline'>
										Trade-IN
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'></h2>
							<ul className='text-gray-600 dark:text-gray-400'>
								<li className='mb-4'>
									<Link href='/catalog/iPhone' className='hover:underline '>
										iPhone
									</Link>
								</li>
								<li>
									<Link href='/catalog/ipad' className='hover:underline'>
										iPad
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'></h2>
							<ul className='text-gray-600 dark:text-gray-400'>
								<li className='mb-4'>
									<Link href='/catalog/applewatch' className='hover:underline'>
										AppleWatch
									</Link>
								</li>
								<li>
									<Link href='/catalog/mac' className='hover:underline'>
										Mac
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
				<div className='sm:flex sm:items-center sm:justify-between text-white-gray'>
					<span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
						© 2023{' '}
						<Link href='/' className='hover:underline'>
							QPICK
						</Link>
						. All Rights Reserved.
					</span>
					<div className='flex mt-4 space-x-6 sm:justify-center sm:mt-0'>
						<Link
							href='https://vk.com/'
							className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
						>
							<FaVk className='w-5 h-5' aria-hidden='true'/>
							<span className='sr-only'>VK page</span>
						</Link>
						<Link
							href='https://web.telegram.org/'
							className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
						>
							<FaTelegram className='w-5 h-5' aria-hidden='true'/>
							<span className='sr-only'>Telegram page</span>
						</Link>
						<Link
							href='https://github.com/'
							className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
						>
							<FaGithub className='w-5 h-5' aria-hidden='true'/>
							<span className='sr-only'>GitHub account</span>
						</Link>
						<Link
							href='https://dribbble.com/signup/new'
							className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
						>
							<FaDribbble className='w-5 h-5' aria-hidden='true'/>
							<span className='sr-only'>Dribbble account</span>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}
export default Footer
