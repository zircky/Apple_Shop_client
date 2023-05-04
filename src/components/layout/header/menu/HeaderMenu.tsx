import { FC } from 'react'

import styles from './HeaderMenu.module.scss'
import MenuItem from './menu-item/MenuItem'
import { menu } from './menu.data'

const HeaderMenu: FC = () => {
	return (
		<div className={styles.menu}>
			<nav>
				<ul>
					{menu.map(item => (
						<MenuItem key={item.link} item={item} />
					))}
				</ul>
			</nav>
		</div>
		// <Column size={5}>
		// 	</Column>
	)
}

export default HeaderMenu
