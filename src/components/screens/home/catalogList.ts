import { StaticImageData } from 'next/image'

import watch from '@/assets/images/applewatch.png'
import ipad from '@/assets/images/ipad.png'
import iphone from '@/assets/images/iphone.png'
import mac from '@/assets/images/mac.png'

export interface ICatalog {
	id: number
	images: StaticImageData
	slug: string
	name: string
}

export const catalogList: ICatalog[] = [
	{
		id: 1,
		name: 'iPhone',
		slug: 'iphone',
		images: iphone
	},
	{
		id: 2,
		name: 'iPad',
		slug: 'ipad',
		images: ipad
	},
	{
		id: 3,
		name: 'Watch',
		slug: 'apple-watch',
		images: watch
	},
	{
		id: 4,
		name: 'Mac',
		slug: 'mac',
		images: mac
	}
]
