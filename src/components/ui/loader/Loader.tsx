import { FC } from 'react'
import Image from "next/image";

import spinnerImage from "./spinner.svg"

const Loader: FC = () => {
	return (
		<Image src={spinnerImage.src} alt='loader' width={200} height={200}/>
	)
}

export default Loader
