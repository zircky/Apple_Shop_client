import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Layout from '@/layout/Layout'
import Button from '@/layout/header/buttons/Button'

import Field from '@/ui/input/Field'
import Loader from '@/ui/loader/Loader'

import { IEmailPassword } from '@/store/user/user.interface'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { useAuthRedirect } from '@/screens/auth/useAuthRedirect'
import { validEmail } from '@/screens/auth/valid-email'

const Auth: FC = () => {
	useAuthRedirect()
	const { isLoading } = useAuth()
	const { login, register } = useActions()
	const [type, setType] = useState<'login' | 'register'>()

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IEmailPassword>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IEmailPassword> = data => {
		if (type === 'login') login(data)
		else register(data)

		reset()
	}

	return (
		<Layout title={'auth'}>
			<div className='flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
				<div className='w-full max-w-md space-y-8'>
					<form onSubmit={handleSubmit(onSubmit)} className='mt-8 space-y-6'>
						<h1 className='capitalize text-center text-3xl font-semibold md-4'>
							{type}
						</h1>
						{isLoading ? (
							<Loader />
						) : (
							<>
								<Field
									{...formRegister('email', {
										required: 'Email is required',
										pattern: {
											value: validEmail,
											message: 'Please enter a valid email address'
										}
									})}
									type='email'
									placeholder='Email'
									error={errors.email?.message}
								/>
								<Field
									{...formRegister('password', {
										required: 'Password is required',
										minLength: {
											value: 6,
											message: 'Min length should more 6 symbols'
										}
									})}
									type='password'
									placeholder='Password'
									error={errors.password?.message}
								/>
								<Button type={'submit'} variant='dark'>
									Sign in
								</Button>{' '}
								<div>
									<button
										type='button'
										className='inline-block opacity-50 mt-3 text-sm'
										onClick={() =>
											setType(type === 'login' ? 'register' : 'login')
										}
									>
										{type === 'login' ? 'Register' : 'Login'}
									</button>
								</div>
							</>
						)}
					</form>
				</div>
			</div>
		</Layout>
	)
}
export default Auth
