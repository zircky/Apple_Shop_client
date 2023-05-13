import Link from 'next/link'
import { FC } from 'react'

import { ICategory } from '@/interface/category.interface'

interface ICategoryItem {
	item: ICategory
}

const MenuItem: FC<ICategoryItem> = ({ item }) => {
	return (
		<li>
			<Link href={`/catalog/${item.slug}`}>{item.name}</Link>
		</li>
	)
}

export default MenuItem
