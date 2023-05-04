import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import { useProfile } from '@/hooks/useProfile'

import { UserService } from '@/services/user/user.service'

const FavoriteButton: FC<{ productId: number }> = ({ productId }) => {
	const { profile } = useProfile()

	const queryClient = useQueryClient()

	const { mutate } = useMutation(
		['toggle favorite'],
		() => UserService.toggleFavorite(productId),
		{
			onSuccess() {
				queryClient.invalidateQueries(['get profile'])
			}
		}
	)

	if (!profile) return null

	const isExists = profile.favorites.some(favorite => favorite.id === productId)

	return (
		<div>
			<button onClick={() => mutate()}>
				{isExists ? <AiFillHeart /> : <AiOutlineHeart />}
			</button>
		</div>
	)
}
export default FavoriteButton
