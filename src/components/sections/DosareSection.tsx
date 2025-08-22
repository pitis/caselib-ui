import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useState } from 'react'

const dosareData = [
  {
    id: 1,
    dosar: 'Dosar nr 201/20/2024',
    judecatoria: 'Judecatoria CÂMPINA',
    persoane: 'Bobea Ștefan Mihai, +2',
    tip: 'Civil',
    labels: ['LABEL LON..', 'LABEL'],
    labelColors: ['bg-red-100 text-red-700', 'bg-green-100 text-green-700'],
    hasNotification: true,
    hasCalendar: true,
  },
  {
    id: 2,
    dosar: 'Dosar nr 145/15/2024',
    judecatoria: 'Judecatoria PLOIEȘTI',
    persoane: 'Popescu Maria, +1',
    tip: 'Penal',
    labels: ['URGENT', 'LABEL'],
    labelColors: ['bg-orange-100 text-orange-700', 'bg-blue-100 text-blue-700'],
    hasNotification: false,
    hasCalendar: true,
  },
  {
    id: 3,
    dosar: 'Dosar nr 089/12/2024',
    judecatoria: 'Judecatoria BRAȘOV',
    persoane: 'Ionescu Dan, +3',
    tip: 'Civil',
    labels: ['LABEL LON..', 'PRIORITATE'],
    labelColors: ['bg-purple-100 text-purple-700', 'bg-yellow-100 text-yellow-700'],
    hasNotification: true,
    hasCalendar: false,
  },
]

export default function DosareleSection() {
  const [activeTab, setActiveTab] = useState('termenele-mele')

  return (
    <div className="space-y-4 overflow-scroll-y">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Dosarele mele</h2>
        <div className="flex gap-2">
          <Button
            variant={activeTab === 'termenele-mele' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setActiveTab('termenele-mele')}
          >
            Termenele mele
          </Button>
          <Button
            variant={activeTab === 'dosarele-mele' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setActiveTab('dosarele-mele')}
          >
            Dosarele mele
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        {dosareData.map((dosar) => (
          <Card key={dosar.id} className="p-4 hover:shadow-md transition-shadow">
            <div className="space-y-3">
              {/* Labels */}
              <div className="flex gap-2 flex-wrap">
                {dosar.labels.map((label, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className={`text-xs font-medium ${dosar.labelColors[index]}`}
                  >
                    {label}
                  </Badge>
                ))}
              </div>

              {/* Header with Dosar and Actions */}
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-foreground">{dosar.dosar}</h3>
                <div className="flex items-center gap-2">
                  {dosar.hasNotification && (
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
                          d="M15 17h5l-5 5v-5zM4 19h6v-6H4v6z"
                        />
                      </svg>
                    </Button>
                  )}
                  {dosar.hasCalendar && (
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
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </Button>
                  )}
                  <Button variant="ghost" size="sm" className="p-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <span>{dosar.judecatoria}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span>{dosar.persoane}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span>{dosar.tip}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
