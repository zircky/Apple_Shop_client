import { Dispatch, FC, SetStateAction } from 'react'

import { EnumProductSort } from '@/services/product/product.types'

interface ISortDropdown {
	sortType: EnumProductSort
	setSortType: Dispatch<SetStateAction<EnumProductSort>>
}

const SortDropdown: FC<ISortDropdown> = ({ setSortType, sortType }) => {
	return (
		<div className='text-right mb-5'>
			<select
				value={sortType}
				onChange={e => setSortType(e.target.value as any)}
				className='appearance-none py-1 px-2 bg-white border-gray'
			>
				{(
					Object.keys(EnumProductSort) as Array<keyof typeof EnumProductSort>
				).map(key => {
					return (
						<option key={EnumProductSort[key]} value={EnumProductSort[key]}>
							{EnumProductSort[key]}
						</option>
					)
				})}
			</select>
		</div>
	)
}
export default SortDropdown
