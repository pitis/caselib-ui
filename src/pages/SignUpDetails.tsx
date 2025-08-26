import SignupStepper from '@/components/signup/signup-stepper/SignupStepper'

export default function SignupDetailsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="grid place-items-center mx-auto px-6 py-16">
        <SignupStepper />
      </div>
    </div>
  )
}
