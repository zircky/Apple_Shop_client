import { StaticImageData } from 'next/image'

export interface ICarousel {
	imageSrc: StaticImageData
	name: string
	title: string
	className?: string
	classTitle?: string
}

export interface IProps {
	images: string[]
	captions?: {
		name: string
		title: string
		className?: string
		classTitle?: string
	}[]
}
