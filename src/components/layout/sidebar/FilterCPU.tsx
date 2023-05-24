import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import Loader from '@/ui/loader/Loader'

import CpuService from '@/services/cpu/cpu.service'

const FilterCpu: FC = () => {
	const { data, isLoading } = useQuery(['get cpu'], () => CpuService.getAll(), {
		select: ({ data }) => data
	})

	const { asPath } = useRouter()

	return (
		<div>
			{isLoading ? (
				<Loader />
			) : data ? (
				<>
					<div className='text-xl text-dark-d mt-4 mb-6 ml-6'>CPU</div>
					<ul>
						{data.map(cpu => (
							<li key={cpu.id}>
								<Link
									className={cn(
										'block text-sm my-3 px-10 hover:text-primary transition-colors duration-200',
										asPath === `/cpu/${cpu.slug}`
											? 'text-primary'
											: 'text-dark-d'
									)}
									href={`/cpu/${cpu.slug}`}
								>
									{cpu.name}
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

export default FilterCpu
