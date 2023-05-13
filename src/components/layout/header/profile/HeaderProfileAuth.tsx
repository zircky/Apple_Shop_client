import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { useActions } from '@/hooks/useActions'
import { useProfile } from '@/hooks/useProfile'

const HeaderProfileAuth: FC = () => {
	const { profile } = useProfile()
	const { logout } = useActions()

	const { push } = useRouter()

	const handleClick = () => {
		push('/user')
	}

	return (
		<div>
			{profile?.avatarPath && (
				<button onClick={handleClick}>
					<Image
						height={43}
						width={43}
						src={profile?.avatarPath}
						alt={profile?.name}
						className='rounded-full animate-opacity'
					/>
				</button>
			)}
		</div>
	)
}

export default HeaderProfileAuth
