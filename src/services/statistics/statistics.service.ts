import { instance } from '@/api/api.interceptor'

import {
	STATISTICS,
	TypeStatisticsResponse
} from '@/services/statistics/statistics.types'

export const StatisticsService = {
	async getMain() {
		return instance<TypeStatisticsResponse>({
			url: `${STATISTICS}/main`,
			method: 'GET'
		})
	}
}
