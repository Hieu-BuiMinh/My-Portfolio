import { Alignment, Fit, Layout, useRive } from '@rive-app/react-canvas'
import React from 'react'

function NotFoundCharacter() {
	const { RiveComponent } = useRive({
		src: '/assets/riv/flame_and_spark.riv',
		stateMachines: ['Untitled 1'],
		artboard: 'New Artboard',
		layout: new Layout({
			fit: Fit.Contain,
			alignment: Alignment.Center,
		}),
		autoplay: true,
	})
	return <RiveComponent />
}

export default NotFoundCharacter
