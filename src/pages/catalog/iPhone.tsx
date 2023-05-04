import { GetStaticProps, NextPage } from 'next'

import IPhones from '@/components/screens/catalog/iphone/iPhones'

import { TypePaginationProducts } from '@/interface/product.interface'

import { ProductService } from '@/services/product/product.service'

const iPhonePage: NextPage<TypePaginationProducts> = ({ products }) => {
	return <IPhones products={products} length={length} />
}

export const getStaticProps: GetStaticProps<
	TypePaginationProducts
> = async () => {
	const { data } = await ProductService.getAll({
		page: 1,
		perPage: 48
	})

	return {
		props: data
	}
}

export default iPhonePage
