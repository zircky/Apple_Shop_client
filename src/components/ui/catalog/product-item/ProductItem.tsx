import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import AddToCartButton from '@/ui/catalog/product-item/AddToCartButton'

import { IProduct } from '@/interface/product.interface'

import { convertPrice } from '@/utils/convertPrice'

import styles from './ProductItem.module.scss'

const DynamicFavoriteButton = dynamic(() => import('./FavoriteButton'), {
	ssr: false
})

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<>
			<div className={styles.bg}>
				<div className={styles.cart_img}>
					<Link href={`/product/${product.slug}`}>
						<Image
							width={200}
							height={200}
							src={product.images[0]}
							alt={product.name}
							className='w-full h-full absolute top-2/4 left-2/4'
						/>
					</Link>
				</div>
				{/*<div>{product.category.name}</div>*/}
				{/*<ProductRating product={product} />*/}
				<div>
					<h3 className='text-sm text-gray-700 h-24'>
						<Link href={`/product/${product.slug}`}>
							{/*<span aria-hidden='true' className='absolute inset-0' />*/}
							{product.name}
						</Link>
					</h3>
					<div className='grid grid-cols-6 gap-4'> </div>
					<div className='flex justify-between'>
						<p className='text-sm font-bold text-gray-900'>
							{convertPrice(product.price)}
						</p>
						<div className='flex pr-3'>
							<DynamicFavoriteButton productId={product.id} />
							<AddToCartButton product={product} />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default ProductItem
