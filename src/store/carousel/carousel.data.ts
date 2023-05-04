import { ICarousel } from '@/store/carousel/carousel.interface'
import apple_watch_series_8_large from '@/store/carousel/img/apple_watch_series_8_large.jpg'
import homepod_large from '@/store/carousel/img/homepod_large.jpg'
import iphone14_largetall from '@/store/carousel/img/iphone14_largetall.jpg'
import iphone14pro_largetall from '@/store/carousel/img/iphone14pro_largetall.jpg'
import macbookpro_large from '@/store/carousel/img/macbookpro_large.jpg'

export const carousel: ICarousel[] = [
	{
		imageSrc: [iphone14_largetall],
		name: 'iPhone 14',
		title: 'Большой. И пребольшой.',
		className: 'text-dark-d absolute left-[46%] top-[5%]',
		classTitle: 'text-dark-d absolute left-[41%] top-[13%]'
	},
	{
		imageSrc: [homepod_large],
		name: 'HomePod',
		title: 'Глубокий звук',
		className: 'text-[#ffffff] absolute left-[47%] top-[5%]',
		classTitle: 'text-[#ffffff] absolute left-[45%] top-[13%]'
	},
	{
		imageSrc: [iphone14pro_largetall],
		name: 'iPhone 14 Pro',
		title: 'За пределами',
		className: 'text-[#ffffff] absolute left-[45%] top-[5%]',
		classTitle: 'text-[#ffffff] absolute left-[45%] top-[13%]'
	},
	{
		imageSrc: [apple_watch_series_8_large],
		name: 'Новые Apple Watch',
		title: 'Здоровый скачок вперед.',
		className: 'text-[#ffffff] absolute left-[43%] top-[5%]',
		classTitle: 'text-[#ffffff] absolute left-[41%] top-[13%]'
	},
	{
		imageSrc: [macbookpro_large],
		name: 'MacBook Pro',
		title: 'С суперсилой M2 Pro и M2 Max',
		className: 'text-[#ffffff] absolute left-[47%] top-[5%]',
		classTitle: 'text-[#ffffff] absolute left-[40%] top-[13%]'
	}
]
