import { IFullUser, IUser } from '@/interface/user.interface'

import { instance } from '@/api/api.interceptor'

import { TypeUserData, USERS } from '@/services/user/user.types'

export const UserService = {
	async getProfile() {
		return instance<IFullUser>({
			url: `${USERS}/profile`,
			method: 'GET'
		})
	},
	async updateProfile(data: TypeUserData) {
		return instance<IUser>({
			url: `${USERS}/profile`,
			method: 'PUT',
			data
		})
	},
	async toggleFavorite(productId: string | number) {
		return instance<IUser>({
			url: `${USERS}/profile/favorites/${productId}`,
			method: 'PATCH'
		})
	}
}
