import { useAuth0, RedirectLoginOptions } from '@auth0/auth0-react'
import {
  GetIdTokenClaimsOptions,
  GetTokenSilentlyOptions,
  GetTokenWithPopupOptions,
  IdToken,
  LogoutOptions
} from '@auth0/auth0-spa-js'

export type AuthContextInterface = {
  state: {
    error: Error | undefined
    isLoading: boolean
    isAuthenticated: boolean
    user: any
  }
  actions: {
    getAccessTokenSilently: (
      options?: GetTokenSilentlyOptions | undefined
    ) => Promise<string>
    getAccessTokenWithPopup: (
      options?: GetTokenWithPopupOptions | undefined
    ) => Promise<string>
    getIdTokenClaims: (
      options?: GetIdTokenClaimsOptions | undefined
    ) => Promise<IdToken>
    loginWithRedirect: (
      options?: RedirectLoginOptions | undefined
    ) => Promise<void>
    loginWithPopup: (options?: LogoutOptions | undefined) => void
    logout: (options?: LogoutOptions | undefined) => void
  }
}

export const useAuth: () => AuthContextInterface = () => {
  const {
    // Auth state:
    error,
    isAuthenticated,
    isLoading,
    user,
    // Auth actions:
    getAccessTokenSilently,
    getAccessTokenWithPopup,
    getIdTokenClaims,
    loginWithRedirect,
    loginWithPopup,
    logout
  } = useAuth0()

  return {
    state: { error, isLoading, user, isAuthenticated },
    actions: {
      getAccessTokenSilently,
      getAccessTokenWithPopup,
      getIdTokenClaims,
      loginWithRedirect,
      loginWithPopup,
      logout
    }
  } as AuthContextInterface
}
