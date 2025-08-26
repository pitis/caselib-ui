import { CustomCalendar } from '@/components/custom-calendar'
import { Button } from '@/components/ui/button'
import useMobile from '@/hooks/useIsMobile'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import TermenCard from '../termene/TermenCard'

const termeneData = [
  {
    id: 1,
    dosar: 'Dosar nr 201/20/2024',
    time: '10:30',
    judecatoria: 'Judecatoria CÂMPINA',
    persoane: 'Bobea Ștefan Mihai, +2',
    tip: 'Civil',
    labels: ['LABEL LON..', 'LABEL'],
    labelColors: ['bg-red-100 text-red-700', 'bg-green-100 text-green-700'],
  },
  {
    id: 2,
    dosar: 'Dosar nr 145/15/2024',
    time: '14:00',
    judecatoria: 'Judecatoria PLOIEȘTI',
    persoane: 'Popescu Maria, +1',
    tip: 'Penal',
    labels: ['URGENT', 'LABEL'],
    labelColors: ['bg-orange-100 text-orange-700', 'bg-blue-100 text-blue-700'],
  },
  {
    id: 3,
    dosar: 'Dosar nr 089/12/2024',
    time: '09:15',
    judecatoria: 'Judecatoria BRAȘOV',
    persoane: 'Ionescu Dan, +3',
    tip: 'Civil',
    labels: ['LABEL LON..', 'PRIORITATE'],
    labelColors: ['bg-purple-100 text-purple-700', 'bg-yellow-100 text-yellow-700'],
  },
]

export default function TermeneSection() {
  const isMobile = useMobile()
  const [showCalendar, setShowCalendar] = useState(!isMobile)

  return (
    <div className="space-y-4 bg-background">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Termene</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowCalendar(!showCalendar)}
          className="text-muted-foreground hover:text-foreground"
        >
          Vezi toate
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </div>

      <div
        className={cn(
          'grid gap-6',
          isMobile ? 'grid-cols-1' : showCalendar ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1',
        )}
      >
        {/* Scrollable Termene List */}
        <div className="space-y-4 bg-background">
          <div
            className={cn(
              'space-y-3',
              isMobile ? 'max-h-96 overflow-y-auto' : 'max-h-[600px] overflow-y-auto pr-2',
            )}
          >
            {termeneData.map((termen) => (
              <TermenCard key={termen.id} termen={termen} />
            ))}
          </div>
        </div>

        {/* Calendar Component */}
        {showCalendar && (
          <div className="lg:sticky lg:top-6">
            <CustomCalendar />
          </div>
        )}
      </div>
    </div>
  )
}
