import { ReactNode } from 'react'
import TestimonialSlider from '../shared/TestimonialSlider'

interface Props {
  children: ReactNode[] | ReactNode
}

export default function LoginContainer({ children }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
          {/* Mobile Logo */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-white">
              <div className="flex items-center">
                <div className="w-8 h-1 bg-white rounded-full"></div>
                <div className="w-8 h-1 bg-yellow-400 rounded-full ml-1"></div>
              </div>
              <span className="text-2xl font-light">caselib</span>
            </div>
          </div>

          {/* Mobile Form */}
          {/* <RegistrationForm /> */}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex min-h-screen">
        {/* Left Side - Testimonial Slider */}
        <TestimonialSlider />

        {/* Right Side - Registration Form */}
        <div className="flex-1 bg-gray-50 flex items-center justify-center p-12">
          {/* <RegistrationForm /> */}
        </div>
      </div>
    </div>
  )
}
