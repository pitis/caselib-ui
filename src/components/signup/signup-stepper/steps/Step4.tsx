import { RippleButton } from '@/components/ui/shadcn-io/ripple-button'
import { Check } from 'lucide-react'
import { Redirect } from 'react-router'

export default function StepFour() {
  const handleCompleteOnboarding = () => {
    return <Redirect to="/" />
  }
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-green-100 rounded-4xl flex items-center justify-center mx-auto mb-8">
        <Check size={32} className="text-green-600" />
      </div>

      <h1 className="text-2xl font-semibold text-gray-900 mb-4">
        Plata a fost realizată cu succes!
      </h1>
      <p className="text-gray-600 mb-8 leading-relaxed max-w-md mx-auto">
        Felicitări! Abonamentul tău este acum activ, iar tu ai acces complet la toate
        funcționalitățile platformei Caselib.
      </p>

      <div className="flex space-x-4 max-w-sm mx-auto">
        <RippleButton
          onClick={handleCompleteOnboarding}
          className="flex-1 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium"
        >
          Incepe acum
        </RippleButton>
      </div>
    </div>
  )
}
