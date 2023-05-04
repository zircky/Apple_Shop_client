import { FC } from 'react'

import ProductItem from '@/ui/catalog/product-item/ProductItem'
import Loader from '@/ui/loader/Loader'

import { IProduct } from '@/interface/product.interface'

interface ICatalog {
	products: IProduct[]
	isLoading?: boolean
	title?: string
}
const Catalog: FC<ICatalog> = ({ products, isLoading, title }) => {
	if (isLoading) return <Loader />
	return (
		<section>
			{title && <h3>{title}</h3>}
			{products.length ? (
				products.map(product => (
					<ProductItem key={product.id} product={product} />
				))
			) : (
				<div>There are no products</div>
			)}
		</section>
	)
}
export default Catalog
