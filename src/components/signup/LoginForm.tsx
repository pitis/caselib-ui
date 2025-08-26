import { useAuthStore } from '@/stores/auth'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

interface LoginFormData {
  email: string
  password: string
  keepAuthed: boolean
}

export default function RegistrationForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const { login } = useAuthStore()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    // setError,
    setValue,
    watch,
  } = useForm<LoginFormData>({
    defaultValues: {
      email: '',
      password: '',
      keepAuthed: false,
    },
  })

  const keepAuthed = watch('keepAuthed')

  const onSubmit = async (data: LoginFormData) => {
    console.log('Form submitted:', data)

    login(data.email, data.password)
  }

  return (
    <div className="w-full max-w-md md:rounded-3xl p-8 m-auto">
      <div className="flex items-center justify-center mb-8">
        <img src="caselib_logo_blue.svg" alt="caselib logo" />
      </div>

      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Autentificare</h1>
        <p className="text-gray-600 text-sm leading-relaxed">
          Autentificați-vă pentru a accesa uneltele de organizare special gândite pentru avocați.
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
          <Label htmlFor="password" className="text-sm font-medium text-gray-700">
            Parola
          </Label>
          <div className="relative mt-1">
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Introduceți parola"
              {...register('password', {
                required: 'Parola este obligatorie',
              })}
              className={`h-12 border-gray-200 rounded-xl pr-12 ${errors.password ? 'border-red-500' : ''}`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
          )}
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Checkbox
              id="keepAuthed"
              className="mt-1"
              checked={keepAuthed}
              onCheckedChange={(checked) => setValue('keepAuthed', !!checked)}
            />
            <Label htmlFor="keepAuthed" className="text-sm text-gray-600 leading-relaxed">
              Pastreaza-ma autentificat
            </Label>
          </div>

          <Link to="/forgot-password">
            <Label className="cursor-pointer hover:underline">Recupereaza parola</Label>
          </Link>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium disabled:opacity-50"
        >
          {isSubmitting ? 'Se autentifică...' : 'Autentificare'}
        </Button>

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
