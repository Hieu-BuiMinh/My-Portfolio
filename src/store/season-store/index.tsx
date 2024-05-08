import { create } from 'zustand'

type seasonState = {
	season: string
}

type seasonStateAction = {
	updateseason: (season: seasonState['season']) => void
	resetSeason: () => void
}

export const useSeasonStore = create<seasonState & seasonStateAction>((set) => ({
	season: 'spring',

	updateseason: (_s: seasonState['season']) => set({ season: _s }),
	resetSeason: () => set({ season: 'spring' }),
}))
