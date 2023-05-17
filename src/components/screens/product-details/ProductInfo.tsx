import { FC } from 'react'

import { IProductDetails } from '@/interface/product.interface'
import Cart from '@/layout/header/buttons/cart/Cart'
import ProductRating from '@/ui/catalog/product-item/ProductRating'
import { convertPrice } from '@/utils/convertPrice'
import { RadioGroup } from '@headlessui/react'
import cn from 'clsx'

const ProdectInfo: FC<IProductDetails> = ({ product }) => {
	return (
		<>
			<div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
				<h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
					{product.name}
				</h1>
			</div>

			<div className='mt-4 lg:row-span-3 lg:mt-0'>
				<h2 className='sr-only'>Product information</h2>
				<p className='text-3xl tracking-tight text-gray-900'>
					{convertPrice(product.price)}
				</p>

				{/* Reviews */}
				<div className='mt-6'>
					<h3 className='sr-only'>Reviews</h3>
					<div className='flex items-center'>
						<ProductRating product={product} />
					</div>
				</div>

				<form className='mt-10'>
					{/* Colors */}


					{/*/!* Sizes *!/*/}
					{/*<div className='mt-10'>*/}
					{/*	<div className='flex items-center justify-between'>*/}
					{/*		<h3 className='text-sm font-medium text-gray-900'>*/}
					{/*			Выберите объём накопителя:*/}
					{/*		</h3>*/}
					{/*		<a*/}
					{/*			href='#'*/}
					{/*			className='text-sm font-medium text-indigo-600 hover:text-indigo-500'*/}
					{/*		></a>*/}
					{/*	</div>*/}

					{/*	<RadioGroup*/}
					{/*		value={selectedSize}*/}
					{/*		onChange={setSelectedSize}*/}
					{/*		className='mt-4'*/}
					{/*	>*/}
					{/*		<RadioGroup.Label className='sr-only'>*/}
					{/*			{' '}*/}
					{/*			Choose a size{' '}*/}
					{/*		</RadioGroup.Label>*/}
					{/*		<div className='grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4'>*/}
					{/*			{product.storeg.map(storeg => (*/}
					{/*				<RadioGroup.Option*/}
					{/*					key={storeg.name}*/}
					{/*					value={storeg}*/}
					{/*					disabled={!storeg.inStock}*/}
					{/*					className={({ active }) =>*/}
					{/*						cn(*/}
					{/*							storeg.inStock*/}
					{/*								? 'cursor-pointer bg-white text-gray-900 shadow-sm'*/}
					{/*								: 'cursor-not-allowed bg-gray-50 text-gray-200',*/}
					{/*							active ? 'ring-2 ring-indigo-500' : '',*/}
					{/*							'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'*/}
					{/*						)*/}
					{/*					}*/}
					{/*				>*/}
					{/*					{({ active, checked }) => (*/}
					{/*						<>*/}
					{/*							<RadioGroup.Label as='span'>*/}
					{/*								{storeg.name}*/}
					{/*							</RadioGroup.Label>*/}
					{/*							{storeg.inStock ? (*/}
					{/*								<span*/}
					{/*									className={cn(*/}
					{/*										active ? 'border' : 'border-2',*/}
					{/*										checked*/}
					{/*											? 'border-indigo-500'*/}
					{/*											: 'border-transparent',*/}
					{/*										'pointer-events-none absolute -inset-px rounded-md'*/}
					{/*									)}*/}
					{/*									aria-hidden='true'*/}
					{/*								/>*/}
					{/*							) : (*/}
					{/*								<span*/}
					{/*									aria-hidden='true'*/}
					{/*									className='pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200'*/}
					{/*								>*/}
					{/*									<svg*/}
					{/*										className='absolute inset-0 h-full w-full stroke-2 text-gray-200'*/}
					{/*										viewBox='0 0 100 100'*/}
					{/*										preserveAspectRatio='none'*/}
					{/*										stroke='currentColor'*/}
					{/*									>*/}
					{/*										<line*/}
					{/*											x1={0}*/}
					{/*											y1={100}*/}
					{/*											x2={100}*/}
					{/*											y2={0}*/}
					{/*											vectorEffect='non-scaling-stroke'*/}
					{/*										/>*/}
					{/*									</svg>*/}
					{/*								</span>*/}
					{/*							)}*/}
					{/*						</>*/}
					{/*					)}*/}
					{/*				</RadioGroup.Option>*/}
					{/*			))}*/}
					{/*		</div>*/}
					{/*	</RadioGroup>*/}
					{/*</div>*/}

					{/* <button
									type='submit'
									className='mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
								>
									Добавит в карзину
								</button> */}
					<Cart />
				</form>
			</div>

			<div className='py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8'>
				{/* Description and details */}
				<div>
					<h3 className='sr-only'>Description</h3>

					<div className='space-y-6'>
						<p className='text-base text-gray-900'>{product.description}</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProdectInfo
