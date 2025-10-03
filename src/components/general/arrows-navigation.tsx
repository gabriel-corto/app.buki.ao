'use client'

import { ArrowLeft01Icon, ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { HeaderButton } from '../shared/buttons/header-button'
import { useRouter } from 'next/navigation'

export function ArrowsNavigation() {
  const router = useRouter()

  const goBack = () => {
    router.back()
  }
  const goNext = () => {
    router.forward()
  }

  return (
    <div className="flex items-center gap-4">
      <HeaderButton icon={ArrowLeft01Icon} onClick={goBack} />
      <HeaderButton icon={ArrowRight01Icon} onClick={goNext} />
    </div>
  )
}
