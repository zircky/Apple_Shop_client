import { useRouter } from 'next/router'
import { FC } from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi'

import SquaerButton from '@/ui/square-button/SquaerButton'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useProfile } from '@/hooks/useProfile'

import HeaderProfileAuth from './HeaderProfileAuth'

const HeaderProfile: FC = () => {
	const { user } = useAuth()
	const { logout } = useActions()
	const { profile } = useProfile()
	const { push } = useRouter()

	const handleClick = () => {
		push('/auth')
	}
	return (
		<>
			{user ? (
				<div>
					<HeaderProfileAuth />
				</div>
			) : (
				<SquaerButton Icon={HiOutlineUserCircle} onClick={handleClick} />
			)}
		</>
	)
}
export default HeaderProfile
