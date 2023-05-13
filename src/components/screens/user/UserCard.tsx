import { FC } from 'react'

import Layout from '@/layout/Layout'

import { useActions } from '@/hooks/useActions'

const UserCard: FC = () => {
	const { logout } = useActions()
	return (
		<Layout title='userCard'>
			<h2 className='text-3xl'>Личный кабинет</h2>
			<p className='text-xl'>У вас нет заказов</p>
			<button onClick={() => logout()}>logout</button>
		</Layout>
	)
}

export default UserCard
