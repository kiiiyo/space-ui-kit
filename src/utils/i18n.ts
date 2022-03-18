import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
//
import { EN, JA } from '@/locales'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: EN
    },
    ja: {
      translation: JA
    }
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
})

export default i18n
