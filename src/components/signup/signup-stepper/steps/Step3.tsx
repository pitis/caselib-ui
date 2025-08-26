import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { SubscriptionCard } from '../../SubscriptionCard'

const demoFeatures = [
  { text: 'Limita de 20 dosare urmarite', included: true },
  { text: 'Access aplicatie mobil', included: true },
  { text: 'Notificari in timp real', included: true },
  { text: 'Anuleaza oricand', included: true },
]

const standardFeatures = [
  { text: 'Limita de 200 dosare urmarite', included: true },
  { text: 'Access aplicatie mobil', included: true },
  { text: 'Notificari in timp real', included: true },
  { text: 'Anuleaza oricand', included: true },
]

export default function StepThree() {
  const [selectedPlan, setSelectedPlan] = useState<string>('')

  return (
    <div className="max-w-3xl mx-auto">
      {/* Main Content */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Selecteaza un tip de abonament pentru a continua
        </h1>

        {/* Subscription Cards */}
        <div className="grid md:grid-cols-2 gap-8 mx-auto mb-12">
          <SubscriptionCard
            title="Cont Demo"
            subtitle="1 luna gratuita"
            features={demoFeatures}
            selected={selectedPlan === 'demo'}
            onSelect={() => setSelectedPlan('demo')}
          />
          <SubscriptionCard
            title="Cont Standard"
            price="50RON/luna"
            originalPrice="70RON"
            features={standardFeatures}
            selected={selectedPlan === 'standard'}
            onSelect={() => setSelectedPlan('standard')}
          />
        </div>

        {/* Action Button */}
        <Button
          //   onClick={onNext}
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg"
        >
          {selectedPlan === 'demo' ? 'Solicita demo' : 'Continua'}
        </Button>
      </div>
    </div>
  )
}
