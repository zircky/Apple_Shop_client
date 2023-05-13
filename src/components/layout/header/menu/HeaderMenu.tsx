import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'

import styles from './HeaderMenu.module.scss'
import MenuItem from './menu-item/MenuItem'
import { CategoryService } from '@/services/category/category.service'

const HeaderMenu: FC = () => {
	const { data } = useQuery(
		['get categories'],
		() => CategoryService.getAll(),
		{
			select: ({ data }) => data
		}
	)

	return (
		<div className={styles.menu}>
			<nav>
				{data ? (
					<ul>
						{data.map(category => (
							<MenuItem key={category.id} item={category} />
						))}
					</ul>
				) : (
					<div>cvvdd</div>
				)}
			</nav>
		</div>
		// <Column size={5}>
		// 	</Column>
	)
}

export default HeaderMenu
