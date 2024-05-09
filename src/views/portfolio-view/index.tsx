import { useState } from 'react'
import ScrollingSkills from './components/scrolling-skills'
import SegmentNav from './components/segment-nav'
import AboutHeader from './sections/about-header'

import { useComputedColorScheme } from '@mantine/core'
import PortfolioFooter from './components/footer'
import SideInfor from './components/infor'
import './css/style.css'
import MyExperience from './sections/experience'
import MyExpertise from './sections/expertise'

function PorfolioView() {
	const computedColorScheme = useComputedColorScheme('light')
	const [style, setStyle] = useState({})

	const [navData, setNavData] = useState({
		value: '#hello',
		data: [
			{
				label: (
					<a className="flex" href="#hello" onClick={() => handlesetNavData('#hello')}>
						Hello
					</a>
				),
				value: '#hello',
			},
			{
				label: (
					<a className="flex" href="#expertise" onClick={() => handlesetNavData('#expertise')}>
						Expertise
					</a>
				),
				value: '#expertise',
			},
			{
				label: (
					<a className="flex" href="#experience" onClick={() => handlesetNavData('#experience')}>
						Experience
					</a>
				),
				value: '#experience',
			},
			{
				label: (
					<a className="flex" href="#contact" onClick={() => handlesetNavData('#contact')}>
						Contact
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
				<ScrollingSkills />
				<PortfolioFooter />
			</section>
		</div>
	)
}

export default PorfolioView
