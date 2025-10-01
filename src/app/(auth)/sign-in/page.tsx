import { LockKeyIcon, Login01Icon, Mail01Icon } from '@hugeicons/core-free-icons'

import { FormInput } from '@/components/shared/inputs/form-input'
import { FormButton } from '@/components/shared/buttons/form-button'

import { AuthFormHeader } from '@/components/shared/base/AuthFormHeader'
import { SocialAuthButton } from '@/components/shared/buttons/social-auth-button'
import { AuthFormFooter } from '@/components/shared/base/AuthFormFooter'
import { FormGroup } from '@/components/shared/base/FormGroup'

export default function SignInPage() {
  return (
    <div className="space-y-6 w-full flex items-center justify-center flex-col">
      <AuthFormHeader label="Fazer Login" />

      <form action="" className="space-y-6 min-w-96 mt-4">
        <FormGroup>
          <FormInput icon={Mail01Icon} />
          <FormInput icon={LockKeyIcon} />

          <FormButton icon={Login01Icon} label="Fazer Login" />
        </FormGroup>

        <FormGroup>
          <SocialAuthButton label="Entrar com google" provider="google" />
          <AuthFormFooter actionText="Cadastre-se" label="Não possui uma conta?" to="/sign-up" />
        </FormGroup>
      </form>
    </div>
  )
}
