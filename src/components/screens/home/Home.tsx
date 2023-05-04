import { FC } from 'react'

import styles from '@/components/screens/home/Home.module.scss'

import Layout from '@/layout/Layout'

import Swiper from '@/store/carousel/Swiper'

// import { IProductsPage } from '@/../pages'
import Catalog from '@/screens/home/catalog'

const Home: FC = () => {
	return (
		<Layout title='Home' description='Home Apple'>
			<Swiper />
			<h3 className={styles.textsize}>
				Выберите <span>то, что вам нужно</span>
			</h3>
			<Catalog />
		</Layout>
	)
}

export default Home
