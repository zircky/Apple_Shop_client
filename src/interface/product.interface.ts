import { ICategory } from '@/interface/category.interface'
import { IColors } from '@/interface/colors.interface'
import { ICommunicationOptions } from '@/interface/communicationOptions.interface'
import { ICPU } from '@/interface/cpu.interface'
import { IDiagonal } from '@/interface/diagonal.interface'
import { IGPU } from '@/interface/gpu.interface'
import { IModels } from '@/interface/models.interface'
import { IReview } from '@/interface/review.interface'
import { ISize } from '@/interface/size.interface'
import { IStorageCapacity } from '@/interface/storageCapacity.interface'
import { IStrapType } from '@/interface/strapType.interface'

export interface IProduct {
	id: number
	name: string
	slug: string
	description: string
	price: number
	reviews: IReview[]
	images: string[]
	createdAt: string
	category: ICategory
	storageCapacity: IStorageCapacity
	colors: IColors
	models: IModels
	communicationOptions: ICommunicationOptions
	cpu: ICPU
	gpu: IGPU
	diagonal: IDiagonal
	size: ISize
	strapType: IStrapType
}

export interface IProductDetails {
	product: IProduct
}

export type TypeProducts = {
	products: IProduct[]
}
export type TypePaginationProducts = {
	length: number
	products: IProduct[]
}
