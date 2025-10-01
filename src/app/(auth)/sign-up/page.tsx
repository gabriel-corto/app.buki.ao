import {
  ArrowRight02Icon,
  LockKeyIcon,
  Login01Icon,
  Mail01Icon,
  User02Icon,
} from '@hugeicons/core-free-icons'

import { FormInput } from '@/components/shared/inputs/form-input'
import { FormButton } from '@/components/shared/buttons/form-button'

import { AuthFormHeader } from '@/components/shared/base/AuthFormHeader'
import { SocialAuthButton } from '@/components/shared/buttons/social-auth-button'
import { AuthFormFooter } from '@/components/shared/base/AuthFormFooter'
import { FormGroup } from '@/components/shared/base/FormGroup'

export default function SignUpPage() {
  return (
    <div className="space-y-6 w-full flex items-center justify-center flex-col">
      <AuthFormHeader label="Cadastrar-se" />

      <form action="" className="space-y-6 min-w-96 mt-4">
        <FormGroup>
          <FormInput icon={User02Icon} />
          <FormInput icon={Mail01Icon} />
          <FormInput icon={LockKeyIcon} />

          <FormButton icon={ArrowRight02Icon} label="Cadastrar-me" />
        </FormGroup>

        <FormGroup>
          <SocialAuthButton label="Entrar com google" provider="google" />
          <AuthFormFooter actionText="Fazer Login" label="Já possui uma conta?" to="/sign-in" />
        </FormGroup>
      </form>
    </div>
  )
}
