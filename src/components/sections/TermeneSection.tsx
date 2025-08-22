import { CustomCalendar } from '@/components/custom-calendar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import useMobile from '@/hooks/useIsMobile'
import { cn } from '@/lib/utils'
import { useState } from 'react'

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
              <Card key={termen.id} className="p-4 hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  {/* Labels */}
                  <div className="flex gap-2 flex-wrap">
                    {termen.labels.map((label, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className={cn('text-xs font-medium', termen.labelColors[index])}
                      >
                        {label}
                      </Badge>
                    ))}
                  </div>

                  {/* Header with Dosar and Time */}
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-foreground">{termen.dosar}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                        {termen.time}
                      </span>
                      <Button variant="ghost" size="sm" className="p-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                          />
                        </svg>
                      </Button>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                      <span>{termen.judecatoria}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <span>{termen.persoane}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <span>{termen.tip}</span>
                    </div>
                  </div>
                </div>
              </Card>
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
