import React from 'react'
import FloatingMenuBottom from 'src/components/button/floating-menu-bottom'
import SeasonTheme from 'src/components/season-theme'

interface IPortfolioLayout {
	children: React.ReactNode
}

function PortfolioLayout({ children }: Readonly<IPortfolioLayout>) {
	return (
		<>
			<SeasonTheme />
			{children}
			<FloatingMenuBottom />
		</>
	)
}

export default PortfolioLayout
