import { ICategory } from '@/interface/category.interface'

import { axiosClassic, instance } from '@/api/api.interceptor'

import { CATEGORIES } from '@/services/category/category.types'

export const CategoryService = {
	async getAll() {
		return axiosClassic<ICategory[]>({
			url: CATEGORIES,
			method: 'GET'
		})
	},
	async getById(id: string | number) {
		return instance<ICategory>({
			url: `${CATEGORIES}/${id}`,
			method: 'GET'
		})
	},
	async getBySlug(slug: string) {
		return axiosClassic<ICategory>({
			url: `${CATEGORIES}/by-slug/${slug}`,
			method: 'GET'
		})
	},
	async create() {
		return instance<ICategory>({
			url: CATEGORIES,
			method: 'POST'
		})
	},
	async update(id: string | number, name: string) {
		return instance<ICategory>({
			url: `${CATEGORIES}/${id}`,
			method: 'PUT',
			data: { name }
		})
	},
	async delete(id: string | number) {
		return instance<ICategory>({
			url: `${CATEGORIES}/${id}`,
			method: 'DELETE'
		})
	}
}
