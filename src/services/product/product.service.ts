import { IProduct, TypePaginationProducts } from '@/interface/product.interface'

import { axiosClassic, instance } from '@/api/api.interceptor'

import {
	PRODUCTS,
	TypeProductData,
	TypeProductDataFilters
} from '@/services/product/product.types'

export const ProductService = {
	async getAll(queryData = {} as TypeProductDataFilters) {
		const { data } = await axiosClassic<TypePaginationProducts>({
			url: PRODUCTS,
			method: 'GET',
			params: queryData
		})
		return data
	},
	async getSimilar(id: string | number) {
		return axiosClassic<IProduct[]>({
			url: `${PRODUCTS}/similar/${id}`,
			method: 'GET'
		})
	},
	async getBySlug(slug: string) {
		return axiosClassic<IProduct>({
			url: `${PRODUCTS}/by-slug/${slug}`,
			method: 'GET'
		})
	},
	async getByCategory(categorySlug: string) {
		return axiosClassic<IProduct[]>({
			url: `${PRODUCTS}/by-category/${categorySlug}`,
			method: 'GET'
		})
	},

	async getByStorageCapacity(storageCapacitySlug: string) {
		return axiosClassic<IProduct[]>({
			url: `${PRODUCTS}/by-storageCapacity/${storageCapacitySlug}`,
			method: 'GET'
		})
	},
	async getByColors(colorsSlug: string) {
		return axiosClassic<IProduct[]>({
			url: `${PRODUCTS}/by-colors/${colorsSlug}`,
			method: 'GET'
		})
	},
	async getByModels(modelsSlug: string) {
		return axiosClassic<IProduct[]>({
			url: `${PRODUCTS}/by-models/${modelsSlug}`,
			method: 'GET'
		})
	},
	async getByCommunicationOptions(communicationOptionsSlug: string) {
		return axiosClassic<IProduct[]>({
			url: `${PRODUCTS}/by-communicationOptions/${communicationOptionsSlug}`,
			method: 'GET'
		})
	},
	async getByCPU(cpuSlug: string) {
		return axiosClassic<IProduct[]>({
			url: `${PRODUCTS}/by-cpu/${cpuSlug}`,
			method: 'GET'
		})
	},
	async getByGPU(gpuSlug: string) {
		return axiosClassic<IProduct[]>({
			url: `${PRODUCTS}/by-gpu/${gpuSlug}`,
			method: 'GET'
		})
	},
	async getByDiagonal(diagonalSlug: string) {
		return axiosClassic<IProduct[]>({
			url: `${PRODUCTS}/by-diagonal/${diagonalSlug}`,
			method: 'GET'
		})
	},
	async getBySize(sizeSlug: string) {
		return axiosClassic<IProduct[]>({
			url: `${PRODUCTS}/by-size/${sizeSlug}`,
			method: 'GET'
		})
	},
	async getByStrapType(strapTypeSlug: string) {
		return axiosClassic<IProduct[]>({
			url: `${PRODUCTS}/by-strapType/${strapTypeSlug}`,
			method: 'GET'
		})
	},
	async getById(id: string | number) {
		return instance<IProduct>({
			url: `${PRODUCTS}/${id}`,
			method: 'GET'
		})
	},
	async create() {
		return instance<IProduct>({
			url: PRODUCTS,
			method: 'POST'
		})
	},
	async update(id: string | number, data: TypeProductData) {
		return instance<IProduct>({
			url: `${PRODUCTS}/${id}`,
			method: 'PUT',
			data: { name }
		})
	},
	async delete(id: string | number) {
		return instance<IProduct>({
			url: `${PRODUCTS}/${id}`,
			method: 'DELETE'
		})
	}
}
