import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'

import { ArrowRight02Icon, Calendar02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

export default function HomePage() {
  return (
    <div className="grid grid-cols-9 gap-4">
      <div className="col-span-7">
        <div className="flex flex-col text-xl gap-1">
          <span>Olá,</span>
          <strong className="text-2xl font-medium">Gabriel Francisco</strong>
        </div>

        <div className="mt-3 w-md"></div>

        <div className="flex flex-col gap-8 mt-10">
          <Card className="bg-neutral-900 space-y-4 w-[34rem] min-h-72 text-neutral-100 border border-neutral-800 rounded-2xl shadow-md hover:shadow-lg transition">
            <CardHeader className="flex items-center gap-4">
              <Avatar className="bg-neutral-950 w-20 h-20 border border-neutral-900 cursor-pointer">
                <AvatarImage src="/profy.png" />
                <AvatarFallback className="bg-neutral-950 font-bold">GF</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <CardTitle className="text-xl text-neutral-200 font-semibold">João Silva</CardTitle>
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

            <CardFooter className="justify-end gap-x-4 flex">
              <button className="px-4 py-2 rounded-xl bg-amber-500 flex items-center gap-2 hover:bg-amber-500 cursor-pointer text-white font-medium transition">
                <HugeiconsIcon icon={Calendar02Icon} /> Marcar aula
              </button>

              <button className="px-4 py-2 flex items-center font-semibold rounded-xl bg-neutral-700 hover:bg-neutral-500 cursor-pointer text-white transition">
                <HugeiconsIcon icon={ArrowRight02Icon} />
                Ver Perfil
              </button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <aside className="col-span-2 flex flex-col gap-4">
        <div className="flex flex-col items-center gap-4 min-h-60 max-h-60 border border-neutral-800 bg-neutral-900 rounded-xl p-4">
          <Avatar className="bg-neutral-950 w-20 h-20 border border-neutral-900 cursor-pointer">
            <AvatarImage src="/avatar.jpeg" />
            <AvatarFallback className="bg-neutral-950 font-bold">GF</AvatarFallback>
          </Avatar>

          <div className="flex flex-col items-center text-neutral-200">
            <strong className="font-medium">Gabriel Corto</strong>
            <span className="text-sm">Software Developer</span>
          </div>

          <div className="flex items-center gap-1">
            <Badge className="bg-neutral-800/60 border border-neutral-800">React</Badge>
            <Badge className="bg-neutral-800/60 border border-neutral-800">React</Badge>
            <Badge className="bg-neutral-800/60 border border-neutral-800">React</Badge>
          </div>
        </div>

        <div className="gap-4 min-h-20 max-h-20 border border-neutral-800 bg-neutral-900 rounded-xl p-4"></div>
      </aside>
    </div>
  )
}
