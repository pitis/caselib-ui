import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  id: string
  email: string
  nume: string
  prenume: string
  isEmailConfirmed: boolean
  role?: string
}

interface SignupData {
  nume: string
  prenume: string
  email: string
  password: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null

  // Actions
  login: (email: string, password: string) => Promise<void>
  signup: (userData: SignupData) => Promise<void>
  logout: () => void
  confirmEmail: (token: string) => Promise<void>
  resendConfirmationEmail: () => Promise<void>
  clearError: () => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  checkAuthStatus: () => Promise<void>
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isLoading: true,
      error: null,
      isAuthenticated: false,

      setLoading: (loading: boolean) => set({ isLoading: loading }),

      setError: (error: string | null) => set({ error }),

      clearError: () => set({ error: null }),

      checkAuthStatus: async () => {
        set({ isLoading: true })
        try {
          const token = localStorage.getItem('authToken')
          if (token) {
            // In a real app, validate token with backend
            const userData = localStorage.getItem('userData')
            if (userData) {
              const parsedUser = JSON.parse(userData)
              set({ user: parsedUser, isLoading: false, isAuthenticated: true })
              return
            }
          }
          set({ user: null, isLoading: false })
        } catch (error) {
          console.error('Auth check failed:', error)
          localStorage.removeItem('authToken')
          localStorage.removeItem('userData')
          set({
            user: null,
            error: 'Sesiunea a expirat. Vă rugăm să vă autentificați din nou.',
            isLoading: false,
          })
        }
      },

      login: async (email: string, password: string) => {
        set({ isLoading: true, error: null })
        try {
          // Simulate API call
          await new Promise((resolve, reject) => {
            setTimeout(() => {
              // Mock validation - in real app, this would be an API call
              if (email === 'test@example.com' && password === 'password') {
                resolve(true)
              } else {
                reject(new Error('Invalid credentials'))
              }
            }, 1000)
          })

          const mockUser: User = {
            id: '1',
            email,
            nume: 'Test',
            prenume: 'User',
            isEmailConfirmed: true,
            role: 'user',
          }

          localStorage.setItem('authToken', 'mock-token')
          localStorage.setItem('userData', JSON.stringify(mockUser))
          set({ user: mockUser, isLoading: false, isAuthenticated: true })
        } catch (error) {
          set({
            error: 'Email sau parolă incorectă. Vă rugăm să încercați din nou.',
            isLoading: false,
          })
          throw error
        }
      },

      signup: async (userData: SignupData) => {
        set({ isLoading: true, error: null })
        try {
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1000))

          const newUser: User = {
            id: Date.now().toString(),
            email: userData.email,
            nume: userData.nume,
            prenume: userData.prenume,
            isEmailConfirmed: false,
            role: 'user',
          }

          localStorage.setItem('authToken', 'mock-token')
          localStorage.setItem('userData', JSON.stringify(newUser))
          set({ user: newUser, isLoading: false, isAuthenticated: true })
        } catch (error) {
          set({
            error: 'A apărut o eroare la înregistrare. Vă rugăm să încercați din nou.',
            isLoading: false,
          })
          throw error
        }
      },

      confirmEmail: async (token: string) => {
        set({ isLoading: true, error: null })
        try {
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1000))

          const { user } = get()
          if (user) {
            const updatedUser = { ...user, isEmailConfirmed: true }
            localStorage.setItem('userData', JSON.stringify(updatedUser))
            set({ user: updatedUser, isLoading: false })
          }
        } catch (error) {
          set({
            error: 'Confirmarea email-ului a eșuat. Vă rugăm să încercați din nou.',
            isLoading: false,
          })
          throw error
        }
      },

      resendConfirmationEmail: async () => {
        set({ error: null })
        try {
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1000))
        } catch (error) {
          set({
            error: 'Retrimirea email-ului a eșuat. Vă rugăm să încercați din nou.',
          })
          throw error
        }
      },

      logout: () => {
        localStorage.removeItem('authToken')
        localStorage.removeItem('userData')
        set({ user: null, error: null })
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ user: state.user }),
    },
  ),
)
