import { FC } from 'react'

import styles from '@/components/screens/home/Home.module.scss'

import Layout from '@/layout/Layout'

// import { IProductsPage } from '@/../pages'
import Catalog from '@/screens/home/catalog'
import { catalogList } from './catalogList'

const Home: FC = () => {
	return (
		<Layout title='Home' description='QPICK — магазин техники Apple'>
			{/* <Carousel />
			<h3 className={styles.textsize}>
				Выберите <span>то, что вам нужно</span>
			</h3> */}
			<Catalog catalogs={catalogList}/>
		</Layout>
	)
}

export default Home
