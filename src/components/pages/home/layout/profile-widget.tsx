import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function ProfileWidget() {
  return (
    <aside className="col-span-3 flex flex-col gap-4">
      <div className="flex flex-col items-center gap-4 min-h-fit max-h-fit border border-neutral-800 bg-neutral-900 rounded-xl p-4">
        <div className="w-full rounded-xl overflow-hidden">
          <img
            src="/cover.jpg"
            alt=""
            className="w-full h-42 object-cover hover:scale-110 duration-200 transition-all cursor-pointer"
          />
        </div>

        <div className="flex flex-col gap-3 -mt-18 items-center justify-center">
          <Avatar className="w-24 h-24">
            <AvatarImage src="/avatar.jpeg" />
            <AvatarFallback className="bg-neutral-950 font-bold">GF</AvatarFallback>
          </Avatar>

          <div className="flex flex-col items-center text-neutral-200">
            <strong className="font-medium">Gabriel Corto</strong>
            <span className="text-sm">Software Developer</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
