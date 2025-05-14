import { useEffect, useState } from 'react'
import pb from '../lib/pocketbase'
import { useNavigate } from 'react-router-dom'
import idStore from '../elements/userId'
import { NavLink } from 'react-router-dom'

const AllUsers = () => {
	const { setId } = idStore()
	const navigate = useNavigate()
	interface Iuser {
		id: string
		name: string
	}
	const [users, setUsers] = useState<Iuser[]>([])
	async function getFullList() {
		try {
			const list = await pb
				.collection('users')
				.getFullList<Iuser>({ sort: 'name' })
			setUsers(list)
			return list
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		getFullList()
	}, [])

	return (
		<div>
			<NavLink to={'/message'}>see your message to you</NavLink>
			{users.length ? (
				<ul>
					{users.map(user => (
						<li
							key={user.id}
							onClick={() => {
								navigate(`/users/${user.name}`)
								setId(user.id)
							}}
						>
							{user.name}
						</li>
					))}
				</ul>
			) : (
				'not found'
			)}
		</div>
	)
}

export default AllUsers
