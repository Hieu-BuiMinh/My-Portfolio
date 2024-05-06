import React from 'react'

interface IPortfolioLayout {
	children: React.ReactNode
}

function PortfolioLayout({ children }: Readonly<IPortfolioLayout>) {
	return <>{children}</>
}

export default PortfolioLayout
