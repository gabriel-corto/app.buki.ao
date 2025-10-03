import {
  BookIcon,
  Calendar02Icon,
  House01Icon,
  Location01Icon,
  StarIcon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

import { PageLayout } from '@/components/layout/page-layout'
import { WidgetCard } from '@/components/shared/base/card/widget-card'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'

export default function ProfyPageDetails() {
  const subjects = [
    { name: 'Matemática', levels: ['Ensino Básico', 'Ensino Secundário', 'Universitário'] },
    { name: 'Física', levels: ['Ensino Secundário', 'Universitário'] },
    { name: 'Cálculo', levels: ['Universitário', 'Preparação para Exames'] },
  ]

  const availability = [
    { day: 'Segunda', hours: '14h - 18h' },
    { day: 'Terça', hours: '14h - 18h' },
    { day: 'Quarta', hours: '14h - 18h' },
    { day: 'Quinta', hours: '14h - 18h' },
    { day: 'Sexta', hours: '14h - 18h' },
  ]

  return (
    <PageLayout>
      <div className="space-y-6">
        <Card className="overflow-hidden p-4">
          <div>
            <img
              src="/cover.jpg"
              alt="Capa do perfil do professor"
              className="w-full h-48 object-cover rounded-md opacity-70"
            />
          </div>

          <div className="flex justify-between items-end p-4">
            <div className="flex flex-1 gap-4 items-center justify-start">
              <Avatar className="w-36 h-36 -mt-16 border-4 border-neutral-900 shadow-lg">
                <AvatarImage src="/profy.png" alt="Foto de perfil do professor" />
                <AvatarFallback className="bg-neutral-700 font-bold text-xl">PS</AvatarFallback>
              </Avatar>

              <div className="flex flex-col items-start gap-1">
                <strong className="font-semibold text-3xl">Pedro Silva</strong>
                <span className="text-xl text-neutral-300">Professor de Matemática Avançada</span>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-yellow-400">
                    ★★★★☆ <span className="text-neutral-400 text-sm">(24 avaliações)</span>
                  </div>
                  <span className="text-emerald-400 font-semibold text-lg">• 5.000 Kz/hora</span>
                </div>
              </div>
            </div>

            <button className="bg-emerald-600 px-6 py-2 -mt-4 rounded-xl text-white font-semibold cursor-pointer hover:bg-emerald-700 duration-200 transition-colors shadow-md">
              Agendar Aula
            </button>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <WidgetCard label="Sobre">
              <div className="text-neutral-300">
                <p>
                  Olá! Sou o Pedro Silva, apaixonado por matemática e pelo ensino há mais de 8 anos.
                  Acredito que qualquer aluno pode dominar a matemática com a abordagem certa e
                  explicações claras adaptadas ao seu ritmo de aprendizagem.
                </p>
              </div>
            </WidgetCard>

            <WidgetCard label="Disciplinas" icon={BookIcon}>
              <div className="space-x-3">
                {subjects.map((subject, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-neutral-800 text-neutral-300 rounded-full text-sm"
                  >
                    {subject.name}
                  </span>
                ))}
              </div>
            </WidgetCard>

            <WidgetCard label="Avaliações" icon={StarIcon}>
              <div></div>
            </WidgetCard>
          </div>

          <div className="space-y-6">
            <WidgetCard label="Horários Disponíveis" icon={Calendar02Icon}>
              <div className="space-y-5 p-1">
                {availability.map((slot, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm">
                    <span className="font-medium text-neutral-100">{slot.day}</span>
                    <span className="text-neutral-400">{slot.hours}</span>
                  </div>
                ))}
              </div>
            </WidgetCard>

            <WidgetCard label="Informações Adicionais">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <HugeiconsIcon icon={House01Icon} className="w-5 h-5 text-emerald-400 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-sm text-neutral-100">Modalidade</h3>
                    <p className="text-sm text-neutral-400">Online e Presencial</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <HugeiconsIcon
                    icon={Location01Icon}
                    className="w-5 h-5 text-emerald-400 mt-0.5"
                  />
                  <div>
                    <h3 className="font-semibold text-sm text-neutral-100">Localização</h3>
                    <p className="text-sm text-neutral-400">Luanda, Talatona</p>
                  </div>
                </div>
              </div>
            </WidgetCard>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
