import { FC } from 'react'

import FilterCPU from '@/layout/sidebar/FilterCPU'
import FilterColors from '@/layout/sidebar/FilterColors'
import FilterModels from '@/layout/sidebar/FilterModels'
import FilterPrice from '@/layout/sidebar/FilterPrice'
import FilterStorageCapacity from '@/layout/sidebar/FilterStorageCapacity'
import Search from '@/layout/sidebar/Search'

const Sidebar: FC = () => {
	return (
		<aside
			className='bg-[#fff] flex flex-col justify-between'
			style={{
				height: 'calc(100vh - 91px)'
			}}
		>
			<Search />
			<FilterModels />
			<FilterPrice />
			<FilterColors />
			<FilterCPU />
			<FilterStorageCapacity />
		</aside>
	)
}
export default Sidebar
