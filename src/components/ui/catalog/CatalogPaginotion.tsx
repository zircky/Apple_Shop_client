import { useQuery } from '@tanstack/react-query'
import { FC, useState } from 'react'

import Button from '@/layout/header/buttons/Button'

import SortDropdown from '@/ui/catalog/SortDropdown'
import ProductItem from '@/ui/catalog/product-item/ProductItem'
import Loader from '@/ui/loader/Loader'

import { TypePaginationProducts } from '@/interface/product.interface'

import { ProductService } from '@/services/product/product.service'
import { EnumProductSort } from '@/services/product/product.types'

interface ICatalogPaginotion {
	data: TypePaginationProducts
	title?: string
}
const CatalogPaginotion: FC<ICatalogPaginotion> = ({ data, title }) => {
	const [page, setPage] = useState(1)

	const [sortType, setSortType] = useState<EnumProductSort>(
		EnumProductSort.NEWEST
	)

	const { data: response, isLoading } = useQuery(
		['products', sortType, page],
		() =>
			ProductService.getAll({
				page,
				perPage: 24,
				sort: sortType
			}),
		{
			initialData: data,
			keepPreviousData: true
		}
	)

	if (isLoading) return <Loader />
	return (
		<>
			<div className='mx-auto max-w-2xl py-12 px-4 sm:py-9 sm:px-6 lg:max-w-7xl lg:px-8'>
				{title && (
					<h3 className='text-2xl font-bold tracking-tight text-gray-900'>
						{title}
					</h3>
				)}
				<SortDropdown sortType={sortType} setSortType={setSortType} />
				{response.products.length ? (
					<>
						<div className='mt-6 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-2'>
							{response.products.map(product => (
								<div className='group pt-[21px] pb-[19px] px-[20px]' key={product.id}>
									<ProductItem key={product.id} product={product} />
								</div>
							))}
						</div>
						<div className='text-center mt-16'>
							{Array.from({ length: response.length / 24 }).map((_, index) => {
								const pageNumber = index + 1
								return (
									<Button
										key={pageNumber}
										size='sm'
										variant={page === pageNumber ? 'dark' : 'light'}
										onClick={() => setPage(pageNumber)}
										className='mx-3'
									>
										{pageNumber}
									</Button>
								)
							})}
						</div>
					</>
				) : (
					<div>There are no products</div>
				)}
			</div>
		</>
	)
}
export default CatalogPaginotion
