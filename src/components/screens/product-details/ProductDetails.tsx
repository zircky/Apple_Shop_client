import Image from 'next/image'
import { FC } from 'react'

import Layout from '@/layout/Layout'
import Cart from '@/layout/header/buttons/cart/Cart'

import ProductRating from '@/ui/catalog/product-item/ProductRating'

import { IProductDetails } from '@/interface/product.interface'

import { convertPrice } from '@/utils/convertPrice'
import ProductInfo from './ProductInfo'

const ProductDetails: FC<IProductDetails> = ({ product }) => {
	return (
		<Layout title={product.name} description={product.description}>
			<div className='bg-white'>
				<div className='pt-6'>
					{/* Image gallery */}
					<div className='mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8'>
						<div className='aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block'>
							<Image
								src={product.images[0]}
								alt={product.name}
								className='w-full h-full object-cover object-center'
								width={256}
								height={256}
							/>
						</div>
					</div>

					{/* Product info */}
					<div className='mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24'>
						<ProductInfo product={product}/>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default ProductDetails
