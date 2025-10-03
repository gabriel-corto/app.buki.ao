import {
  FilterGroupHeader,
  FilterGroupSeparator,
} from '@/components/shared/base/filters/filter-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Book01Icon, GraduateMaleIcon, Location01Icon } from '@hugeicons/core-free-icons'

export function ProfysFilter() {
  return (
    <aside className="col-span-2 flex flex-col gap-10">
      <FilterGroupSeparator>
        <FilterGroupHeader label="Disciplinas" icon={Book01Icon} />

        <div className="grid grid-cols-2 gap-3">
          {Array.from({ length: 6 }).map((item, index) => {
            return (
              <div
                key={index}
                className="bg-neutral-900 w-full border hover:scale-105 duration-150 cursor-pointer hover:bg-amber-500/5 hover:text-brand hover:border-brand border-neutral-800 h-10 rounded-xl flex items-center justify-center font-medium"
              >
                Física
              </div>
            )
          })}
        </div>
      </FilterGroupSeparator>

      <FilterGroupSeparator>
        <FilterGroupHeader label="Localização" icon={Location01Icon} />

        <Select>
          <SelectTrigger className="rounded-xl w-full">
            <SelectValue placeholder="Selecione a Localização" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="Luanda">Luanda</SelectItem>
            <SelectItem value="Benguela">Benguela</SelectItem>
          </SelectContent>
        </Select>
      </FilterGroupSeparator>

      <FilterGroupSeparator>
        <FilterGroupHeader label="Nível Académico" icon={GraduateMaleIcon} />
        <div className="grid grid-cols-1 gap-3">
          {Array.from({ length: 3 }).map((item, index) => {
            return (
              <div
                key={index}
                className="bg-neutral-900 w-full border hover:scale-105 duration-150 cursor-pointer hover:bg-amber-500/5 hover:text-brand hover:border-brand border-neutral-800 h-10 rounded-xl flex items-center justify-center font-medium"
              >
                Ensino Secundário
              </div>
            )
          })}
        </div>
      </FilterGroupSeparator>
    </aside>
  )
}
