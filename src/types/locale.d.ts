export type TLocale = 'ja' | 'en'

export type TLanguage = {
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
  }
}
