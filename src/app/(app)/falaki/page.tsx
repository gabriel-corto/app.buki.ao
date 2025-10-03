import { PageLayout } from '@/components/layout/page-layout'
import { Input } from '@/components/shared/inputs/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CheckUnread01FreeIcons, Search01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

export default function FalakiPage() {
  return (
    <PageLayout>
      {/* <div className="flex items-start gap-10">
        <div className="flex flex-col gap-4  w-96">
          <div>
            <Input type="text" placeholder="Pesquisar" icon={Search01Icon} />
          </div>

          <div className="flex-1 flex flex-col gap-6 mt-8">
            {Array.from({ length: 7 }).map((item) => {
              return (
                <div className="flex  justify-between pb-3 p-2 hover:bg-neutral-900 duration-200 cursor-pointer rounded-md border-b border-b-neutral-900">
                  <div className="flex gap-4 items-start">
                    <Avatar className="w-14 h-14">
                      <AvatarImage src="/profy.jpg" />
                      <AvatarFallback>GF</AvatarFallback>
                    </Avatar>

                    <div className="flex-col flex gap-1">
                      <strong className="text-lg">Gabriel Francisco</strong>
                      <span className="text-neutral-400">A aula correu bem?</span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <span className="text-sm text-neutral-400">4m</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div>
          <div>header do chat</div>
          <div>conversa</div>
          <div>caixa de mensagem</div>
        </div>
      </div> */}
      <p>Falaki</p>
    </PageLayout>
  )
}
