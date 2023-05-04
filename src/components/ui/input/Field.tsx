import cn from 'clsx'
import { forwardRef } from 'react'

import { IField } from '@/ui/input/Field.interface'

const Field = forwardRef<HTMLInputElement, IField>(
	(
		{ placeholder, error, className, type = 'text', style, Icon, ...rest },
		ref
	) => {
		return (
			<div className={cn('', className)} style={style}>
				<label>
					<span>
						{Icon && <Icon className='mr-3' />}
						{placeholder}
					</span>
					<input
						ref={ref}
						type={type}
						{...rest}
						className={cn(
							'relative block px-4 py-2 w-full outline-none rounded-t-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
							{
								'border-red': !!error
							}
						)}
					/>
				</label>
				{error && <div className='text-red mt-1'>{error}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'
export default Field
