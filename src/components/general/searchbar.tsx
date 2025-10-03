import { Search01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

export function SearchBar() {
  return (
    <form className="relative">
      <HugeiconsIcon icon={Search01Icon} className="absolute top-3 left-2 text-neutral-500" />

      <input
        type="text"
        placeholder="Faça a sua pesquisa"
        className="bg-transparent border border-neutral-700 focus:border-brand duration-200 focus:outline-0 p-3 text-14 rounded-lg pl-10 w-96"
      />
    </form>
  )
}
