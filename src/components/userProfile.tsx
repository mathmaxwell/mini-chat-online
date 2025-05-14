import { useParams } from 'react-router-dom'
import { Container, TextField, Typography } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import pb from '../lib/pocketbase'
const UserProfile = () => {
	interface IMessage {
		text: string
	}
	const { handleSubmit, control } = useForm<IMessage>()
	const idOfLocal = localStorage.getItem('toMessage')
	const { name } = useParams()
	async function onSubmit(message: IMessage) {
		try {
			console.log('!!!', pb.authStore.record?.id)
			const sendMessage = await pb.collection('message').create({
				from: pb.authStore.model?.id,
				to: idOfLocal,
				text: message.text,
			})
			console.log(sendMessage)
		} catch (error: any) {
			console.log('Failed to send:', error?.response || error)
		}
	}
	return (
		<div>
			<Container>
				<Typography variant='h1' color='initial'>
					<p>{name}</p>
				</Typography>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Controller
						defaultValue=''
						name='text'
						control={control}
						rules={{ required: 'message is required' }}
						render={({ field, fieldState }) => (
							<TextField
								margin='normal'
								fullWidth
								{...field}
								label='message'
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

export default UserProfile
