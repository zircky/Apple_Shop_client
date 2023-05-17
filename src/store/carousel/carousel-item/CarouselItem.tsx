import { FC } from 'react'
import { ICarousel } from '../carousel.interface'
import Image from 'next/image'
import { ICatalog } from '@/screens/home/catalogList'
import styles from '../carousel.module.scss'
import cn from 'clsx'

const isActive = true

const CarouselItem: FC<{catalog: ICatalog}> = ({catalog}) => {
  return <div className={cn(styles.item, {
    [styles.active]: isActive
  })}>

    <Image className={styles.image} src={catalog.images} alt={catalog.name}  width={320} height={320}/>

    <div className={styles.heading}>
        {catalog.name}
    </div>

  </div>
}

export default CarouselItem