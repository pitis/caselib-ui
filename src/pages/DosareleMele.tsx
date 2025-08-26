import ActiuniSidebar from '@/components/sections/dosarele-mele/ActiuniSidebar'
import DosareTabs from '@/components/sections/dosarele-mele/Tabs'

export default function DosareleMelePage() {
  return (
    <div className="flex w-full justify-between gap-4">
      <DosareTabs />
      <div className="pt-6">
        <ActiuniSidebar />
      </div>
    </div>
  )
}
