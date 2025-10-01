interface AuthFormHeaderProps {
  label: string
}

export function AuthFormHeader({ label }: AuthFormHeaderProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <img src="/logo.svg" alt="" className="w-32" /> |
      <h2 className="text-2xl font-semibold">{label}</h2>
    </div>
  )
}
