import type { LucideIcon } from 'lucide-react'
import type React from 'react'

interface InfoRow {
  label: string
  value: string | React.ReactNode
}

interface InfoSectionProps {
  icon: LucideIcon
  title: string
  rows: InfoRow[]
}

export default function InfoSection({ icon: Icon, title, rows }: InfoSectionProps) {
  return (
    <div className="space-y-2 w-full min-w-3xs">
      {/* Header - Outside the box */}
      <div className="flex items-center gap-3">
        <Icon className="h-5 w-5 text-gray-600" />
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>

      {/* Content Box */}
      <div className="bg-white rounded-lg border border-gray-200">
        {rows.map((row, index) => (
          <div
            key={index}
            className={`flex flex-col sm:flex-row sm:items-start gap-2 p-4 ${
              index < rows.length - 1 ? 'border-b border-gray-100' : ''
            }`}
          >
            <div className="sm:w-48 flex-shrink-0">
              <span className="text-sm font-medium text-gray-700">{row.label}</span>
            </div>
            <div className="flex-1">
              {typeof row.value === 'string' ? (
                <span className="text-sm text-gray-900">{row.value}</span>
              ) : (
                row.value
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
