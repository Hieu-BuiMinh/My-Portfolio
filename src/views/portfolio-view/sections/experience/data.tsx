import { useTranslation } from 'react-i18next'

export const Experiences = () => {
	const { t } = useTranslation()

	return [
		{
			blockHeader: 'Apr 2023 - Present',
			contentHeader: 'Junior Frontend Developer',
			contentOverview: <>{t('portfolio.sections.experiences.experiences_blocks.block_01.content_overview')}</>,
			badge: [
				{ label: 'NextJs' },
				{ label: 'ViteJs' },
				{ label: 'Zustand' },
				{ label: 'Mantine' },
				{ label: 'Tailwind' },
				{ label: 'Tanstack query' },
				{ label: 'Tanstack table' },
				{ label: 'Typescript' },
				{ label: 'Axios' },
			],
			isNew: true,
			descUrls: [
				{ url: 'https://www.pluxee.vn/', label: 'Pluxee.vn' },
				{ url: 'https://sdxcore.softworld.dev/admin', label: 'Pluxee adminsite' },
			],
			meta: {
				coName: 'SoftWorld Vietnam',
				coAvt: '/assets/images/commons/logo/sw_logo.png',
				coOverview: <>{t('portfolio.sections.experiences.experiences_blocks.block_01.meta.co_overview')}</>,
			},
		},
		{
			blockHeader: 'Aug 2022 - Apr 2023',
			contentHeader: 'Fresher Frontend Developer',
			contentOverview: <>{t('portfolio.sections.experiences.experiences_blocks.block_02.content_overview')}</>,
			badge: [
				{ label: 'React Js' },
				{ label: 'Redux' },
				{ label: 'AntD/SASS' },
				{ label: 'MUI' },
				{ label: 'Javascript' },
				{ label: 'Axios' },
			],
			descUrls: [
				{ url: 'https://tanthanhcontainer.com/', label: 'TanThanh Container' },
				{ url: 'https://rms.tanthanhcontainer.com/', label: 'RMS TanThanh' },
			],
			meta: {
				coName: 'TMA Solutions',
				coAvt: '/assets/images/commons/logo/tma_logo.png',
				coOverview: <>{t('portfolio.sections.experiences.experiences_blocks.block_02.meta.co_overview')}</>,
			},
		},
		{
			blockHeader: 'Aug 2018 - May 2022',
			contentHeader: 'Bachelor degree - UEH',
			contentOverview: <>{t('portfolio.sections.experiences.experiences_blocks.block_03.content_overview')}</>,
			descUrls: [
				{ url: '/', label: 'Chatting App' },
				{ url: '/', label: 'News Website' },
				{ url: '/', label: 'Music App' },
				{ url: '/', label: 'Clothing website' },
			],
			meta: {
				coName: 'University of Economics Ho Chi Minh City',
				coAvt: '/assets/images/commons/logo/ueh_logo.png',
				coOverview: <>{t('portfolio.sections.experiences.experiences_blocks.block_03.meta.co_overview')}</>,
			},
		},
	]
}
