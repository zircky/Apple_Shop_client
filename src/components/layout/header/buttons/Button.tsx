import cn from 'clsx'
import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'dark' | 'light'
}

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	variant,
	...rest
}) => {
	return (
		<button
			{...rest}
			className={cn(
				'group relative flex w-full justify-center rounded-md bg-medium-magentap py-2 px-3 text-sm font-semibold text-white hover:bg-medium-magentap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
				{
					'text-dark-d bg-medium-magent': variant === 'dark',
					'text-white-ping bg-medium-magent': variant === 'light'
				},
				className
			)}
		>
			{children}
		</button>
	)
}
export default Button
