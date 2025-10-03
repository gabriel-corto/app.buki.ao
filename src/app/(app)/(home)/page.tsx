import { PageLayout } from '@/components/layout/page-layout'
import { ProfyCard } from '@/components/pages/home/cards/profy-card'

import { ProfysFilter } from '@/components/pages/home/filters/profy-filter'
import { ProfileWidget } from '@/components/pages/home/layout/profile-widget'

export default function HomePage() {
  return (
    <PageLayout>
      <div className="grid grid-cols-9 gap-16">
        <ProfysFilter />

        <div className="col-span-4">
          <div className="grid grid-cols-1 gap-8">
            <ProfyCard />
            <ProfyCard />
          </div>
        </div>

        <ProfileWidget />
      </div>
    </PageLayout>
  )
}
