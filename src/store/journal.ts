import { create } from 'zustand'

export interface JournalEntry {
  id: string
  content: string
  category: string
  tags?: string
  createdAt: string
}

interface JournalState {
  entries: JournalEntry[]
  setEntries: (entries: JournalEntry[]) => void
  addEntry: (entry: JournalEntry) => void
  removeEntry: (id: string) => void
}

export const useJournalStore = create<JournalState>((set) => ({
  entries: [],
  setEntries: (entries) => set({ entries }),
  addEntry: (entry) => set((state) => ({ entries: [entry, ...state.entries] })),
  removeEntry: (id) => set((state) => ({ entries: state.entries.filter((e) => e.id !== id) })),
}))
