/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import type { UseFormReturn } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

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

const REQUIRED_MESSAGE = '必須入力項目です'

export const useSignInForm = () => {
  const navigate = useNavigate()
  const validationSchema = yup.object().shape({
    id: yup.string().required(REQUIRED_MESSAGE),
    password: yup.string().required(REQUIRED_MESSAGE)
  })

  const useFormMethods = useForm<TSignInFormValues>({
    resolver: yupResolver(validationSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange'
  })

  const onSubmit = useCallback(() => {
    navigate('/dashboard')
  }, [navigate])

  return {
    actions: { useFormMethods, onSubmit }
  } as TUseSignInFormProps
}
