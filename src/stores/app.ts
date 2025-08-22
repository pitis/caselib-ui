import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AppState {
  tutorialsCollapsed: boolean
  setTutorialsCollapsed: (collapsed: boolean) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      tutorialsCollapsed: false,
      setTutorialsCollapsed: (collapsed: boolean) => set({ tutorialsCollapsed: collapsed }),
    }),
    {
      name: 'tutoriale-app-storage',
    },
  ),
)
