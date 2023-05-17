import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { ICatalog, catalogList } from '@/screens/home/catalogList'
import Carousel from '@/store/carousel/Carousel'

const Catalog: FC<{catalogs: ICatalog[]}> = ({catalogs}) => {
	return <Carousel catalogs={catalogs} />
}
export default Catalog
