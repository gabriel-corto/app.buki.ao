import Link from 'next/link'

interface AuthFormFooterProps {
  to: string
  label: string
  actionText: string
}
export function AuthFormFooter({ to, label, actionText }: AuthFormFooterProps) {
  return (
    <div className="text-center">
      <p className="text-sm">
        {label}{' '}
        <Link href={to} className="font-medium text-brand underline">
          {actionText}
        </Link>
      </p>
    </div>
  )
}
