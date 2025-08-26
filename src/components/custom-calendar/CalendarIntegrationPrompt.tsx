import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

export function CalendarIntegrationPrompt() {
  const handleIntegrationClick = () => {
    // Handle calendar integration logic here
    console.log('[v0] Calendar integration clicked')
  }

  return (
    <Card className="p-4 mb-4" onClick={handleIntegrationClick}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Google Calendar Icon */}
          <div className="size-8 rounded flex items-center justify-center">
            <img src="/assets/calendars/google_calendar.svg" />
          </div>

          {/* Outlook Icon */}
          <div className="size-8 rounded flex items-center justify-center">
            <img src="/assets/calendars/outlook.svg" />
          </div>

          {/* Integration Text */}
          <span className="text-sm font-small text-foreground">
            Sincronizeaza-ti calendarul de termene cu Google sau Outlook Calendar
          </span>
        </div>

        {/* Arrow Icon */}
        <Button variant="outline" size="sm" className="p-1 h-8 w-8">
          <ArrowRight />
        </Button>
      </div>
    </Card>
  )
}
