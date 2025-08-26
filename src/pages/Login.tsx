import TestimonialSlider from '@/components/shared/TestimonialSlider'
import LoginForm from '@/components/signup/LoginForm'

export default function LoginPage() {
  return (
    <div className="bg-gray-50 overflow-auto ">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Mobile Header */}
        <div className="h-52 flex items-center justify-center pt-16 pb-8 bg-blue-900">
          <img src="/assets/logos/caselib_logo_text.svg" alt="caselib logo" />
        </div>

        {/* Mobile Form */}
        <div className="rounded-3xl -mt-4 px-6 w-full z-10 bg-background">
          <LoginForm />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex min-h-screen h-full">
        {/* Left Side - Testimonial */}
        <TestimonialSlider />

        {/* Right Side - Form */}
        <div className="flex-1 flex items-center justify-center p-12 bg-gray-50">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
