import Image from 'next/image'

import { NextPageAuth } from '@/providers/auth-provider/auth-page.types'

import { useProfile } from '@/hooks/useProfile'

const HeaderProfileAuth: NextPageAuth = () => {
	const { profile } = useProfile()
	return (
		<div>
			{profile?.avatarPath && (
				<Image
					height={43}
					width={43}
					src={profile?.avatarPath}
					alt={profile?.name}
					className='rounded-full border-primary border border-solid animate-opacity'
				/>
			)}
		</div>
	)
}
HeaderProfileAuth.isOnlyUser = true
export default HeaderProfileAuth
