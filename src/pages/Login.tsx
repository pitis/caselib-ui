import TestimonialSlider from '@/components/shared/TestimonialSlider'
import { useAuthStore } from '@/stores/auth'
import { IonButton, IonInput, IonLabel } from '@ionic/react'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

interface LoginFormData {
  email: string
  parola: string
}

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const login = useAuthStore((store) => store.login)
  // const location = useLocation()

  // const from = location.state?.from?.pathname || '/'

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginFormData>({
    defaultValues: {
      email: '',
      parola: '',
    },
  })

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data.email, data.parola)
      console.log('happened')
      // navigate(from, { replace: true })
    } catch (error) {
      setError('root', {
        message: 'Email sau parolă incorectă. Vă rugăm să încercați din nou.',
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Mobile Header */}
        <div className="flex items-center justify-center pt-16 pb-8">
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <div className="w-6 h-1 bg-white rounded-full"></div>
              <div className="w-6 h-1 bg-yellow-400 rounded-full ml-1"></div>
            </div>
            <span className="text-white text-2xl font-semibold">caselib</span>
          </div>
        </div>

        {/* Mobile Form */}
        <div className="px-6">
          <LoginForm
            onSubmit={onSubmit}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            isSubmitting={isSubmitting}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex min-h-screen">
        {/* Left Side - Testimonial */}
        <div className="flex-1 flex items-center justify-center p-12 m-4">
          <TestimonialSlider />
        </div>

        {/* Right Side - Form */}
        <div className="flex-1 flex items-center justify-center p-12 bg-gray-50">
          <LoginForm
            onSubmit={onSubmit}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            isSubmitting={isSubmitting}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        </div>
      </div>
    </div>
  )
}

interface LoginFormProps {
  onSubmit: (data: LoginFormData) => Promise<void>
  register: any
  handleSubmit: any
  errors: any
  isSubmitting: boolean
  showPassword: boolean
  setShowPassword: (show: boolean) => void
}

function LoginForm({
  onSubmit,
  register,
  handleSubmit,
  errors,
  isSubmitting,
  showPassword,
  setShowPassword,
}: LoginFormProps) {
  return (
    <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-lg">
      {/* Desktop Logo */}
      <div className="hidden lg:flex items-center justify-center mb-8">
        <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center">
          <div className="flex items-center">
            <div className="w-4 h-0.5 bg-white rounded-full"></div>
            <div className="w-4 h-0.5 bg-yellow-400 rounded-full ml-0.5"></div>
          </div>
        </div>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Autentificare</h1>
        <p className="text-gray-600 text-sm leading-relaxed">
          Autentificați-vă pentru a accesa uneltele de organizare special gândite pentru avocați.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {errors.root && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-xl">
            <p className="text-sm text-red-600">{errors.root.message}</p>
          </div>
        )}

        <div>
          <IonLabel
            // htmlFor="email"
            className="text-sm font-medium text-gray-700"
          >
            Email
          </IonLabel>
          <IonInput
            id="email"
            type="email"
            placeholder="ion@caselib.ro"
            {...register('email', {
              required: 'Email-ul este obligatoriu',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Adresa de email nu este validă',
              },
            })}
            className={`mt-1 h-12 border-gray-200 rounded-xl ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>

        <div>
          <IonLabel
            //  htmlFor="parola"
            className="text-sm font-medium text-gray-700"
          >
            Parola
          </IonLabel>
          <div className="relative mt-1">
            <IonInput
              id="parola"
              type={showPassword ? 'text' : 'password'}
              placeholder="Introduceți parola"
              {...register('parola', {
                required: 'Parola este obligatorie',
              })}
              className={`h-12 border-gray-200 rounded-xl pr-12 ${errors.parola ? 'border-red-500' : ''}`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.parola && <p className="mt-1 text-sm text-red-600">{errors.parola.message}</p>}
        </div>

        <IonButton
          type="submit"
          disabled={isSubmitting}
          // onClick={onSubmit}
          className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium disabled:opacity-50"
        >
          {isSubmitting ? 'Se autentifică...' : 'Autentificare'}
        </IonButton>

        <div className="text-center">
          <span className="text-gray-600 text-sm">
            Nu ai cont?{' '}
            <Link to="/signup" className="text-blue-600 hover:underline font-medium">
              Înregistrează-te
            </Link>
          </span>
        </div>
      </form>
    </div>
  )
}
