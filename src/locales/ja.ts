import type { TLanguage } from '@/types/locale'

export const ja: TLanguage = {
  translation: {
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
      },
      dashboardHeaderBar: {
        searchbar: {
          tooltip: '検索',
          placeholder: 'キーワードを入力',
          button: '検索'
        },
        ProfileMenu: {
          tooltip: 'アカウント',
          SignOut: 'サインアウト'
        },
        NotificationMenu: {
          tooltip: '通知',
          recently: '新しい通知',
          showAll: 'すべての通知を確認'
        }
      },
      dashboardMenu: {
        dashboard: {
          title: 'ダッシュボード',
          defaultLabel: 'デフォルト'
        },
        pages: {
          title: 'ページ',
          blankLabel: '雛形ページ',
          blankSingleLabel: '雛形個別ページ',
          blankNestLabel: '雛形階層ページ'
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
      },
      blankSinglePage: {
        title: '雛形固定ページ',
        breadcrumbs: {
          dashboard: 'ダッシュボード',
          blankSingle: '雛形固定ページ'
        }
      },
      blankNestPage: {
        title: '雛形階層ページ',
        breadcrumbs: {
          dashboard: 'ダッシュボード',
          blankNest: '雛形階層ページ'
        }
      },
      notFoundErrorPage: {
        title: 'お探しのページがみつかりませんでした。',
        description:
          '申し訳ありません。お探しのページは見つかりませんでした。URLがお間違えないかご確認ください。',
        buttonLabel: 'ホームに戻る'
      },
      systemErrorPage: {
        title: 'このページは動作していません。',
        description: 'エラーが発生しました。後でもう一度お試しください。',
        buttonLabel: 'ホームに戻る'
      }
    }
  }
}

export default ja
