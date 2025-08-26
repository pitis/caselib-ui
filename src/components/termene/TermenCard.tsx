import { cn } from '@/lib/utils'
import { Briefcase, Landmark, UsersRound } from 'lucide-react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Card } from '../ui/card'

interface Termen {
  id: number
  dosar: string
  time: string
  judecatoria: string
  persoane: string
  tip: string
  labels: string[]
  labelColors: string[]
}

interface Props {
  termen: Termen
}

export default function TermenCard({ termen }: Props) {
  return (
    <Card className="p-4 hover:shadow-lg transition-shadow relative rounded-[8px]">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-l-lg"></div>
      <div className="space-y-3 ml-4">
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
        <div className="space-y-2 text-sm text-muted-foreground font-medium">
          <div className="flex items-center gap-2">
            <Landmark className="size-4" />
            <span>{termen.judecatoria}</span>
          </div>
          <div className="flex items-center gap-2">
            <UsersRound className="size-4" />
            <span>{termen.persoane}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="size-4" />
            <span>{termen.tip}</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
