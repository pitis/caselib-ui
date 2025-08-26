import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { CalendarIntegrationPrompt } from './CalendarIntegrationPrompt'

interface CalendarEvent {
  id: string
  title: string
  type: 'deadline' | 'hearing' | 'meeting' | 'reminder'
  color: string
  time?: string
}

interface CalendarDay {
  date: number
  isCurrentMonth: boolean
  isToday: boolean
  events: CalendarEvent[]
}

// const eventColors = {
//   deadline: 'bg-red-500 text-white',
//   hearing: 'bg-blue-500 text-white',
//   meeting: 'bg-green-500 text-white',
//   reminder: 'bg-orange-500 text-white',
// }

const sampleEvents: Record<string, CalendarEvent[]> = {
  '3': [{ id: '1', title: '12/100/2...', type: 'deadline', color: 'bg-blue-500', time: '10:00' }],
  '5': [{ id: '2', title: '234/12V...', type: 'hearing', color: 'bg-blue-500', time: '14:30' }],
  '10': [
    { id: '3', title: '12/100/2...', type: 'deadline', color: 'bg-blue-500' },
    { id: '4', title: '303/42/...', type: 'reminder', color: 'bg-orange-500' },
    { id: '5', title: '128/1/20...', type: 'meeting', color: 'bg-green-500' },
  ],
  '15': [{ id: '6', title: '32/2/2024', type: 'hearing', color: 'bg-blue-500' }],
  '20': [{ id: '7', title: '20/100/2...', type: 'deadline', color: 'bg-red-500' }],
  '21': [
    { id: '8', title: '41/3/20', type: 'reminder', color: 'bg-orange-500' },
    { id: '9', title: '+ 2 altele', type: 'meeting', color: 'bg-gray-400' },
  ],
}

interface Props {
  showPrompt?: boolean
}

export function CustomCalendar({ showPrompt = true }: Props) {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 4, 1)) // May 2025
  const [selectedDate, setSelectedDate] = useState<number | null>(null)

  const monthNames = [
    'Ianuarie',
    'Februarie',
    'Martie',
    'Aprilie',
    'Mai',
    'Iunie',
    'Iulie',
    'August',
    'Septembrie',
    'Octombrie',
    'Noiembrie',
    'Decembrie',
  ]

  const dayNames = ['Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'Sâm', 'Dum']

  const getDaysInMonth = (date: Date): CalendarDay[] => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = (firstDay.getDay() + 6) % 7 // Adjust for Monday start

    const days: CalendarDay[] = []

    // Add previous month's days
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const prevDate = new Date(year, month, -i)
      days.push({
        date: prevDate.getDate(),
        isCurrentMonth: false,
        isToday: false,
        events: [],
      })
    }

    // Add current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = new Date().toDateString() === new Date(year, month, day).toDateString()
      days.push({
        date: day,
        isCurrentMonth: true,
        isToday,
        events: sampleEvents[day.toString()] || [],
      })
    }

    // Add next month's days to complete the grid
    const remainingDays = 42 - days.length
    for (let day = 1; day <= remainingDays; day++) {
      days.push({
        date: day,
        isCurrentMonth: false,
        isToday: false,
        events: [],
      })
    }

    return days
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const days = getDaysInMonth(currentDate)

  return (
    <>
      {showPrompt && <CalendarIntegrationPrompt />}

      <Card className="pt-4 pb-0 gap-0">
        {/* Calendar Header */}
        <div className="px-4 flex items-center justify-between mb-4">
          <h3 className="font-semibold text-lg">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>
          <div className="text-sm text-muted-foreground">6 Mai, 2025 - 12 Mai, 2025</div>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigateMonth('prev')}
              className="p-1 h-8 w-8"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigateMonth('next')}
              className="p-1 h-8 w-8"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </div>
        </div>

        {/* Day Headers */}
        <div className="grid grid-cols-7">
          {dayNames.map((day) => (
            <div
              key={day}
              className="text-center text-xs font-medium text-muted-foreground p-2 border border-border/50"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7">
          {days.map((day, index) => (
            <div
              key={index}
              className={cn(
                'min-h-[135px] p-1 border border-border/50 cursor-pointer hover:bg-accent/50 transition-colors',
                !day.isCurrentMonth && 'text-muted-foreground bg-muted/20',
                day.isToday && 'bg-primary/10 border-primary/30',
                selectedDate === day.date && day.isCurrentMonth && 'bg-primary/20 border-primary',
              )}
              onClick={() => setSelectedDate(day.isCurrentMonth ? day.date : null)}
            >
              <div className="text-sm font-medium mb-1">{day.date}</div>
              <div className="space-y-1">
                {day.events.slice(0, 3).map((event) => (
                  <Badge
                    key={event.id}
                    variant="secondary"
                    className={cn(
                      'text-xs px-1 py-0 h-4 text-white font-medium block truncate',
                      event.color,
                    )}
                  >
                    {event.title}
                  </Badge>
                ))}
                {day.events.length > 3 && (
                  <div className="text-xs text-muted-foreground">
                    +{day.events.length - 3} altele
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Calendar Legend */}
        {/* <div className="mt-4 pt-4 border-t border-border">
        <div className="flex flex-wrap gap-3 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
            <span>Termene</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
            <span>Ședințe</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
            <span>Întâlniri</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-orange-500 rounded-sm"></div>
            <span>Reminder</span>
          </div>
        </div>
      </div> */}
      </Card>
    </>
  )
}
