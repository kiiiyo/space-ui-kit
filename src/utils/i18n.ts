import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        common: {
          signInButtonLabel: 'Sign in'
        },
        page: {
          signIn: {
            title: 'Sign in to 🚀 Space UI Kit',
            description: 'Enter your details below.',
            validateRequiredMessage: 'This field is required.',
            remember: 'Remember me',
            forgotPassword: 'Forgot password?',
            signInButtonLabel: 'Sign in'
          }
        }
      }
    },
    ja: {
      translation: {
        common: {
          signInButtonLabel: 'サインイン'
        },
        page: {
          signIn: {
            title: '🚀 Space UI Kit にサインインする',
            description: '以下のフォームよりサインインしてください。',
            validateRequiredMessage: '必須入力項目です。',
            remember: 'サインインを維持',
            forgotPassword: 'パスワードを忘れた',
            signInButtonLabel: 'サインイン'
          }
        }
      }
    }
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
})

export default i18n
