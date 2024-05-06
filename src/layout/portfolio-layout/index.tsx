import React from 'react'
import { Helmet } from 'react-helmet-async'

interface IPortfolioLayout {
	children: React.ReactNode
}

function PortfolioLayout({ children }: Readonly<IPortfolioLayout>) {
	return (
		<>
			<Helmet prioritizeSeoTags>
				<meta charSet="utf-8" />
				<title>Warlock-BM</title>
				<meta name="title" content="Warlock-BM" />
				<meta
					name="description"
					content="Warlock-BM is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences."
				/>

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://hieubm-portfolio.vercel.app/" />
				<meta property="og:title" content="Warlock-BM" />
				<meta
					property="og:description"
					content="Warlock-BM is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences."
				/>
				<meta property="og:image" content="/assets/images/meta/thumbnail.png" />

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://hieubm-portfolio.vercel.app/" />
				<meta property="twitter:title" content="Warlock-BM" />
				<meta
					property="twitter:description"
					content="Warlock-BM is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences."
				/>
				<meta property="twitter:image" content="/assets/images/meta/thumbnail.png" />
			</Helmet>
			{children}
		</>
	)
}

export default PortfolioLayout
