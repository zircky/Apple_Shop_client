import Image from 'next/image'
import { FC } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

import { carousel } from '@/store/carousel/carousel.data'

const swiper: FC = () => {
	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 3500,
					disableOnInteraction: false
				}}
				pagination={{
					clickable: true
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className='mySwiper'
			>
				{carousel.map(item => (
					<SwiperSlide className=''>
						<div>
							<p className={item.className}>{item.name}</p>
							<p className={item.classTitle}>{item.title}</p>
						</div>
						<Image
							className='object-fill w-full h-96'
							src={item.imageSrc}
							alt={item.name}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}
export default swiper
