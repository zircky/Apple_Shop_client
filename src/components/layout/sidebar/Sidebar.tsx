import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import Loader from '@/ui/loader/Loader'

import { useAuth } from '@/hooks/useAuth'

import { ModelService } from '@/services/model/model.service'

const Sidebar: FC = () => {
	// const { data: category } = useQuery(
	// 	['get categories'],
	// 	() => CategoryService.getAll(),
	// 	{
	// 		select: ({category})=> category
	// 	}
	// )

	const { data, isLoading } = useQuery(
		['get models'],
		() => ModelService.getByCategory('iphone'),
		{
			select: ({ data }) => data
		}
	)

	const { asPath } = useRouter()
	const { user } = useAuth()

	return (
		<aside
			className='bg-[#fff] flex flex-col justify-between'
			style={{
				height: 'calc(100vh - 91px)'
			}}
		>
			<div>
				{isLoading ? (
					<Loader />
				) : data ? (
					<>
						<div className='text-xl text-dark-d mt-4 mb-6 ml-6'>Models</div>
						<ul>
							{data.map(model => (
								<li key={model.id}>
									<Link
										className={cn(
											'block text-lg my-3 px-10 hover:text-primary transition-colors duration-200',
											asPath === `/models/${model.slug}`
												? 'text-primary'
												: 'text-dark-d'
										)}
										href={`/models/${model.slug}`}
									>
										{model.name}
									</Link>
								</li>
							))}
						</ul>
					</>
				) : (
					<div>Models not found!</div>
				)}
			</div>
		</aside>
	)
}
export default Sidebar
