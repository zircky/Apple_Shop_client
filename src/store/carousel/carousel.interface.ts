import {StaticImageData} from "next/image";

export interface ICarousel {
    imageSrc: StaticImageData;
    imageAlt: string;
    name: string;
    title: string;
    className?: string;
    classTitle?: string;
}