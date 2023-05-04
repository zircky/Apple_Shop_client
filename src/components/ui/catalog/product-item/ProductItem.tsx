import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import AddToCartButton from '@/ui/catalog/product-item/AddToCartButton'

import { IProduct } from '@/interface/product.interface'

const DynamicFavoriteButton = dynamic(() => import('./FavoriteButton'), {
	ssr: false
})

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div>
			<DynamicFavoriteButton productId={product.id} />
			<AddToCartButton product={product} />
			<div className='group relative'>
				<div className='min-h-[22rem] aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80'>
					<Image
						width={300}
						height={300}
						src={product.images[0]}
						alt={product.name}
					/>
				</div>
				{/*<div>{product.category.name}</div>*/}
				{/*<ProductRating product={product} />*/}
				<div className='mt-4 flex justify-between'>
					<div>
						<h3 className='text-sm text-gray-700'>
							<Link href={product.slug}>
								<span aria-hidden='true' className='absolute inset-0' />
								{product.name}
							</Link>
						</h3>
						<p className='text-sm font-bold text-gray-900'>{product.price}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
export default ProductItem
