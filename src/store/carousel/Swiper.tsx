import {FC} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import {carousel} from "@/store/carousel/carousel.data";

const swiper: FC = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {carousel.map(item => (
                        <SwiperSlide className='relative'>
                            <div>
                                <p className={item.className}>{item.name}</p>
                                <p className={item.classTitle}>{item.title}</p>
                            </div>
                            <Image
                                className="object-fill w-full h-96"
                                src={item.imageSrc}
                                alt={item.imageAlt}
                            />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </>
    )
}
export default swiper