import { create } from 'zustand'

export type Section = 'bibliotheque' | 'miroir' | 'chercheur' | 'therapie'

interface NavigationState {
  activeSection: Section
  sidebarOpen: boolean
  setActiveSection: (section: Section) => void
  setSidebarOpen: (open: boolean) => void
  toggleSidebar: () => void
}

export const useNavigationStore = create<NavigationState>((set) => ({
  activeSection: 'bibliotheque',
  sidebarOpen: false,
  setActiveSection: (section) => set({ activeSection: section, sidebarOpen: false }),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
}))
