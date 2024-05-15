import { Alignment, Fit, Layout, useRive } from '@rive-app/react-canvas'
import { memo } from 'react'

const FirePot = () => {
	const { RiveComponent } = useRive({
		src: '/assets/riv/fire_pot.riv',
		// src: '/assets/riv/avatar_demo.riv',
		// artboard: "Avatar",
		stateMachines: ['State Machine 1'],
		artboard: 'Spin the fire- Comp',
		layout: new Layout({
			fit: Fit.Cover,
			alignment: Alignment.Center,
		}),
		autoplay: true,
	})
	return <RiveComponent />
}

export default memo(FirePot)
