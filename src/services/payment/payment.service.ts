import { IPaymentResponse } from '@/interface/payment.interface'

import { instance } from '@/api/api.interceptor'

import { PAYMENT } from '@/services/payment/payment.types'

export const PaymentService = {
	async createPayment(amount: number) {
		return instance.post<IPaymentResponse>(PAYMENT, {
			amount
		})
	}
}
