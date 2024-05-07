import { TypeAnimation } from 'react-type-animation'

import { AuthSlotCounter } from '../../components/auth-slot-counter'
import './style.css'

function AboutHeader() {
	return (
		<div className="flex flex-col gap-10 text-center mt-10">
			<p className="hello-header">
				<span>Hello There</span>
				<span className="relative">
					<span className="hand-waving text-[35px] absolute -right-14 -top-2">👋</span>
				</span>
			</p>

			<span className="text-5xl flex items-center justify-center gap-5 max-sm:flex-col">
				<span>I'm</span>
				<AuthSlotCounter />
			</span>

			<TypeAnimation
				sequence={[
					'SOFTWARE ENGINEER & FRONT END DEVELOPER.',
					1500,
					'Passionate about creating responsive and interactive web experiences.',
					1500,
					'Skilled in HTML, CSS, JavaScript/Typescript, and modern frontend framework as NextJS.',
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
					maxWidth: 450,
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
