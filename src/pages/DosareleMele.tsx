import MainAppLayout from '@/components/layout/MainAppLayout'
import ActiuniSidebar from '@/components/sections/dosarele-mele/ActiuniSidebar'
import DosareTabs from '@/components/sections/dosarele-mele/Tabs'

export default function DosareleMelePage() {
  return (
    <MainAppLayout>
      <div className="flex w-full justify-between gap-4">
        <DosareTabs />
        <div className="pt-6">
          <ActiuniSidebar />
        </div>
      </div>
    </MainAppLayout>
  )
}
