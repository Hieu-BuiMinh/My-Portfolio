import { TypeAnimation } from 'react-type-animation'

import { AuthSlotCounter } from '../../components/auth-slot-counter'
import './style.css'
import { useTranslation } from 'react-i18next'

function AboutHeader() {
	const { t } = useTranslation()
	const { text_01, text_02, text_03, text_04, text_05 } = t('portfolio.sections.hello.typing_text')

	return (
		<div className="flex flex-col gap-10 text-center mt-10">
			<p className="section-header">
				<span>{t('portfolio.sections.hello.header')}</span>
				<span className="relative">
					<span className="hand-waving text-[35px] absolute -right-14 -top-4">👋</span>
				</span>
			</p>

			<span className="text-5xl mt-14 flex flex-wrap items-center justify-center gap-5 max-sm:flex-col max-sm:gap-0 relative">
				<span className="leading-[38px]">{t('portfolio.sections.hello.i_am')}</span>
				<AuthSlotCounter />
				<p className="w-full text-xl text-[var(--color-surface-999)] mt-3">Senior Frontend Engineer</p>
			</span>

			<TypeAnimation
				sequence={[text_01, 1500, text_02, 1500, text_03, 1500, text_04, 1500, text_05, 1500]}
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
				{t('portfolio.sections.hello.short_intro')}
			</p>
		</div>
	)
}

export default AboutHeader
