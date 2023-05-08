import { useQuery } from '@tanstack/react-query'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

import Layout from '@/layout/Layout'

import { ProductService } from '@/services/product/product.service'

const SearchPage: NextPage = () => {
	const { query } = useRouter()
	const { data } = useQuery(['search products', query.term], () => {
		ProductService.getAll({
			searchTerm: query.term as string
		})
	})

	return (
		<Layout title='Поиск'>
			{/*<Catalog*/}
			{/*	products={data?.products || []}*/}
			{/*	title={`Потск по запросу "${query.term || ''}"`}*/}
			{/*/>*/}
		</Layout>
	)
}
export default SearchPage
