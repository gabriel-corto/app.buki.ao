import { IconSvgObject } from '@hugeicons/core-free-icons'
import { ReactComponentElement, ReactNode } from 'react'

export interface HeaderButtonProps {
  icon: IconSvgObject
}

export interface AccountMenuItem {
  icon: IconSvgObject
  label: string
}

export interface ParentElementProps {
  children: ReactNode
}
