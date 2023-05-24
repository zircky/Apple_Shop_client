import { ICPU } from '@/interface/cpu.interface'

import { axiosClassic, instance } from '@/api/api.interceptor'

import { CPU } from '@/services/cpu/cpu.types'

const CpuService = {
	async getAll() {
		return axiosClassic<ICPU[]>({
			url: CPU,
			method: 'GET'
		})
	},
	async getById(id: string | number) {
		return instance<ICPU>({
			url: `${CPU}/${id}`,
			method: 'GET'
		})
	},
	async getBySlug(slug: string) {
		return axiosClassic<ICPU>({
			url: `${CPU}/by-slug/${slug}`,
			method: 'GET'
		})
	},
	async create() {
		return instance<ICPU>({
			url: CPU,
			method: 'POST'
		})
	},
	async update(id: string | number, name: string) {
		return instance<ICPU>({
			url: `${CPU}/${id}`,
			method: 'PUT',
			data: { name }
		})
	},
	async delete(id: string | number) {
		return instance<ICPU>({
			url: `${CPU}/${id}`,
			method: 'DELETE'
		})
	}
}

export default CpuService
