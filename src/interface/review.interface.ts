import { IUser } from '@/interface/user.interface'

export interface IReview {
	id: number
	user: IUser
	createdAt: string
	test: string
	rating: number
}
