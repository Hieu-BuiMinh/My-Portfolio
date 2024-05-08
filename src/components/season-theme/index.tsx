import React, { memo, useEffect, useState } from 'react'
import Snowfall from 'react-snowfall'
import { useSeasonStore } from 'src/store/season-store'
import { fallImgs } from './data'
import { useResponsiveDevice } from 'src/hooks'

function SeasonTheme() {
	const device = useResponsiveDevice()
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
		<>
			{season === 'winter' && <Snowfall snowflakeCount={15} style={{ position: 'fixed', zIndex: 999 }} />}
			{season === 'fall' && (
				<Snowfall
					images={imgList}
					snowflakeCount={5}
					style={{ position: 'fixed', zIndex: 999 }}
					radius={device === 'mobile' ? [9, 20] : [15, 30]}
					rotationSpeed={[1, 5]}
				/>
			)}
		</>
	)
}

export default memo(SeasonTheme)
