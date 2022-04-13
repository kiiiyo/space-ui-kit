export type TLocale = 'ja' | 'en'

export type TLanguage = {
  translation: {
    common: {
      generalHeaderBar: {
        signInButtonLabel: string
      }
      generalFooter: {
        siteDescription: string
        aboutMenu: {
          title: string
          aboutUs: string
          contactUs: string
          faq: string
        }
        legalMenu: {
          title: string
          terms: string
          privacyPolicy: string
        }
        linksMenu: {
          title: string
          github: string
        }
      }
      dashboardHeaderBar: {
        searchbar: {
          tooltip: string
          placeholder: string
          button: string
        }
        ProfileMenu: {
          tooltip: string
          SignOut: string
        }
        NotificationMenu: {
          tooltip: string
          recently: string
          showAll: string
        }
      }
      dashboardMenu: {
        dashboard: {
          title: string
          defaultLabel: string
        }
        pages: {
          title: string
          blankLabel: string
          blankSingleLabel: string
          blankNestLabel: string
        }
      }
    }
    page: {
      signIn: {
        title: string
        description: string
        validateRequiredMessage: string
        remember: string
        forgotPassword: string
        signInButtonLabel: string
      }
      blankSinglePage: {
        title: string
        breadcrumbs: {
          dashboard: string
          blankSingle: string
        }
      }
      blankNestPage: {
        title: string
        breadcrumbs: {
          dashboard: string
          blankNest: string
        }
      }
      notFoundErrorPage: {
        title: string
        description: string
        buttonLabel: string
      }
      systemErrorPage: {
        title: string
        description: string
        buttonLabel: string
      }
    }
  }
}
//breadcrumbs
