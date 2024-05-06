import React from 'react'
import { Helmet } from 'react-helmet-async'

interface IPortfolioLayout {
	children: React.ReactNode
}

function PortfolioLayout({ children }: Readonly<IPortfolioLayout>) {
	const ogData = {
		title: 'Warlock-BM',
		description:
			'Warlock-BM is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences.',
		url: 'https://hieubm-portfolio.vercel.app',
		image: 'https://brittanychiang.com/og.png',
		siteName: 'Your Website Name',
	}

	return (
		<>
			<Helmet prioritizeSeoTags>
				<meta charSet="utf-8" />
				<title>Warlock-BM</title>
				<meta
					name="description"
					content="Warlock-BM is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences."
				/>
				<link rel="apple-touch-icon" href="/assets/images/commons/avatar/avt_favicon.png" />
				<link rel="icon" href="/assets/images/commons/avatar/avt_favicon.png" type="image/png" />

				<meta property="og:title" content={ogData.title} />
				<meta property="og:description" content={ogData.description} />
				<meta property="og:url" content={ogData.url} />
				<meta property="og:image" content={ogData.image} />
				<meta property="og:site_name" content={ogData.siteName} />

				<meta name="description" content={ogData.description} />
			</Helmet>
			{children}
		</>
	)
}

export default PortfolioLayout
