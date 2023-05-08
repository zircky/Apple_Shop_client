import { FC } from 'react'

import Layout from '@/layout/Layout'
import Sidebar from '@/layout/sidebar/Sidebar'

import CatalogPaginotion from '@/ui/catalog/CatalogPaginotion'

import { TypePaginationProducts } from '@/interface/product.interface'

const iPhones: FC<TypePaginationProducts> = ({ products, length }) => {
	return (
		<Layout title='iPhone' description='Product all'>
			<div
				className='grid'
				style={{
					gridTemplateColumns: '1fr 4fr'
				}}
			>
				<Sidebar />
				<CatalogPaginotion title='iPhone' data={{ products, length }} />
			</div>
		</Layout>
	)
}
export default iPhones
