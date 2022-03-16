import { FC } from 'react'
import { FormProvider, Controller } from 'react-hook-form'
//
import { Atoms } from '@/components'
//
import { useSignInForm } from './hooks'
import type { TUseSignInFormProps } from './hooks'

//  Style
import {
  containerStyle,
  innerStyle,
  headerStyle,
  titleStyle,
  alertStyle,
  textFieldStyle,
  formConfigStyle,
  forgotPasswordLinkStyle
} from './style'

// Interface
export type SignInFormPresenterProps = TUseSignInFormProps

// Presenter
export const SignInFormPresenter: FC<SignInFormPresenterProps> = ({
  actions: { useFormMethods, onSubmit }
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useFormMethods
  return (
    <FormProvider {...useFormMethods}>
      <Atoms.Paper css={containerStyle} elevation={0}>
        <Atoms.Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Atoms.Box css={innerStyle}>
            <Atoms.Box css={headerStyle}>
              <Atoms.Typography css={titleStyle} component="h1">
                Sign in to 🚀 Space UI Kit
              </Atoms.Typography>
              <Atoms.Typography component="p">
                Enter your details below.
              </Atoms.Typography>
            </Atoms.Box>
            <Atoms.Box>
              <Atoms.Alert severity="info" css={alertStyle}>
                ID : demo@spaceui.kit / Password : demo1234
              </Atoms.Alert>
              <Atoms.Box css={textFieldStyle}>
                <Controller
                  name="id"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Atoms.TextField
                      label="ID"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      error={errors.id ? true : false}
                      helperText={errors.id ? errors.id?.message : ''}
                      {...field}
                    />
                  )}
                />
              </Atoms.Box>
              <Atoms.Box css={textFieldStyle}>
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Atoms.TextField
                      label="Password"
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      error={errors.password ? true : false}
                      helperText={
                        errors.password ? errors.password?.message : ''
                      }
                      {...field}
                    />
                  )}
                />
              </Atoms.Box>
              <Atoms.Box>
                <Atoms.Box css={formConfigStyle}>
                  <Atoms.FormControlLabel
                    control={<Atoms.Checkbox defaultChecked />}
                    label="Remember me"
                  />
                  <Atoms.Typography
                    component="a"
                    href="#"
                    css={forgotPasswordLinkStyle}
                  >
                    Forgot password?
                  </Atoms.Typography>
                </Atoms.Box>

                <Atoms.Button
                  type="submit"
                  size="large"
                  variant="contained"
                  fullWidth
                >
                  Sign in
                </Atoms.Button>
              </Atoms.Box>
            </Atoms.Box>
          </Atoms.Box>
        </Atoms.Box>
      </Atoms.Paper>
    </FormProvider>
  )
}

// Container
export const SignInForm: FC = () => {
  const { actions } = useSignInForm()

  return <SignInFormPresenter actions={actions} />
}
