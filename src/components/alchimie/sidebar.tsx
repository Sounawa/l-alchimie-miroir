'use client'

import { useNavigationStore } from '@/store/navigation'
import { useLibraryStore } from '@/store/library'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  Sparkles,
  Search,
  Heart,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Section } from '@/store/navigation'

const sections: { id: Section; label: string; icon: React.ReactNode; description: string }[] = [
  { id: 'bibliotheque', label: 'Bibliothèque', icon: <BookOpen className="w-5 h-5" />, description: 'Les 3 Livres' },
  { id: 'miroir', label: 'Miroir', icon: <Sparkles className="w-5 h-5" />, description: 'Expérience' },
  { id: 'chercheur', label: 'Chercheur', icon: <Search className="w-5 h-5" />, description: 'Recherche' },
  { id: 'therapie', label: 'Thérapie', icon: <Heart className="w-5 h-5" />, description: 'Protocoles' },
]

export function Sidebar() {
  const { activeSection, sidebarOpen, setActiveSection, toggleSidebar, setSidebarOpen } = useNavigationStore()
  const { currentBook, setCurrentBook, setCurrentChapter } = useLibraryStore()

  const handleNavClick = (sectionId: Section) => {
    setActiveSection(sectionId)
    if (sectionId !== 'bibliotheque') {
      setCurrentBook(null)
      setCurrentChapter(null)
    }
  }

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile toggle */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-lg bg-[#0a0a14]/90 border border-[rgba(201,162,39,0.2)] text-gold hover:bg-[rgba(201,162,39,0.1)] transition-colors"
        aria-label="Menu"
      >
        {sidebarOpen ? <X className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
      </button>

      {/* Sidebar */}
      <motion.aside
        className={`fixed top-0 left-0 h-full z-40 w-72 sidebar-mystical flex flex-col transition-transform lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo area */}
        <div className="p-6 border-b border-[rgba(201,162,39,0.12)]">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-serif text-xl font-bold text-gold text-glow">
                L&apos;Alchimie
              </h1>
              <p className="text-sm text-muted-text font-serif italic">du Miroir</p>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1 rounded text-muted-text hover:text-gold transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="mt-3 text-xs text-muted-text/60 tracking-widest uppercase">
            Méditation Coranique
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 px-3 space-y-1" role="navigation" aria-label="Main navigation">
          {sections.map((section) => {
            const isActive = activeSection === section.id && !currentBook
            return (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 group ${
                  isActive
                    ? 'bg-[rgba(201,162,39,0.12)] text-gold border border-[rgba(201,162,39,0.25)]'
                    : 'text-muted-text hover:text-warm-white hover:bg-[rgba(201,162,39,0.05)] border border-transparent'
                }`}
              >
                <span className={isActive ? 'text-gold' : 'text-muted-text group-hover:text-gold transition-colors'}>
                  {section.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <div className={`font-serif text-sm ${isActive ? 'font-semibold' : ''}`}>
                    {section.label}
                  </div>
                  <div className="text-xs text-muted-text/60">{section.description}</div>
                </div>
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="w-1.5 h-1.5 rounded-full bg-gold"
                  />
                )}
              </button>
            )
          })}
        </nav>

        {/* Bottom quote */}
        <div className="p-4 border-t border-[rgba(201,162,39,0.12)]">
          <p className="text-xs text-muted-text/50 italic text-center font-serif leading-relaxed">
            &ldquo;Celui qui se connaît soi-même<br />connaît son Seigneur&rdquo;
          </p>
          <p className="text-xs text-gold/40 text-center mt-1">— Ibn ʿArabī</p>
        </div>
      </motion.aside>
    </>
  )
}
