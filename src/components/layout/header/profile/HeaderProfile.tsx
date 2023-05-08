import { useRouter } from 'next/router'
import { FC } from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi'

import SquaerButton from '@/ui/square-button/SquaerButton'

import { logout } from '@/store/user/user.actions'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

const HeaderProfile: FC = () => {
	const { user } = useAuth()
	const { logout } = useActions()

	const { push } = useRouter()

	const handleClick = () => {
		push('/auth')
	}
	return (
		<>
			<SquaerButton Icon={HiOutlineUserCircle} onClick={handleClick} />
			{!!user && <button onClick={() => logout()}>Logout</button>}
		</>
	)
}
export default HeaderProfile
