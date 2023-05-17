import { FC } from 'react'
import { ICatalog } from '@/screens/home/catalogList'
import CarouselItem from './carousel-item/CarouselItem'
import styles from './carousel.module.scss'

const Carousel: FC<{catalogs: ICatalog[]}> = ({catalogs}) => {
	return (
		<div className={styles.carousel}>
			{catalogs.map(catalog=> <CarouselItem catalog={catalog} key={catalog.id} />)}
		</div>
	)
}
export default Carousel
