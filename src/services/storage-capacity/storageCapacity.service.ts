import { IStorageCapacity } from '@/interface/storageCapacity.interface'

import { axiosClassic, instance } from '@/api/api.interceptor'

import { STORAGECAPACITY } from '@/services/storage-capacity/storageCapacity.types'

export const StorageCapacityService = {
	async getAll() {
		return axiosClassic<IStorageCapacity[]>({
			url: STORAGECAPACITY,
			method: 'GET'
		})
	},
	async getById(id: string | number) {
		return instance<IStorageCapacity>({
			url: `${STORAGECAPACITY}/${id}`,
			method: 'GET'
		})
	},
	async getBySlug(slug: string) {
		return axiosClassic<IStorageCapacity>({
			url: `${STORAGECAPACITY}/by-slug/${slug}`,
			method: 'GET'
		})
	},
	async create() {
		return instance<IStorageCapacity>({
			url: STORAGECAPACITY,
			method: 'POST'
		})
	},
	async update(id: string | number, name: string) {
		return instance<IStorageCapacity>({
			url: `${STORAGECAPACITY}/${id}`,
			method: 'PUT',
			data: { name }
		})
	},
	async delete(id: string | number) {
		return instance<IStorageCapacity>({
			url: `${STORAGECAPACITY}/${id}`,
			method: 'DELETE'
		})
	}
}
