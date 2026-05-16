import { create } from 'zustand';

export type Section = 'accueil' | 'bibliotheque' | 'miroir' | 'chercheur' | 'therapie';

interface NavigationState {
  activeSection: Section;
  sidebarOpen: boolean;
  setActiveSection: (section: Section) => void;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  activeSection: 'accueil',
  sidebarOpen: false,
  setActiveSection: (section) => set({ activeSection: section, sidebarOpen: false }),
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
}));

export interface BookChapter {
  id: string;
  number: number;
  title: string;
  content: string;
}

export interface Book {
  id: string;
  level: number;
  title: string;
  subtitle: string;
  description: string;
  inspiration: string;
  chapters: BookChapter[];
}

interface LibraryState {
  currentBook: string | null;
  currentChapter: string | null;
  readingProgress: Record<string, Record<string, boolean>>;
  journalEntries: Record<string, string>;
  setCurrentBook: (bookId: string | null) => void;
  setCurrentChapter: (chapterId: string | null) => void;
  toggleChapterComplete: (bookId: string, chapterId: string) => void;
  setJournalEntry: (key: string, content: string) => void;
}

export const useLibraryStore = create<LibraryState>((set) => ({
  currentBook: null,
  currentChapter: null,
  readingProgress: {},
  journalEntries: {},
  setCurrentBook: (bookId) => set({ currentBook: bookId, currentChapter: null }),
  setCurrentChapter: (chapterId) => set({ currentChapter: chapterId }),
  toggleChapterComplete: (bookId, chapterId) =>
    set((s) => {
      const bookProgress = s.readingProgress[bookId] || {};
      return {
        readingProgress: {
          ...s.readingProgress,
          [bookId]: {
            ...bookProgress,
            [chapterId]: !bookProgress[chapterId],
          },
        },
      };
    }),
  setJournalEntry: (key, content) =>
    set((s) => ({
      journalEntries: { ...s.journalEntries, [key]: content },
    })),
}));

interface MirrorState {
  currentPhase: number;
  meditationActive: boolean;
  meditationTime: number;
  breathPhase: 'in' | 'hold' | 'out';
  setCurrentPhase: (phase: number) => void;
  setMeditationActive: (active: boolean) => void;
  setMeditationTime: (time: number) => void;
  setBreathPhase: (phase: 'in' | 'hold' | 'out') => void;
}

export const useMirrorStore = create<MirrorState>((set) => ({
  currentPhase: 0,
  meditationActive: false,
  meditationTime: 0,
  breathPhase: 'in',
  setCurrentPhase: (phase) => set({ currentPhase: phase }),
  setMeditationActive: (active) => set({ meditationActive: active }),
  setMeditationTime: (time) => set({ meditationTime: time }),
  setBreathPhase: (phase) => set({ breathPhase: phase }),
}));

export interface ResearchNote {
  id: string;
  title: string;
  content: string;
  category: string;
  status: string;
  createdAt: string;
}

export interface Experiment {
  id: string;
  title: string;
  hypothesis: string;
  methodology: string;
  observations: string;
  conclusions: string;
  status: 'en_cours' | 'termine' | 'en_pause';
  createdAt: string;
}

interface ChercheurState {
  notes: ResearchNote[];
  experiments: Experiment[];
  addNote: (note: ResearchNote) => void;
  updateNote: (id: string, updates: Partial<ResearchNote>) => void;
  deleteNote: (id: string) => void;
  addExperiment: (exp: Experiment) => void;
  updateExperiment: (id: string, updates: Partial<Experiment>) => void;
  deleteExperiment: (id: string) => void;
}

export const useChercheurStore = create<ChercheurState>((set) => ({
  notes: [],
  experiments: [],
  addNote: (note) => set((s) => ({ notes: [note, ...s.notes] })),
  updateNote: (id, updates) =>
    set((s) => ({
      notes: s.notes.map((n) => (n.id === id ? { ...n, ...updates } : n)),
    })),
  deleteNote: (id) => set((s) => ({ notes: s.notes.filter((n) => n.id !== id) })),
  addExperiment: (exp) => set((s) => ({ experiments: [exp, ...s.experiments] })),
  updateExperiment: (id, updates) =>
    set((s) => ({
      experiments: s.experiments.map((e) =>
        e.id === id ? { ...e, ...updates } : e
      ),
    })),
  deleteExperiment: (id) =>
    set((s) => ({ experiments: s.experiments.filter((e) => e.id !== id) })),
}));

