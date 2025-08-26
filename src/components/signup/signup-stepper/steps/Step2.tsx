import { RippleButton } from '@/components/ui/shadcn-io/ripple-button'
import { ArrowLeft, MailSearch } from 'lucide-react'
import { useState } from 'react'
import { Redirect } from 'react-router'

export default function StepTwo() {
  const [isResending, setIsResending] = useState<boolean>(false)

  const handleBackToAuth = () => {
    return <Redirect to="/signup" />
  }

  return (
    <div className="grid place-items-center text-center">
      {/* Icon */}
      <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
        <MailSearch size={32} className="text-gray-600" />
      </div>

      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">
        Te rugăm să îți confirmi adresa de email
      </h1>

      {/* Description */}
      <p className="text-gray-600 mb-8 leading-relaxed max-w-md mx-auto">
        Ți-am trimis un link de confirmare la adresa de email{' '}
        <span className="font-medium">[]</span>. Pentru a finaliza înregistrarea te rugăm să apeși
        pe butonul "Finalizează înregistrarea".
      </p>

      {/* Buttons */}
      <div className="space-y-4 w-full max-w-md flex flex-col-reverse md:flex-row justify-between gap-2">
        <RippleButton
          onClick={handleBackToAuth}
          variant="outline"
          className="min-w-56 h-12 border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 bg-transparent"
        >
          <ArrowLeft size={16} className="mr-2" />
          Inapoi la autentificare
        </RippleButton>

        <RippleButton
          variant="default"
          onClick={() => setIsResending(true)}
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
