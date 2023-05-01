import { IOrder } from '@/interface/order.interface'

import { instance } from '@/api/api.interceptor'

import { ORDERS } from '@/services/order/order.types'

export const OrderService = {
	async getAll() {
		return instance<IOrder[]>({
			url: ORDERS,
			method: 'GET'
		})
	}
}
