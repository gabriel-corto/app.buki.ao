import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar02Icon, ArrowRight02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { ProfyCardACtionsButton } from '../buttons/profy-card-acctions-button'

export function ProfyCard() {
  return (
    <Card className="space-y-4 min-h-72 hover:shadow-lg transition">
      <CardHeader className="flex items-center gap-4">
        <Avatar className="w-20 h-20">
          <AvatarImage src="/profy.png" />
          <AvatarFallback>GF</AvatarFallback>
        </Avatar>

        <div className="flex flex-col">
          <CardTitle>João Silva</CardTitle>
          <p className="text-sm text-neutral-400">Matemática • Ensino Secundário</p>
        </div>
      </CardHeader>

      <CardContent className="flex justify-between flex-col">
        <div className="flex flex-col space-y-2">
          <p className="text-lg font-bold text-neutral-100">5.000 kz / hora</p>
          <div className="flex items-center gap-1 text-yellow-400">
            ★★★★☆ <span className="text-neutral-400 text-sm">(24 avaliações)</span>
          </div>
        </div>

        <p className="text-sm text-neutral-400">
          Professor com 5 anos de experiência, especializado em preparação para exames.
        </p>
      </CardContent>

      <ProfyCardACtionsButton />
    </Card>
  )
}
