import { Container, Typography } from '@mui/material'
import pb from '../lib/pocketbase'
import { useEffect, useState } from 'react'
const Message = () => {
	const myId = pb.authStore.model?.id
	interface IMessage {
		from: string
		to: string
		text: string
	}
	const [messages, setMessages] = useState<IMessage[]>([])
	useEffect(() => {
		async function getAllMessages() {
			try {
				const records = await pb.collection('message').getFullList({
					filter: `to="${myId}"`,
				})
				const cleanData: IMessage[] = records.map(record => ({
					from: record.from,
					to: record.to,
					text: record.text,
				}))
				console.log(cleanData)
				setMessages(cleanData)
			} catch (error) {
				console.log(error)
			}
		}
		getAllMessages()
		let unsubscribeRef: Function | null = null

		const subscribe = async () => {
			unsubscribeRef = await pb.collection('message').subscribe('*', e => {
				if (e.action === 'create') {
					const newMsg = e.record
					if (newMsg.to === myId) {
						setMessages(prev => [
							...prev,
							{
								from: newMsg.from,
								to: newMsg.to,
								text: newMsg.text,
							},
						])
					}
				}
			})
		}

		subscribe()

		return () => {
			unsubscribeRef && unsubscribeRef()
		}
	}, [myId])

	return (
		<Container>
			<Typography variant='h1' color='initial'>
				messages for you
			</Typography>
			<ul>
				{messages.length
					? messages.map((message, id) => <li key={id}>{message.text}</li>)
					: ''}
			</ul>
		</Container>
	)
}

export default Message
