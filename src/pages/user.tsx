import { NextPageAuth } from '@/providers/auth-provider/auth-page.types'

import UserCard from '@/screens/user/UserCard'

const UserPage: NextPageAuth = () => {
	return <UserCard />
}

UserPage.isOnlyUser = true
export default UserPage
