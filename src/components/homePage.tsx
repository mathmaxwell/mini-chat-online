import { Link } from 'react-router-dom'
import useRegister from '../elements/register'
import Typography from '@mui/material/Typography'
const HomePage = () => {
	const { isRegister } = useRegister()
	return (
		<>
			{isRegister ? (
				<>hush kelibsan qalesan</>
			) : (
				<>
					<Link to={'/register'}>
						<Typography variant='h1' color='initial'>
							register
						</Typography>
					</Link>
					<Link to={'/sign'}>
						<Typography variant='h1' color='initial'>
							sign in
						</Typography>
					</Link>
				</>
			)}
		</>
	)
}

export default HomePage
