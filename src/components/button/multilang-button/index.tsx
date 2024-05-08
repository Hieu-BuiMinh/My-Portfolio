import { SegmentedControl } from '@mantine/core'
import { useTranslation } from 'react-i18next'

function LanguageSegment() {
	const { i18n } = useTranslation()

	const handleSwitchLang = (val: string) => {
		i18n.changeLanguage(val)
	}

	return (
		<SegmentedControl
			defaultValue={i18n.language}
			onChange={handleSwitchLang}
			fullWidth
			size="xs"
			data={[
				{ label: 'VN', value: 'vi' },
				{ label: 'EN', value: 'en' },
			]}
		/>
	)
}

export default LanguageSegment
