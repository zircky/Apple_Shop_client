import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import cn from 'clsx'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Loader from '@/ui/loader/Loader'

import { RootState, updateFilter, updateProducts } from '@/store/store'

import { useAuth } from '@/hooks/useAuth'

import { ModelService } from '@/services/model/model.service'

const FilterModels: FC = () => {
	const { data, isLoading } = useQuery(
		['get models'],
		() => ModelService.getByCategory('iphone'),
		{
			select: ({ data }) => data
		}
	)
	const dispatch = useDispatch()

	const filter = useSelector((state: RootState) => state.filter)
	const queryClient = useQueryClient()
	const router = useRouter()
	const { user } = useAuth()
	const { asPath } = useRouter()

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await axios.get('/api/products', {
				params: filter
			})
			const { data } = response
			dispatch(updateProducts(data))
		}

		fetchProducts()
	}, [dispatch, filter])

	const fetchFilters = async () => {
		try {
			const response = await axios.get('/api/filters')
			const { data } = response
			// Обновляем фильтры в хранилище Redux
			dispatch(updateFilter(data))
		} catch (error) {
			// Обработка ошибки при получении фильтров
			console.error('Ошибка при получении фильтров', error)
		}
	}

	useEffect(() => {
		fetchFilters()
	}, [])
	return (
		<div>
			{isLoading ? (
				<Loader />
			) : data ? (
				<>
					<div className='text-xl text-dark-d mt-4 mb-6 ml-6'>Models</div>
					<ul>
						{data.map(model => (
							<li key={model.id}>
								<button
									onClick={() => handleFilterChange('model', model.slug)}
									className={cn(
										'block text-sm my-3 px-10 hover:text-primary transition-colors duration-200',
										asPath === `/models/${model.slug}`
											? 'text-primary'
											: 'text-dark-d'
									)}
								>
									{model.name}
								</button>
							</li>
						))}
					</ul>
				</>
			) : (
				<div>Models not found!</div>
			)}
		</div>
	)
}

export default FilterModels
