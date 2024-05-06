import { randomId } from '@mantine/hooks'
import SlotCounter from 'react-slot-counter'
import { TypeAnimation } from 'react-type-animation'

import './style.css'

function AboutHeader() {
	return (
		<div className="flex flex-col gap-10 text-center mt-10">
			<p className="text-xl text-[var(--color-text-normal)]">Hello There 👋</p>
			<span className="text-5xl flex items-end justify-center gap-5">
				I'm
				<AuthSlotCounter />
			</span>

			<TypeAnimation
				sequence={[
					'SOFTWARE ENGINEER & FRONT END DEVELOPER.',
					1500,
					'Passionate about creating responsive and interactive web experiences.',
					1500,
					'Skilled in HTML, CSS, JavaScript, and modern frontend framework as NextJS.',
					1500,
					'Experienced in building user-friendly interfaces and optimizing web performance.',
					1500,
				]}
				wrapper="span"
				speed={50}
				style={{
					display: 'inline-block',
					color: 'var(--color-link-badge)',
					zIndex: 3,
					width: 450,
					height: 150,
					margin: 'auto',
				}}
				repeat={Infinity}
				preRenderFirstString={true}
			/>
		</div>
	)
}

export default AboutHeader

const AuthSlotCounter = () => {
	const authName = 'Warlock-BM'

	return (
		<div className="z-[3]">
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
