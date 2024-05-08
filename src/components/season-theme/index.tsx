import React, { memo, useEffect, useState } from 'react'
import Snowfall from 'react-snowfall'
import { useSeasonStore } from 'src/store/season-store'
import { fallImgs } from './data'

function SeasonTheme() {
	const { season } = useSeasonStore((state) => ({
		season: state.season,
	}))

	const [imgList, setImgList] = useState<any>()

	const handleImgs = (list: string[]) => {
		setImgList(() => {
			return list.map((url) => {
				const snowflake = document.createElement('img')
				snowflake.src = url
				return snowflake
			})
		})
	}

	useEffect(() => {
		if (season === 'fall') {
			handleImgs(fallImgs)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [season])

	return (
		<div className="absolute top-0 w-full h-screen touch-none">
			{season === 'winter' && <Snowfall snowflakeCount={15} />}
			{season === 'fall' && (
				<Snowfall images={imgList} snowflakeCount={5} radius={[9, 20]} rotationSpeed={[1, 5]} />
			)}
		</div>
	)
}

export default memo(SeasonTheme)
