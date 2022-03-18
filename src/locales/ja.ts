import { TLanguage } from '@/types/locale'

export const ja: TLanguage = {
  common: {
    generalHeaderBar: {
      signInButtonLabel: 'サインイン'
    },
    generalFooter: {
      siteDescription: 'サイトの説明',
      aboutMenu: {
        title: 'About',
        aboutUs: 'Space UI Kit について',
        contactUs: 'お問い合わせ',
        faq: 'よくある質問'
      },
      legalMenu: {
        title: 'Legal',
        terms: '利用規約',
        privacyPolicy: 'プライバシーポリシー'
      },
      linksMenu: {
        title: 'Links',
        github: 'GitHub'
      }
    }
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
export default ja
