import Link from 'next/link'
import { FC } from 'react'

import { IMenuLink } from './menu-item.interface'
import cn from "clsx";

interface IMenuItem {
	item: IMenuLink
}

const MenuItem: FC<IMenuItem> = ({ item }) => {
	return (
		<li>
			<Link href={item.link} className={cn(
				item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
				'rounded-md px-3 py-2 text-lg font-medium'
			)}
				  aria-current={item.current ? 'page' : undefined}>{item.name}</Link>
		</li>
	)
}

export default MenuItem
