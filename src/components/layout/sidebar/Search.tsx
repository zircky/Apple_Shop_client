import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { FC, FormEvent, useState } from 'react'
import { FaSearch } from 'react-icons/fa'

import { ProductService } from '@/services/product/product.service'

const Search: FC = () => {
	const router = useRouter()
	const { query } = router
	const [searchTerm, setSearchTerm] = useState('')
	const { data } = useQuery(['search products', searchTerm], () =>
		ProductService.getAll({
			searchTerm: searchTerm
		})
	)

	const handleSearch = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		router.push(`/q?term=${searchTerm}`)
	}

	return (
		<div className='relative'>
			<form onSubmit={handleSearch}>
				<input
					type='text'
					value={searchTerm}
					onChange={event => setSearchTerm(event.target.value)}
					placeholder='Поиск...'
					className='block w-full rounded-3xl border-0 mt-2 py-2.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
				/>
				<button
					type='submit'
					className='absolute top-[0.8rem] bottom-2 left-[21rem] '
				>
					<FaSearch width={9} height={9} />
				</button>
			</form>
		</div>
	)
}

export default Search
