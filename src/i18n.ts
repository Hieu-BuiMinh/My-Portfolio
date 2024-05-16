import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import resources from './@types/resources'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

export const defaultNS = 'en'

i18n.use(Backend)
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		lng: 'en',
		debug: true,
		interpolation: {
			escapeValue: false,
		},
		resources,
	})

export default i18n
