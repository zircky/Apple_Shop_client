import { RadioGroup } from '@headlessui/react'
import cn from 'clsx'
import { FC } from 'react'

import Cart from '@/layout/header/buttons/cart/Cart'

import ProductRating from '@/ui/catalog/product-item/ProductRating'

import { IProductDetails } from '@/interface/product.interface'

import { convertPrice } from '@/utils/convertPrice'

import ProductColors from '@/screens/product-details/ProductColors'
import ProductStorageCapacity from '@/screens/product-details/ProductStorageCapacity'

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
					{/*<ProductColors product={product} />*/}

					{/*/!* StorageCapacity *!/*/}
					<ProductStorageCapacity />

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
