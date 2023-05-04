import { FC } from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import Slider from 'react-slick'

const CarouselStore: FC<{
	slides: { id: number; imageUrl: string; name: string; title: string }[]
}> = ({ slides }) => {
	const settings: SliderSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />
	}

	interface SliderSettings {
		dots: boolean
		infinite: boolean
		speed: number
		slidesToShow: number
		slidesToScroll: number
		nextArrow: JSX.Element
		prevArrow: JSX.Element
	}

	const NextArrow: FC<{ onClick: () => void }> = props => {
		const { onClick } = props
		return (
			<div className='absolute top-1/2 -mt-4 right-4 z-10'>
				<button
					className='text-4xl text-gray-700 hover:text-gray-900 transition ease-in-out duration-150 focus:outline-none'
					onClick={onClick}
				>
					<FaArrowAltCircleRight />
				</button>
			</div>
		)
	}

	const PrevArrow: FC<{ onClick: () => void }> = props => {
		const { onClick } = props
		return (
			<div className='absolute top-1/2 -mt-4 left-4 z-10'>
				<button
					className='text-4xl text-gray-700 hover:text-gray-900 transition ease-in-out duration-150 focus:outline-none'
					onClick={onClick}
				>
					<FaArrowAltCircleLeft />
				</button>
			</div>
		)
	}

	return (
		<div className='w-full'>
			<Slider {...settings}>
				{slides.map(slide => (
					<div key={slide.id}>
						<img
							src={slide.imageUrl}
							alt={slide.name}
							className='object-cover h-64 w-full'
						/>
						<div className='bg-white rounded-lg shadow-lg p-4 mt-4'>
							<h3 className='text-lg font-medium text-gray-900'>
								{slide.name}
							</h3>
							<p className='mt-2 text-gray-600'>{slide.title}</p>
						</div>
					</div>
				))}
			</Slider>
		</div>
	)
}
export default CarouselStore
