import { RiGitMergeLine, RiStarLine } from '@remixicon/react'
import React from 'react'
import { useTranslation } from 'react-i18next'

function PortfolioFooter() {
	const { t } = useTranslation()

	return (
		<div className="flex flex-col gap-3 items-center justify-center py-5 hover:text-[var(--color-link-badge)] text-center">
			<p className="text-sm">{t('portfolio.sections.contact.footer.designed_by')}</p>
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
