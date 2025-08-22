import TestimonialSlider from '@/components/shared/TestimonialSlider'
import RegistrationForm from '@/components/signup/RegistrationForm'
import { Redirect } from 'react-router'

export default function SignupPage() {
  // const { signup } = useAuth()

  const handleSignup = async (data: any) => {
    try {
      // await signup(data)
      return <Redirect to="/signup-details" />
    } catch (error) {
      console.error('Signup failed:', error)
    }
  }

  return (
    <div className="bg-gray-50 overflow-auto ">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Mobile Header */}
        <div className="flex items-center justify-center pt-16 pb-8 bg-blue-600">
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <div className="w-6 h-1 bg-white rounded-full"></div>
              <div className="w-6 h-1 bg-yellow-400 rounded-full ml-1"></div>
            </div>
            <span className="text-white text-2xl font-semibold">caselib</span>
          </div>
        </div>

        {/* Mobile Form */}
        <div className="px-6 w-full z-10">
          <RegistrationForm />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex min-h-screen h-full">
        {/* Left Side - Testimonial */}
        {/* <div className="flex-1 flex items-center justify-center p-12"> */}
        <TestimonialSlider />
        {/* </div> */}

        {/* Right Side - Form */}
        <div className="flex-1 flex items-center justify-center p-12 bg-gray-50">
          <RegistrationForm />
        </div>
      </div>
    </div>
  )
}
