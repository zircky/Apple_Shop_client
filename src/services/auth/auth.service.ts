import Cookies from 'js-cookie'
import * as process from 'process'

import { IAuthResponse, IEmailPassword } from '@/store/user/user.interface'

import { getContentType } from '@/api/api.helper'
import { axiosClassic } from '@/api/api.interceptor'

import { seveToStorage } from '@/services/auth/auth.helper'
import { AUTH } from '@/services/auth/auth.types'

export const AuthService = {
	async main(type: 'login' | 'register', data: IEmailPassword) {
		const response = await axiosClassic<IAuthResponse>({
			url: `/${AUTH}/${type}`,
			method: 'POST',
			data
		})
		if (response.data.accessToken) seveToStorage(response.data)

		return response.data
	},

	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken')

		const response = await axiosClassic.post<
			string,
			{
				data: IAuthResponse
			}
		>(
			process.env.SERVER_URL + `/${AUTH}/login/access-token`,
			{ refreshToken },
			{ headers: getContentType() }
		)
		if (response.data.accessToken) seveToStorage(response.data)

		return response
	}
}
