import Image from 'next/image'
import { FC } from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi'

import SquaerButton from '@/ui/square-button/SquaerButton'

import { useProfile } from '@/hooks/useProfile'

const HeaderProfile: FC = () => {
	return (
		<>
			<SquaerButton Icon={HiOutlineUserCircle} onClick={() => {}} />
		</>
		// <Column size={3} className='flex items-center'>
		//     </Column>
	)
}
export default HeaderProfile
