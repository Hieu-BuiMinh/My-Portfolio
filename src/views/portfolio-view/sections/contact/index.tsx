import ContactButton from 'src/components/button/contact-button'
import PortfolioFooter from '../../components/footer'
import './style.css'

function ContactSection() {
	return (
		<div className="flex flex-col gap-10 max-sm:gap-5">
			<p className="section-header">
				<span>Get In Touch</span>
			</p>
			<p className="contact-overview">
				I'm always looking for every new opportunities, my inbox is open. Whether you have a question or just
				want to say hi, I'll try my best to get back to you!
			</p>

			<ContactButton />

			<PortfolioFooter />
		</div>
	)
}

export default ContactSection
