import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { catalogList } from '@/screens/home/catalogList'

const Catalog: FC = () => {
	return (
		<div className='bg-white'>
			<div className='mx-auto max-w-2xl pt-4 pb-6 px-4 lg:py-15 lg:px-6 xl:max-w-7xl lg:px-8'>
				<div className=' grid grid-cols-1 gap-y-10 gap-x-4 lg:grid-cols-2 xl:grid-cols-4 xl:gap-x-8'>
					{catalogList.map(product => (
						<div key={product.id} className='group relative'>
							<div className='min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80'>
								<Image
									src={product.images}
									alt={product.name}
									className='absolute inset-0 h-full w-full object-cover object-center m-auto  lg:h-[170px] lg:w-[170px] xl:h-[200px] xl:w-[200px]'
								/>
							</div>
							<div className='mt-4 flex justify-between'>
								<div>
									<h3 className='text-lg text-gray-700'>
										<Link href={product.link}>
											<span aria-hidden='true' className='absolute inset-0' />
											{product.name}
										</Link>
									</h3>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
export default Catalog
