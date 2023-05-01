import { IProduct } from '@/interface/product.interface'

export interface ICartItem {
	id: number
	product: IProduct
	quantity: number
	price: number
}
