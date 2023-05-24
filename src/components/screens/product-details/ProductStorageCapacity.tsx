import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'

import Loader from '@/ui/loader/Loader'

import { StorageCapacityService } from '@/services/storage-capacity/storageCapacity.service'

const ProductStorageCapacity: FC = () => {
	const { data, isLoading } = useQuery(
		['get storage-capacity'],
		() => StorageCapacityService.getAll(),
		{
			select: ({ data }) => data
		}
	)
	return (
		<div className='mt-10'>
			<div className='flex items-center justify-between'>
				<h3 className='text-sm font-medium text-gray-900'>
					Выберите объём накопителя:
				</h3>
			</div>
			<div className='mt-4'>
				<div className='grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4'>
					{isLoading ? (
						<Loader />
					) : data ? (
						<>
							{data.slice(1, 5).map(storage => (
								<button>{storage.name}</button>
							))}
						</>
					) : (
						<div>Storage Capacity not found!</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default ProductStorageCapacity
