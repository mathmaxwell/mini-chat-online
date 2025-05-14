import { Controller, useForm } from 'react-hook-form'
import Typography from '@mui/material/Typography'
import { Container, TextField } from '@mui/material'
import pb from '../lib/pocketbase'
import useRegister from '../elements/register'
import { useNavigate } from 'react-router-dom'
const Register = () => {
	const navigate = useNavigate()
	const { isRegisterTrue } = useRegister()
	interface IData {
		name: string
		password: string
		email: string
	}
	const { handleSubmit, control } = useForm<IData>()
	async function onSubmit(data: IData) {
		try {
			const register = await pb.collection('users').create({
				name: data.name,
				email: data.email,
				password: data.password,
				passwordConfirm: data.password,
			})
			console.log(register)
			localStorage.setItem('userInfo', JSON.stringify(data))
			isRegisterTrue()
			navigate('/all-users')
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<div>
			<Container>
				<Typography variant='h1' color='initial'>
					register
				</Typography>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Controller
						name='name'
						control={control}
						defaultValue=''
						rules={{ required: 'Name is required' }}
						render={({ field, fieldState }) => (
							<TextField
								fullWidth
								{...field}
								label='your name'
								margin='normal'
								helperText={fieldState.error?.message}
							/>
						)}
					/>
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

export default Register
