import { useEffect, useState } from 'react'
import ScrollingSkills from './components/scrolling-skills'
import AboutHeader from './components/sections/about-header'
import SegmentNav from './components/segment-nav'

import { useComputedColorScheme } from '@mantine/core'
import StickyBall from './components/sticky-ball'
import './css/style.css'

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
					<a className="flex" href="#consulting" onClick={() => handlesetNavData('#consulting')}>
						Consulting
					</a>
				),
				value: '#consulting',
			},
			{
				label: (
					<a className="flex" href="#work-with-me" onClick={() => handlesetNavData('#work-with-me')}>
						Work with me
					</a>
				),
				value: '#work-with-me',
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

	useEffect(() => {
		computedColorScheme === 'light'
			? setStyle((prev) => {
					//#DDDDDD === circle color
					return { ...prev, backgroundImage: 'url(/assets/images/commons/background/bg_light.svg)' }
				})
			: setStyle((prev) => {
					//#5a5757 === circle color
					return { ...prev, backgroundImage: 'url(/assets/images/commons/background/bg_dark.svg)' }
				})
	}, [computedColorScheme])

	return (
		<div className="about-page" style={style}>
			<SegmentNav navData={navData} handlesetNavData={handlesetNavData} />

			<StickyBall />

			<section className="about-section" id="hello">
				<AboutHeader />
			</section>
			<section className="about-section" id="consulting">
				consulting
				<ScrollingSkills />
			</section>
			<section className="about-section" id="work-with-me">
				work-with-me
				<ScrollingSkills />
			</section>
		</div>
	)
}

export default PorfolioView
