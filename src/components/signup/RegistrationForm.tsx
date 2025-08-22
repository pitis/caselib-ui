import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Redirect } from 'react-router-dom'
import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

interface FormData {
  nume: string
  prenume: string
  email: string
  parola: string
  terms: boolean
}

export default function RegistrationForm() {
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<FormData>({
    defaultValues: {
      nume: '',
      prenume: '',
      email: '',
      parola: '',
      terms: false,
    },
  })

  const onSubmit = async (data: FormData) => {
    console.log('Form submitted:', data)
    // Add your registration logic here
    return <Redirect to="/signup-details" />
  }

  const termsValue = watch('terms')

  return (
    <div className="w-full max-w-md md:rounded-3xl p-8 m-auto">
      {/* Desktop Logo */}
      <div className="hidden lg:flex items-center justify-center mb-8">
        <img src="caselib_logo_blue.svg" alt="caselib logo" />
      </div>

      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Înregistrare</h1>
        <p className="text-gray-600 text-sm leading-relaxed">
          Înregistrați-vă sau autentificați-vă pentru a debloca unelte de organizare special gândite
          pentru avocați.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Label htmlFor="nume" className="text-sm font-medium text-gray-700">
            Nume
          </Label>
          <Input
            id="nume"
            type="text"
            placeholder="Ionescu"
            {...register('nume', {
              required: 'Numele este obligatoriu',
              minLength: { value: 2, message: 'Numele trebuie să aibă cel puțin 2 caractere' },
            })}
            className={`mt-1 h-12 border-gray-200 rounded-xl ${errors.nume ? 'border-red-500' : ''}`}
          />
          {errors.nume && <p className="mt-1 text-sm text-red-600">{errors.nume.message}</p>}
        </div>

        <div>
          <Label htmlFor="prenume" className="text-sm font-medium text-gray-700">
            Prenume
          </Label>
          <Input
            id="prenume"
            type="text"
            placeholder="Ion"
            {...register('prenume', {
              required: 'Prenumele este obligatoriu',
              minLength: { value: 2, message: 'Prenumele trebuie să aibă cel puțin 2 caractere' },
            })}
            className={`mt-1 h-12 border-gray-200 rounded-xl ${errors.prenume ? 'border-red-500' : ''}`}
          />
          {errors.prenume && <p className="mt-1 text-sm text-red-600">{errors.prenume.message}</p>}
        </div>

        <div>
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </Label>
          <Input
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
          <Label htmlFor="parola" className="text-sm font-medium text-gray-700">
            Parola
          </Label>
          <div className="relative mt-1">
            <Input
              id="parola"
              type={showPassword ? 'text' : 'password'}
              placeholder="Creaza o parola"
              {...register('parola', {
                required: 'Parola este obligatorie',
                minLength: { value: 8, message: 'Parola trebuie să aibă cel puțin 8 caractere' },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                  message:
                    'Parola trebuie să conțină cel puțin o literă mică, o literă mare și o cifră',
                },
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

        <div className="flex items-start space-x-2">
          <Checkbox
            id="terms"
            className="mt-1"
            checked={termsValue}
            onCheckedChange={(checked) => setValue('terms', !!checked)}
          />
          <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
            Am citit și sunt de acord cu{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Termenii și Condițiile
            </a>
            ,{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Politica de Cookies
            </a>{' '}
            și{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Politica de Confidențialitate
            </a>
            .
          </label>
        </div>
        <input
          type="checkbox"
          {...register('terms', { required: 'Trebuie să acceptați termenii și condițiile' })}
          className="hidden"
        />
        {errors.terms && <p className="text-sm text-red-600">{errors.terms.message}</p>}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium disabled:opacity-50"
        >
          {isSubmitting ? 'Se creează contul...' : 'Creeaza cont'}
        </Button>

        <div className="text-center">
          <span className="text-gray-600 text-sm">
            Ai deja cont?{' '}
            <a href="#" className="text-blue-600 hover:underline font-medium">
              Autentifica-te
            </a>
          </span>
        </div>
      </form>
    </div>
  )
}
