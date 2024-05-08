import { SegmentedControl } from '@mantine/core'
import { RiFireLine, RiLeafLine, RiRainbowLine, RiSnowflakeLine } from '@remixicon/react'
import './style.css'
import { useSeasonStore } from 'src/store/season-store'

function SeasonSegment() {
	const { season, updateseason } = useSeasonStore((state) => ({
		season: state.season,
		updateseason: state.updateseason,
	}))

	return (
		<SegmentedControl
			onChange={updateseason}
			className="season-segment"
			defaultValue={season}
			fullWidth
			size="xs"
			data={[
				{ label: <RiRainbowLine className="m-auto" size={20} />, value: 'spring' },
				{ label: <RiFireLine className="m-auto" size={20} />, value: 'summer' },
				{ label: <RiLeafLine className="m-auto" size={20} />, value: 'fall' },
				{ label: <RiSnowflakeLine className="m-auto" size={20} />, value: 'winter' },
			]}
		/>
	)
}

export default SeasonSegment
