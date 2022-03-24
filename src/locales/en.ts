import type { TLanguage } from '@/types/locale'

export const en: TLanguage = {
  translation: {
    common: {
      generalHeaderBar: {
        signInButtonLabel: 'Sign in'
      },
      generalFooter: {
        siteDescription: 'Site Description',
        aboutMenu: {
          title: 'About',
          aboutUs: 'About us',
          contactUs: 'Contact us',
          faq: 'FAQs'
        },
        legalMenu: {
          title: 'Legal',
          terms: 'Terms and Condition',
          privacyPolicy: 'Privacy Policy'
        },
        linksMenu: {
          title: 'Links',
          github: 'GitHub'
        }
      },
      dashboardHeaderBar: {
        searchbar: {
          tooltip: 'Search',
          placeholder: 'Search...',
          button: 'Search'
        },
        ProfileMenu: {
          tooltip: 'Account',
          SignOut: 'Sign out'
        },
        NotificationMenu: {
          tooltip: 'Notification',
          recently: 'New Notifications',
          showAll: 'Show all notifications'
        }
      },
      dashboardMenu: {
        dashboard: {
          title: 'Dashboard',
          defaultLabel: 'Default'
        },
        pages: {
          title: 'Pages',
          blankLabel: 'Blank',
          blankSingleLabel: 'BlankSinglePage',
          blankNestLabel: 'BlankNestPage'
        }
      }
    },
    page: {
      signIn: {
        title: 'Sign in to 🚀 Space UI Kit',
        description: 'Enter your details below.',
        validateRequiredMessage: 'This field is required.',
        remember: 'Remember me',
        forgotPassword: 'Forgot password?',
        signInButtonLabel: 'Sign in'
      },
      blankSinglePage: {
        title: 'Blank Single Page',
        breadcrumbs: {
          dashboard: 'Dashboard',
          blankSingle: 'Blank Single Page'
        }
      },
      blankNestPage: {
        title: 'Blank Nest Page',
        breadcrumbs: {
          dashboard: 'Dashboard',
          blankNest: 'Blank Nest Page'
        }
      },
      errorNotFoundPage: {
        title: 'Sorry, page not found!',
        description:
          // eslint-disable-next-line quotes
          "Sorry, we couldn't find the page you're looking for. Perhaps you'vemistyped the URL?",
        buttonLabel: 'Go To Home'
      }
    }
  }
}

export default en
