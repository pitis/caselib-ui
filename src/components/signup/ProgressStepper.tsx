import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

interface Step {
  id: string | number
  name: string
  completed: boolean
  current: boolean
}

interface ProgressStepperProps {
  steps: Step[]
  currentStep: number
}

export function ProgressStepper({ steps, currentStep }: ProgressStepperProps) {
  return (
    <div className="w-full max-w-4xl mx-auto mb-12">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            {/* Step Circle */}
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  'w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors',
                  step.completed
                    ? 'bg-blue-500 border-blue-500 text-white'
                    : step.current
                      ? 'bg-blue-500 border-blue-500 text-white'
                      : 'bg-gray-100 border-gray-300 text-gray-400',
                )}
              >
                {step.completed ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <div className="w-2 h-2 bg-current rounded-full" />
                )}
              </div>
              <span
                className={cn(
                  'mt-2 text-sm font-medium text-center max-w-20',
                  step.completed || step.current ? 'text-blue-600' : 'text-gray-500',
                )}
              >
                {step.name}
              </span>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div
                className={cn(
                  'flex-1 h-0.5 mx-4 transition-colors',
                  steps[index + 1].completed || step.completed ? 'bg-blue-500' : 'bg-gray-300',
                )}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
