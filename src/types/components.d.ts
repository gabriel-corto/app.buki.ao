import { ComponentProps, ReactComponentElement, ReactNode } from 'react'

import type { IconSvgElement } from '@hugeicons/react'
import { IconSvgObject } from '@hugeicons/core-free-icons'

export interface HeaderButtonProps extends ComponentProps<'button'> {
  icon: IconSvgObject
}

export interface AccountMenuItem {
  icon: IconSvgObject
  label: string
}

export interface SocialAuthButtonProps extends ComponentProps<'button'> {
  label: string
  provider: 'google' | 'linkedin'
}

export interface InputProps extends ComponentProps<'input'> {
  icon?: IconSvgElement
  className?: string
}

export interface ParentElementProps extends ComponentProps<'div'> {
  children: ReactNode
}

export interface FilterGroupHeaderProps extends ComponentProps<'div'> {
  label: string
  icon?: IconSvgElement
}

export interface WidgetCardProps extends ComponentProps<'div'> {
  icon?: IconSvgElement
  children: ReactNode
  label: string
}
