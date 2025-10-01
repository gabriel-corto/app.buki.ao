import { SocialAuthButtonProps } from '@/types/components'

export function SocialAuthButton({ label, provider }: SocialAuthButtonProps) {
  return (
    <button
      type="button"
      className="bg-neutral-900 cursor-pointer text-sm hover:duration-150 hover:bg-neutral-800 flex items-center justify-center gap-1 rounded-md text-white font-semibold w-full p-3"
    >
      <img src={`/${provider}.svg`} className="w-5" />
      <span>{label}</span>
    </button>
  )
}
