import { IModel } from '@/interface/models.interface'

import { axiosClassic, instance } from '@/api/api.interceptor'

import { MODELS } from '@/services/model/model.type'

export const ModelService = {
	async getAll() {
		return axiosClassic<IModel[]>({
			url: MODELS,
			method: 'GET'
		})
	},
	async getById(id: string | number) {
		return instance<IModel>({
			url: `${MODELS}/${id}`
		})
	},
	async getBySlug(slug: string) {
		return axiosClassic<IModel>({
			url: `${MODELS}/by-slug/${slug}`,
			method: 'GET'
		})
	},
	async getByCategory(categorySlug: string) {
		return axiosClassic<IModel[]>({
			url: `${MODELS}/by-category/${categorySlug}`,
			method: 'GET'
		})
	},
	async create() {
		return instance<IModel>({
			url: MODELS,
			method: 'POST'
		})
	},
	async update(id: string | number, name: string) {
		return instance<IModel>({
			url: `${MODELS}/${id}`,
			method: 'PUT',
			data: { name }
		})
	},
	async delete(id: string | number) {
		return instance<IModel>({
			url: `${MODELS}/${id}`,
			method: 'DELETE'
		})
	}
}
