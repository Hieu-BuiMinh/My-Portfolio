import ContactButton from 'src/components/button/contact-button'
import PortfolioFooter from '../../components/footer'
import { Button, useComputedColorScheme } from '@mantine/core'
import './style.css'
import { useTranslation } from 'react-i18next'

function ContactSection() {
	const { t } = useTranslation()
	const computedColorScheme = useComputedColorScheme()

	return (
		<div className="flex flex-col gap-10 max-sm:gap-5">
			<p className="section-header">
				<span>{t('portfolio.sections.contact.header')}</span>
			</p>
			<p className={`${computedColorScheme === 'light' && 'font-bold'} contact-overview`}>
				{t('portfolio.sections.contact.footer.my_script')}
			</p>

			<ContactButton>
				<Button
					m={'auto'}
					variant={computedColorScheme === 'light' ? 'filled' : 'outline'}
					size="md"
					radius="xl"
				>
					Say Hi!
				</Button>
			</ContactButton>

			<PortfolioFooter />
		</div>
	)
}

export default ContactSection
