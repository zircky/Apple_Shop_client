import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Layout from '@/layout/Layout'

import Catalog from '@/ui/catalog/Catalog'

import { IModel } from '@/interface/models.interface'
import { IProduct } from '@/interface/product.interface'

import { ModelService } from '@/services/model/model.service'
import { ProductService } from '@/services/product/product.service'

const ModelsPage: NextPage<{
	products: IProduct[]
	models: IModel
}> = ({ products, models }) => {
	return (
		<Layout title={models.name}>
			<Catalog products={products} title={models.name} />
		</Layout>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const models = await ModelService.getAll()

	const paths = models.data.map(models => {
		return {
			params: { slug: models.slug }
		}
	})
	return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { data: products } = await ProductService.getByModels(
		params?.slug as string
	)
	const { data: models } = await ModelService.getBySlug(params?.slug as string)

	return {
		props: {
			products,
			models
		}
	}
}

export default ModelsPage
