import { create } from 'zustand'

export interface Chapter {
  id: string
  number: number
  title: string
  subtitle?: string
  content: string
}

export interface Book {
  id: string
  level: number
  title: string
  subtitle: string
  inspiredBy: string
  description: string
  chapters: Chapter[]
}

interface LibraryState {
  currentBook: string | null
  currentChapter: string | null
  readingProgress: Record<string, Record<string, boolean>>
  setCurrentBook: (bookId: string | null) => void
  setCurrentChapter: (chapterId: string | null) => void
  markChapterRead: (bookId: string, chapterId: string) => void
  getBookProgress: (bookId: string, totalChapters: number) => number
}

export const useLibraryStore = create<LibraryState>((set, get) => ({
  currentBook: null,
  currentChapter: null,
  readingProgress: {},
  setCurrentBook: (bookId) => set({ currentBook: bookId, currentChapter: null }),
  setCurrentChapter: (chapterId) => set({ currentChapter: chapterId }),
  markChapterRead: (bookId, chapterId) =>
    set((state) => ({
      readingProgress: {
        ...state.readingProgress,
        [bookId]: {
          ...state.readingProgress[bookId],
          [chapterId]: true,
        },
      },
    })),
  getBookProgress: (bookId, totalChapters) => {
    const progress = get().readingProgress[bookId]
    if (!progress) return 0
    const completed = Object.values(progress).filter(Boolean).length
    return Math.round((completed / totalChapters) * 100)
  },
}))
