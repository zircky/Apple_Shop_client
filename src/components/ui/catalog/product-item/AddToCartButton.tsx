import { FC } from 'react'
import { HiOutlineShoppingCart, HiShoppingCart } from 'react-icons/hi'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

import { IProduct } from '@/interface/product.interface'

const AddToCartButton: FC<{ product: IProduct }> = ({ product }) => {
	const { addToCart, removeFromCart } = useActions()
	const { items } = useCart()

	const currentElement = items.find(
		cartItem => cartItem.product.id === product.id
	)

	return (
		<div className='pl-2.5'>
			<button
				onClick={() =>
					currentElement
						? removeFromCart({ id: currentElement.id })
						: addToCart({
								product,
								quantity: 1,
								price: product.price
						  })
				}
			>
				{currentElement ? <HiShoppingCart /> : <HiOutlineShoppingCart />}
			</button>
		</div>
	)
}
export default AddToCartButton
