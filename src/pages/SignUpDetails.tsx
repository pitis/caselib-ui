import { ProgressStepper } from '@/components/signup/ProgressStepper'
import { SubscriptionCard } from '@/components/signup/SubscriptionCard'
import { Button } from '@/components/ui/button'
import { RippleButton } from '@/components/ui/shadcn-io/ripple-button'
import { useAuthStore } from '@/stores/auth'
import { ArrowLeft, Check, Mail } from 'lucide-react'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'

const steps = [
  { id: 1, name: 'Detalii cont', completed: true, current: false },
  { id: 2, name: 'Confirmare Email', completed: true, current: false },
  { id: 3, name: 'Selectare abonament', completed: false, current: true },
  { id: 4, name: 'Finalizare cont', completed: false, current: false },
]

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

export default function SignupDetailsPage() {
  const [currentStep, setCurrentStep] = useState(2)
  const [isResending, setIsResending] = useState(false)
  const { user, resendConfirmationEmail, confirmEmail } = useAuthStore()

  const handleResendEmail = async () => {
    setIsResending(true)
    try {
      // await resendConfirmationEmail()
      setCurrentStep(currentStep + 1)
    } catch (error) {
      console.error('Failed to resend email:', error)
    } finally {
      setIsResending(false)
    }
  }

  const handleBackToAuth = () => {
    return <Redirect to="/login" />
  }

  const handleEmailConfirmed = async () => {
    try {
      await confirmEmail('mock-token')
      setCurrentStep(3)
    } catch (error) {
      console.error('Email confirmation failed:', error)
    }
  }

  const handleCompleteOnboarding = () => {
    return <Redirect to="/" />
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Progress Steps */}

      {/* Content */}
      <div className="max-w-2xl mx-auto px-6 py-16">
        <ProgressStepper steps={steps} currentStep={currentStep} />
        {currentStep === 2 && (
          <EmailConfirmationStep
            user={user}
            onResendEmail={handleResendEmail}
            onBackToAuth={handleBackToAuth}
            onEmailConfirmed={handleEmailConfirmed}
            isResending={isResending}
          />
        )}

        {currentStep === 3 && (
          <SubscriptionStep onNext={() => setCurrentStep(4)} onBack={() => setCurrentStep(2)} />
        )}

        {currentStep === 4 && (
          <FinalizeStep onComplete={handleCompleteOnboarding} onBack={() => setCurrentStep(3)} />
        )}
      </div>
    </div>
  )
}

interface EmailConfirmationStepProps {
  user: any
  onResendEmail: () => Promise<void>
  onBackToAuth: () => void
  onEmailConfirmed: () => Promise<void>
  isResending: boolean
}

function EmailConfirmationStep({
  user,
  onResendEmail,
  onBackToAuth,
  onEmailConfirmed,
  isResending,
}: EmailConfirmationStepProps) {
  return (
    <div className="grid place-items-center text-center">
      {/* Icon */}
      <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
        <Mail size={32} className="text-gray-600" />
      </div>

      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">
        Te rugăm să îți confirmi adresa de email
      </h1>

      {/* Description */}
      <p className="text-gray-600 mb-8 leading-relaxed max-w-md mx-auto">
        Ți-am trimis un link de confirmare la adresa de email{' '}
        <span className="font-medium">[{user?.email}]</span>. Pentru a finaliza înregistrarea te
        rugăm să apeși pe butonul "Finalizează înregistrarea".
      </p>

      {/* Buttons */}
      <div className="space-y-4 w-full max-w-md flex flex-col-reverse md:flex-row justify-between gap-2">
        <RippleButton
          onClick={onBackToAuth}
          variant="outline"
          className="min-w-56 h-12 border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 bg-transparent"
        >
          <ArrowLeft size={16} className="mr-2" />
          Inapoi la autentificare
        </RippleButton>

        <RippleButton
          variant="default"
          onClick={onResendEmail}
          disabled={isResending}
          className="min-w-60 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium disabled:opacity-50"
        >
          {isResending ? 'Se retrimite...' : 'Retrimite email'}
        </RippleButton>
      </div>

      {/* Help Text */}
      <p className="text-sm text-gray-500 mt-6">
        Nu ai primit emailul? Verifică Spam-ul sau apasă "Retrimite email"
      </p>
    </div>
  )
}

interface SubscriptionStepProps {
  onNext: () => void
  onBack: () => void
}

function SubscriptionStep({ onNext, onBack }: SubscriptionStepProps) {
  const [selectedPlan, setSelectedPlan] = useState<string>('')

  const plans = [
    {
      id: 'basic',
      name: 'Plan Basic',
      price: '99 RON/lună',
      features: ['Monitorizare 50 dosare', 'Notificări email', 'Suport standard'],
    },
    {
      id: 'professional',
      name: 'Plan Professional',
      price: '199 RON/lună',
      features: [
        'Monitorizare 200 dosare',
        'Notificări în timp real',
        'Suport prioritar',
        'Rapoarte avansate',
      ],
      popular: true,
    },
    {
      id: 'enterprise',
      name: 'Plan Enterprise',
      price: '399 RON/lună',
      features: [
        'Monitorizare nelimitată',
        'API access',
        'Suport dedicat',
        'Integrări personalizate',
      ],
    },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      {/* Main Content */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Selecteaza un tip de abonament pentru a continua
        </h1>

        {/* Subscription Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
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
          onClick={onNext}
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 text-lg"
        >
          {selectedPlan === 'demo' ? 'Solicita demo' : 'Continua'}
        </Button>
      </div>
    </div>
  )
}

interface FinalizeStepProps {
  onComplete: () => void
  onBack: () => void
}

function FinalizeStep({ onComplete, onBack }: FinalizeStepProps) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-green-100 rounded-4xl flex items-center justify-center mx-auto mb-8">
        <Check size={32} className="text-green-600" />
      </div>

      <h1 className="text-2xl font-semibold text-gray-900 mb-4">Contul tău este gata!</h1>
      <p className="text-gray-600 mb-8 leading-relaxed max-w-md mx-auto">
        Felicitări! Abonamentul tău este acum activ, iar tu ai acces complet la toate
        funcționalitățile platformei Caselib.
      </p>

      <div className="flex space-x-4 max-w-sm mx-auto">
        <RippleButton
          onClick={onBack}
          variant="outline"
          className="flex-1 h-12 border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 bg-transparent"
        >
          Înapoi
        </RippleButton>
        <RippleButton
          onClick={onComplete}
          className="flex-1 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium"
        >
          Incepe acum
        </RippleButton>
      </div>
    </div>
  )
}
