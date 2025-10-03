'use client'

import { HugeiconsIcon, IconSvgElement } from '@hugeicons/react'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps extends LinkProps {
  icon?: IconSvgElement
  label: string
}

export function NavLink({ icon, label, ...props }: NavLinkProps) {
  const pathName = usePathname()
  const isActive = pathName === props.href

  return (
    <Link
      {...props}
      className={`flex items-center hover:bg-neutral-800 ${
        isActive && 'bg-neutral-800'
      } duration-150 transition-all rounded-md gap-2 p-2`}
    >
      {icon && <HugeiconsIcon icon={icon} color={isActive ? '#10B981' : 'neutral-600'} />}
      <span>{label}</span>
    </Link>
  )
}
