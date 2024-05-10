import { TypeAnimation } from 'react-type-animation'

import { AuthSlotCounter } from '../../components/auth-slot-counter'
import './style.css'

function AboutHeader() {
	return (
		<div className="flex flex-col gap-10 text-center mt-10">
			<p className="section-header">
				<span>Hello There</span>
				<span className="relative">
					<span className="hand-waving text-[35px] absolute -right-14 -top-4">👋</span>
				</span>
			</p>

			<span className="text-5xl mt-14 flex flex-wrap items-center justify-center gap-5 max-sm:flex-col max-sm:gap-0 relative">
				<span className="leading-[38px]">I'm</span>
				<AuthSlotCounter />
				<p className="w-full text-xl text-[var(--color-surface-999)] mt-3">Senior Frontend Engineer</p>
			</span>

			<TypeAnimation
				sequence={[
					'SOFTWARE ENGINEER & FRONT END DEVELOPER.',
					1500,
					'Passionate about creating responsive and interactive web experiences.',
					1500,
					'I build pixel-perfect, engaging, and accessible digital experiences.',
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
					minHeight: 80,
					margin: 'auto',
				}}
				repeat={Infinity}
				preRenderFirstString={true}
			/>

			<p className="max-sm:text-xs max-md:text-base max-sm:leading-7">
				I'm a software engineer specializing in building (and occasionally designing) exceptional digital
				experiences. Currently, I'm focused on building accessible products.
			</p>
		</div>
	)
}

export default AboutHeader
