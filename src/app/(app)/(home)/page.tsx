import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Books01Icon,
  FilterIcon,
  Location01Icon,
  MapsLocation01Icon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Filter } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="grid grid-cols-9 gap-4">
      <div className="col-span-7">
        <div className="flex flex-col text-xl gap-1">
          <span>Olá,</span>
          <strong className="text-2xl font-medium">Gabriel Francisco</strong>
        </div>

        <div className="mt-3 w-md">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Gabriel" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Gabriel">Gabriel</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-8 mt-10">
          <Card className="bg-neutral-900/50 space-y-4 w-[34rem] min-h-72 text-neutral-100 border border-neutral-800">
            <CardHeader className="flex items-center justify-between">
              <CardTitle className="text-2xl text-neutral-200 font-normal"></CardTitle>
            </CardHeader>

            <CardContent className="text-xl font-bold"></CardContent>
          </Card>

          <Card className="bg-neutral-900/50 space-y-4 w-[34rem] min-h-72 text-neutral-100 border border-neutral-800">
            <CardHeader className="flex items-center justify-between">
              <CardTitle className="text-2xl text-neutral-200 font-normal"></CardTitle>
            </CardHeader>

            <CardContent className="text-xl font-bold"></CardContent>
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
