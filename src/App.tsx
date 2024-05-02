import { Outlet } from 'react-router-dom'
import MouseFollower from './components/mouse-follower'
import { useResponsiveDevice } from './hooks'

function App() {
	const device = useResponsiveDevice()

	return (
		<>
			<Outlet />
			{device === 'desktop' && <MouseFollower />}
		</>
	)
}

export default App
