import { Container, TextField, Typography } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import pb from '../lib/pocketbase'
import { useNavigate } from 'react-router-dom'
import useRegister from '../elements/register'
const Sign = () => {
	const navigate = useNavigate()
	interface IData {
		email: string
		password: string
	}
	const { isRegisterTrue } = useRegister()
	const { handleSubmit, control } = useForm<IData>()
	async function onSubmit(data: IData) {
		try {
			const sign = await pb
				.collection('users')
				.authWithPassword(data.email, data.password)
			isRegisterTrue()
			navigate('/all-users')
			console.log(sign)
			localStorage.setItem('userInfo', JSON.stringify(data))
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<div>
			{' '}
			<Container>
				<Typography variant='h1' color='initial'>
					sign in
				</Typography>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Controller
						defaultValue=''
						name='email'
						control={control}
						rules={{ required: 'Email is required' }}
						render={({ field, fieldState }) => (
							<TextField
								margin='normal'
								fullWidth
								{...field}
								label='your email'
								helperText={fieldState.error?.message}
							/>
						)}
					/>
					<Controller
						defaultValue=''
						name='password'
						control={control}
						rules={{ required: 'Password is required' }}
						render={({ field, fieldState }) => (
							<TextField
								fullWidth
								{...field}
								margin='normal'
								label='password'
								helperText={fieldState.error?.message}
							/>
						)}
					/>
					<button type='submit'>Submit</button>
				</form>
			</Container>
		</div>
	)
}

export default Sign
