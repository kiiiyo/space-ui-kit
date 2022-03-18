/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import type { UseFormReturn } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useTranslation } from 'react-i18next'

//
import { Hooks } from '@/features'

export type TSignInFormValues = {
  id: string
  password: string
}

export type TUseSignInFormProps = {
  actions: {
    useFormMethods: UseFormReturn<TSignInFormValues, any>
    onSubmit: (data: any) => void
  }
}

export const useSignInForm = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'page.signIn'
  })
  const navigate = useNavigate()
  const {
    state: { locale }
  } = Hooks.Locale.useLocale()

  const validationSchema = yup.object().shape({
    id: yup.string().required(t('validateRequiredMessage')),
    password: yup.string().required(t('validateRequiredMessage'))
  })

  const useFormMethods = useForm<TSignInFormValues>({
    resolver: yupResolver(validationSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange'
  })

  const onSubmit = useCallback(() => {
    navigate(`/${locale}/dashboard`)
  }, [navigate, locale])

  return {
    actions: { useFormMethods, onSubmit }
  } as TUseSignInFormProps
}