export interface TherapySession {
  id: string;
  protocolId: string;
  protocolTitle: string;
  patientInitials: string;
  date: string;
  preScore: number; // emotional state before session 1-10
  postScore: number; // emotional state after session 1-10
  notes: string;
  breakthroughs: string;
  followUp: string;
  completedAt: string;
}

interface TherapyState {
  sessions: TherapySession[];
  addSession: (session: TherapySession) => void;
}

export const useTherapyStore = create<TherapyState>((set) => ({
  sessions: [],
  addSession: (session) =>
    set((s) => ({ sessions: [session, ...s.sessions] })),
}));

export interface MirrorJournalEntry {
  id: string;
  date: string;
  verseId: string;
  phase: string; // 'fana' | 'tajalli' | 'munajat' | 'beance'
  emotionalState: number; // 1-10
  content: string;
  gratitude: string;
}

interface MirrorJournalState {
  entries: MirrorJournalEntry[];
  addEntry: (entry: MirrorJournalEntry) => void;
  deleteEntry: (id: string) => void;
}

export const useMirrorJournalStore = create<MirrorJournalState>((set) => ({
  entries: [],
  addEntry: (entry) => set((s) => ({ entries: [entry, ...s.entries] })),
  deleteEntry: (id) => set((s) => ({ entries: s.entries.filter((e) => e.id !== id) })),
}));

export interface TechniqueSuggestion {
  id: string;
  title: string;
  description: string;
  category: 'amelioration' | 'nouveau_protocole' | 'recherche' | 'experimentation';
  priority: 'haute' | 'moyenne' | 'basse';
  status: 'idee' | 'en_developpement' | 'testee' | 'integree' | 'archivee';
  createdAt: string;
  notes: string;
}

interface TechniqueLabState {
  suggestions: TechniqueSuggestion[];
  addSuggestion: (s: TechniqueSuggestion) => void;
  updateSuggestion: (id: string, updates: Partial<TechniqueSuggestion>) => void;
  deleteSuggestion: (id: string) => void;
}

export const useTechniqueLabStore = create<TechniqueLabState>((set) => ({
  suggestions: [],
  addSuggestion: (s) => set((state) => ({ suggestions: [s, ...state.suggestions] })),
  updateSuggestion: (id, updates) =>
    set((state) => ({
      suggestions: state.suggestions.map((s) => (s.id === id ? { ...s, ...updates } : s)),
    })),
  deleteSuggestion: (id) =>
    set((state) => ({ suggestions: state.suggestions.filter((s) => s.id !== id) })),
}));

// ==================== SKILL STORE ====================

export interface SkillLevel {
  fana: number;
  tajalli: number;
  munajat: number;
  beance: number;
  integration: number;
  enseignement: number;
  lastEvaluated: string;
}

interface SkillState {
  skills: SkillLevel;
  updateSkill: (skill: keyof Omit<SkillLevel, 'lastEvaluated'>, level: number) => void;
  setSkills: (skills: SkillLevel) => void;
}

export const useSkillStore = create<SkillState>((set) => ({
  skills: {
    fana: 5,
    tajalli: 4,
    munajat: 4,
    beance: 3,
    integration: 3,
    enseignement: 2,
    lastEvaluated: new Date().toISOString(),
  },
  updateSkill: (skill, level) =>
    set((s) => ({
      skills: { ...s.skills, [skill]: level, lastEvaluated: new Date().toISOString() },
    })),
  setSkills: (skills) => set({ skills }),
}));

// ==================== INTENTION STORE ====================

interface IntentionState {
  intentions: Record<string, string>; // date -> text
  setIntention: (date: string, text: string) => void;
}

export const useIntentionStore = create<IntentionState>((set) => ({
  intentions: {},
  setIntention: (date, text) =>
    set((s) => ({ intentions: { ...s.intentions, [date]: text } })),
}));
