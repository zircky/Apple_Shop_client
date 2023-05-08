import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { IProductDetails } from '@/interface/product.interface'

import ProductDetails from '@/screens/product-details/ProductDetails'
import { ProductService } from '@/services/product/product.service'

const ProductDetailsPage: NextPage<IProductDetails> = ({ product }) => {
	return <ProductDetails product={product} />
}

export const getStaticPaths: GetStaticPaths = async () => {
	const { products } = await ProductService.getAll()
	const paths = products.map(product => {
		return {
			params: { slug: product.slug }
		}
	})

	return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps<IProductDetails> = async ({
	params
}) => {
	const { data: product } = await ProductService.getBySlug(
		params?.slug as string
	)
	return {
		props: {
			product
		}
	}
}

export default ProductDetailsPage
