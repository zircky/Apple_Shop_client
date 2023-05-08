import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Layout from '@/layout/Layout'

import Catalog from '@/ui/catalog/Catalog'

import { ICategory } from '@/interface/category.interface'
import { IProduct } from '@/interface/product.interface'

import { CategoryService } from '@/services/category/category.service'
import { ProductService } from '@/services/product/product.service'

const CategoryPage: NextPage<{
	products: IProduct[]
	category: ICategory
}> = ({ products, category }) => {
	return (
		<Layout title={category.name}>
			<Catalog products={products} title={category.name} />
		</Layout>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const categories = await CategoryService.getAll()

	const paths = categories.data.map(category => {
		return {
			params: { slug: category.slug }
		}
	})
	return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { data: products } = await ProductService.getByCategory(
		params?.slug as string
	)
	const { data: category } = await CategoryService.getBySlug(
		params?.slug as string
	)

	return {
		props: {
			products,
			category
		}
	}
}

export default CategoryPage
