import { randomId } from '@mantine/hooks'
import SlotCounter from 'react-slot-counter'
import './style.css'

export const AuthSlotCounter = () => {
	// const authDummyCharacters = '🎄🎁🎉🎃🎠🎈🚀🎄🎁🎉🎃🎠🎈🚀'
	const authName = 'Warlock-BM'

	return (
		<div className="z-[3] slot-container relative">
			{/* <img src="/assets/images/commons/hats/hat_01.svg" alt="hat" className='auth-hat'/> */}
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
		</div>
	)
}
