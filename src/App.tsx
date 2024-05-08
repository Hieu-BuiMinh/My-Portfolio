import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import MouseFollower from './components/mouse-follower'
import { useResponsiveDevice } from './hooks'
import './i18n'

function App() {
	const device = useResponsiveDevice()

	useEffect(() => {
		console.log(
			'%cDesigned and Coded by Warlock-BM 🧙‍♂️',
			'color: #333333; font-size: 12px; background-color: #94FFD8; padding: 8px; border-radius: 10px; font-weight: 700'
		)
	}, [])

	return (
		<>
			<Outlet />
			{device === 'desktop' && <MouseFollower />}
		</>
	)
}

export default App
