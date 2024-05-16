import { useState } from 'react'
import SegmentNav from './components/segment-nav'
import AboutHeader from './sections/about-header'

import { useComputedColorScheme } from '@mantine/core'
import SideInfor from './components/infor'
import './css/style.css'
import ContactSection from './sections/contact'
import MyExperience from './sections/experience'
import MyExpertise from './sections/expertise'
import { useTranslation } from 'react-i18next'

function PorfolioView() {
	const { t } = useTranslation()
	const computedColorScheme = useComputedColorScheme()
	const [style, setStyle] = useState({})

	const [navData, setNavData] = useState({
		value: '#hello',
		data: [
			{
				label: (
					<a className="flex" href="#hello" onClick={() => handlesetNavData('#hello')}>
						{t('portfolio.sections.hello.label')}
					</a>
				),
				value: '#hello',
			},
			{
				label: (
					<a className="flex" href="#expertise" onClick={() => handlesetNavData('#expertise')}>
						{t('portfolio.sections.expertises.label')}
					</a>
				),
				value: '#expertise',
			},
			{
				label: (
					<a className="flex" href="#experience" onClick={() => handlesetNavData('#experience')}>
						{t('portfolio.sections.experiences.label')}
					</a>
				),
				value: '#experience',
			},
			{
				label: (
					<a className="flex" href="#contact" onClick={() => handlesetNavData('#contact')}>
						{t('portfolio.sections.contact.label')}
					</a>
				),
				value: '#contact',
			},
		],
	})

	const handlesetNavData = (id: string) => {
		setNavData((prev) => {
			return {
				...prev,
				value: id,
			}
		})
	}

	// useEffect(() => {
	// 	computedColorScheme === 'light'
	// 		? setStyle((prev) => {
	// 				//#DDDDDD === circle color
	// 				return { ...prev, backgroundImage: 'url(/assets/images/commons/background/bg_light.svg)' }
	// 			})
	// 		: setStyle((prev) => {
	// 				//#5a5757 === circle color
	// 				return { ...prev, backgroundImage: 'url(/assets/images/commons/background/bg_dark.svg)' }
	// 			})
	// }, [computedColorScheme])

	return (
		<div className="about-page" style={style}>
			<SegmentNav navData={navData} handlesetNavData={handlesetNavData} />

			<SideInfor />

			<section className="about-section" id="hello">
				<AboutHeader />
			</section>
			<section className="about-section" id="expertise">
				<MyExpertise />
			</section>
			<section className="about-section" id="experience">
				<MyExperience />
			</section>
			<section className="about-section" id="contact">
				<ContactSection />
			</section>
		</div>
	)
}

export default PorfolioView
