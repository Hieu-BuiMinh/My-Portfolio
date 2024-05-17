import { useTranslation } from 'react-i18next'

export const Expertises = () => {
	const { t } = useTranslation()

	return [
		{
			header: 'Software Development',
			icon: '/assets/images/commons/expertise/expertise_01.svg',
			content: t('portfolio.sections.expertises.expertises_blocks.block_01'),
		},
		{
			header: 'Frontend Dev React, NextJS',
			icon: '/assets/images/commons/expertise/expertise_02.svg',
			content: t('portfolio.sections.expertises.expertises_blocks.block_02'),
		},
	]
}
