import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

interface SubscriptionFeature {
  text: string
  included: boolean
}

interface SubscriptionCardProps {
  title: string
  subtitle?: string
  price?: string
  originalPrice?: string
  features: SubscriptionFeature[]
  selected: boolean
  onSelect: () => void
  className?: string
}

export function SubscriptionCard({
  title,
  subtitle,
  price,
  originalPrice,
  features,
  selected,
  onSelect,
  className,
}: SubscriptionCardProps) {
  return (
    <div
      className={cn(
        'min-w-[350px] relative p-3 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md',
        selected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white hover:border-gray-300',
        className,
      )}
      onClick={onSelect}
    >
      {/* Header */}
      <div className="mb-2 pb-2 flex gap-2 items-center min-w-xs justify-between border-b border-gray-200">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>
          {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
          {price && (
            <div className="flex items-center gap-1">
              {originalPrice && (
                <span className="text-gray-400 line-through text-sm">{originalPrice}</span>
              )}
              <span className="text-sm text-gray-900">{price}</span>
            </div>
          )}
        </div>

        <div>
          <div
            className={cn(
              'w-6 h-6 rounded-full border-2 flex items-center justify-center',
              selected ? 'bg-blue-500 border-blue-500' : 'border-gray-300 bg-white',
            )}
          >
            {selected && <Check className="w-4 h-4 text-white" />}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="space-y-3 pt-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <Check
              className={cn(
                'w-5 h-5 flex-shrink-0',
                feature.included ? 'text-blue-500' : 'text-gray-300',
              )}
            />
            <span className={cn('text-sm', feature.included ? 'text-gray-700' : 'text-gray-400')}>
              {feature.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
