import { landmarksData } from './landmark'
import { randomId, useToggle } from '@mantine/hooks'
import SlotCounter from 'react-slot-counter'
import './style.css'

export const AuthSlotCounter = () => {
	const authName = 'Warlock-BM'
	const [landmarksVal, toggleLandmarksVal] = useToggle(landmarksData)

	return (
		<button type="button" onClick={() => toggleLandmarksVal()} className="z-[3] slot-container relative">
			<img src={landmarksVal} alt="landmark" className="landmark" />
			<SlotCounter
				animateOnVisible={{ triggerOnce: false, rootMargin: '0px 0px -100px 0px' }}
				duration={1}
				startValue={authName.split('').map((key) => {
					return (
						<span className="auth-name" key={randomId()}>
							{key}
						</span>
					)
				})}
				value={authName.split('').map((key) => {
					return (
						<span className="auth-name" key={randomId()}>
							{key}
						</span>
					)
				})}
				dummyCharacters={authName.split('').map((key) => {
					return (
						<span className="auth-name" key={randomId()}>
							{key}
						</span>
					)
				})}
			/>
		</button>
	)
}
