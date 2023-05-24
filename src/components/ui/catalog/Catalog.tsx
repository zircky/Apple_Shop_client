import { FC } from 'react'

import ProductItem from '@/ui/catalog/product-item/ProductItem'
import Loader from '@/ui/loader/Loader'

import { IProduct } from '@/interface/product.interface'

interface ICatalog {
	products: IProduct[]
	isLoading?: boolean
	title?: string
	isPagination?: boolean
}
const Catalog: FC<ICatalog> = ({ products, isLoading, title }) => {
	if (isLoading) return <Loader />
	return (
		<>
			<div className='mx-auto max-w-2xl py-12 px-4 sm:py-9 sm:px-6 lg:max-w-7xl lg:px-8'>
				{title && (
					<h3 className='text-2xl font-bold tracking-tight text-gray-900'>
						{title}
					</h3>
				)}
				{products.length ? (
					<>
						<div className='mt-6 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-2'>
							{products.map(product => (
								<div
									className='group pt-[21px] pb-[19px] px-[20px]'
									key={product.id}
								>
									<ProductItem key={product.id} product={product} />
								</div>
							))}
						</div>
					</>
				) : (
					<div>There are no products</div>
				)}
			</div>
		</>
	)
}
export default Catalog
