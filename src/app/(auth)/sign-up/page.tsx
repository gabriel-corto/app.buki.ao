import { ArrowRight02Icon, LockKeyIcon, Mail01Icon, User03Icon } from '@hugeicons/core-free-icons'

import { FormInput } from '@/components/shared/inputs/form-input'
import { FormButton } from '@/components/shared/buttons/form-button'

import { FormGroup } from '@/components/shared/base/FormGroup'
import { AuthFormHeader } from '@/components/shared/base/AuthFormHeader'

import { AuthFormFooter } from '@/components/shared/base/AuthFormFooter'
import { SocialAuthButton } from '@/components/shared/buttons/social-auth-button'

export default function SignUpPage() {
  return (
    <div className="space-y-6 w-full flex items-center justify-center flex-col">
      <AuthFormHeader label="Cadastrar-se" />

      <form action="" className="space-y-6 min-w-96 mt-4">
        <FormGroup>
          <FormInput icon={User03Icon} placeholder="Digite o seu nome" />
          <FormInput icon={Mail01Icon} placeholder="Seu e-mail" />
          <FormInput icon={LockKeyIcon} placeholder="Digite uma senha de 6 caracateres" />

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
