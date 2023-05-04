import cn from 'clsx'
import { FC } from 'react'
import { IconType } from 'react-icons'

interface ISquaerButton {
	Icon: IconType
	onClick?: () => void
	number?: number
	className?: string
}

const SquaerButton: FC<ISquaerButton> = ({
	Icon,
	onClick,
	number,
	className
}) => {
	return (
		<button
			onClick={onClick}
			className={cn(
				'h-9 w-9 flex items-center justify-center hover:bg-[#9F9F9D] transition-colors duration-200 relative',
				className
			)}
		>
			{!!number && (
				<span
					className='flex h-4 w-4 items-center
                justify-center rounded-full bg-primary p-0.5 text-[0.75rem] text-white absolute -top-1 -right-1'
				>
					{number}
				</span>
			)}
			<Icon color='#101010' size={25} />
		</button>
	)
}

export default SquaerButton
