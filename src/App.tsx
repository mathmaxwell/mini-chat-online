import Register from './components/register'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/homePage'
import Sign from './components/sign'
import AllUsers from './components/AllUsers'
import UserProfile from './components/userProfile'
import Message from './components/message'
function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/register' element={<Register />} />
				<Route path='/sign' element={<Sign />} />
				<Route path='/all-users' element={<AllUsers />} />
				<Route path='/users/:name' element={<UserProfile />} />
				<Route path='/message' element={<Message />} />
			</Routes>
		</>
	)
}

export default App
