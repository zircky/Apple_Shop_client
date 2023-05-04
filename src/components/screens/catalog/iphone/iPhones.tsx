import { FC } from 'react'

import Layout from '@/layout/Layout'

import Catalog from '@/ui/catalog/Catalog'

import { TypePaginationProducts } from '@/interface/product.interface'

const iPhones: FC<TypePaginationProducts> = ({ products, length }) => {
	return (
		<Layout title='iPhone' description='Product all'>
			<div className='bg-white'>
				<div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
					<h2 className='text-2xl font-bold tracking-tight text-gray-900'>
						iPhone
					</h2>

					<div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
						<Catalog products={products || []} />
					</div>
				</div>
			</div>
		</Layout>
	)
}
export default iPhones
