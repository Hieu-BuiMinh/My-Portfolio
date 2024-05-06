import React from 'react'
import { Helmet } from 'react-helmet-async'

interface IPortfolioLayout {
	children: React.ReactNode
}

function PortfolioLayout({ children }: Readonly<IPortfolioLayout>) {
	const ogUrl = 'https://hieubm-portfolio.vercel.app/' // Replace with your actual URL
	const ogTitle = 'Warlock-BM'
	const ogDescription = 'A concise and compelling description of your page content.'
	const ogImage = 'https://brittanychiang.com/og.png' // Replace with your image URL

	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Warlock-BM</title>
				<meta
					name="description"
					content="Warlock-BM is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences."
				/>
				<link rel="apple-touch-icon" href="/assets/images/commons/avatar/avt_01.png" />
				<link rel="icon" href="/assets/images/commons/avatar/avt_01.png" />

				<meta property="og:url" content={ogUrl} />
				<meta property="og:title" content={ogTitle} />
				<meta property="og:description" content={ogDescription} />
				<meta property="og:image" content={ogImage} />
			</Helmet>
			{children}
		</>
	)
}

export default PortfolioLayout
