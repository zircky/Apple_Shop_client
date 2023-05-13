import { useRouter } from 'next/router'
import { FC } from 'react'
import { RiHeart3Line } from 'react-icons/ri'

import SquaerButton from '@/ui/square-button/SquaerButton'

const Favorite: FC = () => {
	const { push } = useRouter()

	const handleClick = () => {
		push('/favorites')
	}

	return <SquaerButton Icon={RiHeart3Line} onClick={handleClick} />
}

export default Favorite
