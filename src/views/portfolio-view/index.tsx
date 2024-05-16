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
				label: 'portfolio.sections.hello.label',
				value: '#hello',
			},
			{
				label: 'portfolio.sections.expertises.label',
				value: '#expertise',
			},
			{
				label: 'portfolio.sections.experiences.label',
				value: '#experience',
			},
			{
				label: 'portfolio.sections.contact.label',
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
