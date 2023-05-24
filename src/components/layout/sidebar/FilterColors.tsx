import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import Loader from '@/ui/loader/Loader'

import { ColorService } from '@/services/colors/colors.service'

const FilterColors: FC = () => {
	const { data, isLoading } = useQuery(
		['get colors'],
		() => ColorService.getAll(),
		{
			select: ({ data }) => data
		}
	)

	const { asPath } = useRouter()

	return (
		<div>
			{isLoading ? (
				<Loader />
			) : data ? (
				<>
					<div className='text-xl text-dark-d mt-4 mb-6 ml-6'>Colors</div>
					<ul>
						{data.map(colors => (
							<li key={colors.id}>
								<Link
									className={cn(
										'block text-sm my-3 px-10 hover:text-primary transition-colors duration-200',
										asPath === `/colors/${colors.slug}`
											? 'text-primary'
											: 'text-dark-d'
									)}
									href={`/models/${colors.slug}`}
								>
									{colors.name}
								</Link>
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

export default FilterColors
