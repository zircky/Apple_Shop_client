import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import Loader from '@/ui/loader/Loader'

import { StorageCapacityService } from '@/services/storage-capacity/storageCapacity.service'

const FilterStorageCapacity: FC = () => {
	const { data, isLoading } = useQuery(
		['get storage-capacity'],
		() => StorageCapacityService.getAll(),
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
					<div className='text-xl text-dark-d mt-4 mb-6 ml-6'>Storage</div>
					<ul>
						{data.slice(0, 5).map(storage => (
							<li key={storage.id}>
								<Link
									className={cn(
										'block text-sm my-3 px-10 hover:text-primary transition-colors duration-200',
										asPath === `/storage-capacity/${storage.slug}`
											? 'text-primary'
											: 'text-dark-d'
									)}
									href={`/models/${storage.slug}`}
								>
									{storage.name}
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

export default FilterStorageCapacity
