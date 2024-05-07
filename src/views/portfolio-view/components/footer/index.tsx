import { RiGitMergeLine, RiStarLine } from '@remixicon/react'
import React from 'react'

function PortfolioFooter() {
	return (
		<div className="flex flex-col gap-3 items-center justify-center py-5 hover:text-[var(--color-link-badge)] text-center">
			<p className="text-sm">Designed & Built by Warlock-BM</p>
			<p className="text-sm flex gap-3">
				<span className="flex gap-2">
					<RiStarLine size={18} /> 7,194
				</span>
				<span className="flex gap-2">
					<RiGitMergeLine size={18} /> 3,496
				</span>
			</p>
		</div>
	)
}

export default PortfolioFooter
