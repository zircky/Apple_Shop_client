import { IColors } from '@/interface/colors.interface'

import { axiosClassic, instance } from '@/api/api.interceptor'

import { COLORS } from '@/services/colors/colors.types'

export const ColorService = {
	async getAll() {
		return axiosClassic<IColors[]>({
			url: COLORS,
			method: 'GET'
		})
	},
	async getById(id: string | number) {
		return instance<IColors>({
			url: `${COLORS}/${id}`,
			method: 'GET'
		})
	},
	async getBySlug(slug: string) {
		return axiosClassic<IColors>({
			url: `${COLORS}/by-slug/${slug}`,
			method: 'GET'
		})
	},
	async create() {
		return instance<IColors>({
			url: COLORS,
			method: 'POST'
		})
	},
	async update(id: string | number, name: string) {
		return instance<IColors>({
			url: `${COLORS}/${id}`,
			method: 'PUT',
			data: { name }
		})
	},
	async delete(id: string | number) {
		return instance<IColors>({
			url: `${COLORS}/${id}`,
			method: 'DELETE'
		})
	}
}
