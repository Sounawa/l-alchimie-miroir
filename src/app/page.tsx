'use client';

import { useNavigationStore } from '@/store';
import { books } from '@/data/books';
import { therapyProtocols } from '@/data/protocols';
import { citationsDesMaitres, nomsDivins, questionsRecherche, bibliographieScientifique, versetsQuotidiens, exercicesPratiques, autoEvaluationQuestions, pistesAmelioration, istikharaCompleteDuas, verseThemes } from '@/data/miroir';
import { generatePdfHtml } from '@/lib/pdfTemplate';
import { clientBooks as baseClientBooks } from '@/data/clientBooks';
import { enrichedBooks1 } from '@/data/enriched-1';
import { enrichedBooks2 } from '@/data/enriched-2';
import { enrichedBooks3 } from '@/data/enriched-3';
import { enrichedConfGrat } from '@/data/enriched-conf-grat';
import { enrichedCouples } from '@/data/enriched-couples';
import { enrichedResilience } from '@/data/enriched-resilience';
import { enrichedPardonTdah } from '@/data/enriched-pardon-tdah';
import { enrichedObsessionsAdos } from '@/data/enriched-obsessions-ados';
import { enrichedWaswasColere } from '@/data/enriched-waswas-colere';
import { enrichedSommeilTrauma } from '@/data/enriched-sommeil-trauma';
import { enrichedSolitudeAttach } from '@/data/enriched-solitude-attach';
import { enrichedIdentiteBurnout } from '@/data/enriched-identite-burnout';
import { parcoursTherapeutiques } from '@/data/parcours';
import { fichesVersets } from '@/data/fiches-versets';
import { audioScripts } from '@/data/audio-scripts';
import { BookReader } from '@/components/book-reader';
import { createSelfAssessmentChapter, createBeyondBookChapter, createHealingSignsChapter, createHiddenRootsChapter } from '@/data/universal-chapters';
import { strategiesThematiques, conseilsPratiques } from '@/data/strategie';
import { enrichedCourses } from '@/data/enriched-courses';
import { parcoursGuides } from '@/data/parcours-guides';
import { versetsParCategorie, verseCategories } from '@/data/versets-etendus';

const rawEnrichedBooks = [
  ...enrichedBooks1,
  ...enrichedBooks2,
  ...enrichedBooks3,
  ...enrichedConfGrat,
  ...enrichedCouples,
  ...enrichedResilience,
  ...enrichedPardonTdah,
  ...enrichedObsessionsAdos,
  ...enrichedWaswasColere,
  ...enrichedSommeilTrauma,
  ...enrichedSolitudeAttach,
  ...enrichedIdentiteBurnout,
];
const seenEnrichedIds = new Set<string>();
const allEnrichedBooks = rawEnrichedBooks.filter(b => {
  if (seenEnrichedIds.has(b.id)) return false;
  seenEnrichedIds.add(b.id);
  return true;
});
const enrichedIds = new Set(allEnrichedBooks.map(b => b.id));
const rawClientBooks = [
  ...allEnrichedBooks,
  ...baseClientBooks.filter(b => !enrichedIds.has(b.id)),
];
// Enrich client books: thin books (4 chapters) get 4 universal chapters,
// already-enriched books (5+ chapters) only get "Au-delà du livre"
const clientBooks = rawClientBooks.map(book => {
  if (book.level !== 0) return book;
  const chapters = book.chapters;

  if (chapters.length <= 4) {
    // Thin book: insert 3 universal chapters + append 1 at the end = 8 total
    const insertAfterFirst = [
      createSelfAssessmentChapter(book.id, 2),
      createHiddenRootsChapter(book.id, 3),
    ];
    const renumberedExisting = chapters.map((ch, i) => ({
      ...ch,
      number: i < 1 ? i + 1 : i + 3,
    }));
    const total = renumberedExisting.length + insertAfterFirst.length;
    const appendChapters = [
      createHealingSignsChapter(book.id, total + 1),
      createBeyondBookChapter(book.id, total + 2),
    ];
    return {
      ...book,
      chapters: [
        ...renumberedExisting.slice(0, 1),
        ...insertAfterFirst,
        ...renumberedExisting.slice(1),
        ...appendChapters,
      ],
    };
  } else {
    // Already enriched book: only append "Au-delà du livre"
    const nextNum = chapters.length + 1;
    return {
      ...book,
      chapters: [
        ...chapters,
        createBeyondBookChapter(book.id, nextNum),
      ],
    };
  }
});
import { useLibraryStore, useChercheurStore, useMirrorJournalStore, useTechniqueLabStore, useTherapyStore } from '@/store';
import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen, Compass, FlaskConical, Heart,
  Menu, X, ChevronRight, ChevronLeft, Clock,
  CheckCircle2, Circle, Play, Pause, RotateCcw,
  Search, Plus, Trash2, Edit3, Save, Calendar,
  Timer, Star, Moon, Sun, Eye, PenLine, Sparkles,
  Beaker, Brain, Lightbulb, AlertTriangle, FileText,
  ArrowLeft, ArrowRight, Bookmark, BookMarked, Library,
  GraduationCap, Activity, Shield, Users, Stethoscope,
  ChevronDown, ChevronUp, Copy, Dices, History, Target, ClipboardCheck, Zap,
  Flame, TrendingUp, Award, BarChart3, LayoutDashboard,
  Map, Headphones, ScrollText, Download, Loader2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Slider } from '@/components/ui/slider';

// ==================== HOOKS ====================

function useAnimatedCounter(target: number, duration: number = 1500): number {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    countRef.current = 0;
    startTimeRef.current = null;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      countRef.current = Math.round(eased * target);
      setCount(countRef.current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [target, duration]);

  return count;
}

// ==================== SHARED COMPONENTS ====================

function SectionHeader({ icon, title, subtitle, children }: { icon: React.ReactNode; title: string; subtitle?: string; children?: React.ReactNode }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gold-gradient">{title}</h1>
      </div>
      {subtitle && <p className="text-muted-foreground text-lg ml-12">{subtitle}</p>}
      {children}
      <div className="gold-divider mt-6" />
    </div>
  );
}

function MeditationTimer({ onComplete }: { onComplete?: () => void }) {
  const [time, setTime] = useState(300);
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'work' | 'rest'>('work');
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isActive && time > 0) {
      intervalRef.current = setInterval(() => setTime(t => t - 1), 1000);
    } else if (time === 0) {
      const timer = intervalRef.current;
      if (timer) clearInterval(timer);
      intervalRef.current = null;
      if (onComplete) onComplete();
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isActive, time, onComplete]);

  const reset = () => { setIsActive(false); setTime(300); setPhase('work'); };
  const presets = [60, 180, 300, 600, 900];

  return (
    <div className="glass-card rounded-xl p-6 text-center">
      <div className="relative w-40 h-40 mx-auto mb-4">
        <div className={`w-full h-full rounded-full border-2 border-gold/30 flex items-center justify-center ${isActive ? 'breathe' : ''}`}>
          <div className="w-32 h-32 rounded-full border border-mirror/20 flex items-center justify-center bg-deep/50">
            <span className="text-4xl font-mono text-gold">{Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}</span>
          </div>
        </div>
        {isActive && <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-mirror animate-ping" />}
      </div>
      <div className="flex justify-center gap-2 mb-4">
        {presets.map(p => (
          <button key={p} onClick={() => { setTime(p); setIsActive(false); }}
            className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${time === p ? 'bg-gold/20 text-gold border border-gold/40' : 'text-muted-foreground hover:text-foreground border border-border'}`}>
            {Math.floor(p / 60)}:{(p % 60).toString().padStart(2, '0')}
          </button>
        ))}
      </div>
      <div className="flex justify-center gap-3">
        <Button onClick={() => setIsActive(!isActive)} variant="outline" size="sm"
          className="border-gold/30 hover:bg-gold/10 text-gold">
          {isActive ? <Pause className="w-4 h-4 mr-1" /> : <Play className="w-4 h-4 mr-1" />}
          {isActive ? 'Pause' : 'Commencer'}
        </Button>
        <Button onClick={reset} variant="ghost" size="sm" className="text-muted-foreground">
          <RotateCcw className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

// ==================== SIDEBAR ====================

function Sidebar() {
  const { activeSection, sidebarOpen, setActiveSection, setSidebarOpen, toggleSidebar } = useNavigationStore();
  const [sidebarQuote, setSidebarQuote] = useState(0);
  const navItems = [
    { id: 'accueil' as const, icon: <Compass className="w-5 h-5" />, label: 'Accueil' },
    { id: 'bibliotheque' as const, icon: <Library className="w-5 h-5" />, label: 'Bibliothèque' },
    { id: 'miroir' as const, icon: <Eye className="w-5 h-5" />, label: 'Miroir' },
    { id: 'chercheur' as const, icon: <FlaskConical className="w-5 h-5" />, label: 'Chercheur' },
    { id: 'therapie' as const, icon: <Heart className="w-5 h-5" />, label: 'Thérapie' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSidebarQuote(q => (q + 1) % citationsDesMaitres.length);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const currentSidebarQuote = citationsDesMaitres[sidebarQuote];

  return (
    <>
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

      <button onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg glass-card lg:hidden">
        {sidebarOpen ? <X className="w-6 h-6 text-gold" /> : <Menu className="w-6 h-6 text-gold" />}
      </button>

      <aside className={`fixed left-0 top-0 h-full z-40 w-64 glass-card border-r border-gold/10 transition-transform duration-300 flex flex-col
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="p-6 border-b border-gold/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
              <span className="text-lg">🪞</span>
            </div>
            <div>
              <h2 className="font-serif font-bold text-gold-gradient text-lg leading-tight">L&apos;Alchimie</h2>
              <p className="text-xs text-muted-foreground">du Miroir</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 py-4">
          {navItems.map((item) => (
            <button key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-6 py-3 text-left transition-all duration-200
                ${activeSection === item.id
                  ? 'bg-gold/10 border-r-2 border-gold text-gold'
                  : 'text-muted-foreground hover:text-foreground hover:bg-gold/5'}`}>
              {item.icon}
              <span className="font-medium">{item.label}</span>
              {activeSection === item.id && <ChevronRight className="w-4 h-4 ml-auto" />}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gold/10">
          <div className="glass-card rounded-lg p-3 text-center">
            <p className="text-xs text-muted-foreground mb-1">Sagesse du jour</p>
            <AnimatePresence mode="wait">
              <motion.div
                key={sidebarQuote}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-xs text-gold/80 italic font-serif leading-relaxed">
                  &ldquo;{currentSidebarQuote.text}&rdquo;
                </p>
                <p className="text-xs text-muted-foreground mt-1">— {currentSidebarQuote.author}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </aside>
    </>
  );
}

// ==================== ACCUEIL ====================

function AccueilSection() {
  const { setActiveSection } = useNavigationStore();
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote(q => (q + 1) % citationsDesMaitres.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const sections = [
    { id: 'bibliotheque' as const, icon: <BookOpen className="w-8 h-8" />, title: 'Bibliothèque', desc: `Cours + ${clientBooks.length} livres thérapeutiques Tadabur & Thérapie`, color: 'text-gold', border: 'border-gold/20 hover:border-gold/40' },
    { id: 'miroir' as const, icon: <Eye className="w-8 h-8" />, title: 'Miroir', desc: `Version Miroir de ${versetsQuotidiens.length} versets, méditation guidée et journal intime`, color: 'text-mirror', border: 'border-mirror/20 hover:border-mirror/40' },
    { id: 'chercheur' as const, icon: <FlaskConical className="w-8 h-8" />, title: 'Chercheur', desc: 'Protocoles, exercices, auto-évaluation et laboratoire de la technique', color: 'text-green-400', border: 'border-green-400/20 hover:border-green-400/40' },
    { id: 'therapie' as const, icon: <Heart className="w-8 h-8" />, title: 'Thérapie', desc: `${therapyProtocols.length} protocoles thérapeutiques avec suivi et analyse de séance`, color: 'text-rose-400', border: 'border-rose-400/20 hover:border-rose-400/40' },
  ];

  return (
    <div className="section-enter">
      <div className="text-center mb-12 pt-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6">
          <div className="w-24 h-24 mx-auto rounded-full bg-gold/5 border-2 border-gold/30 flex items-center justify-center moon-glow">
            <span className="text-5xl">🪞</span>
          </div>
        </motion.div>
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-gold-gradient mb-4">
          L&apos;Alchimie du Miroir
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 font-serif mb-2">
          Méditer le Coran avec l&apos;Âme
        </p>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Une plateforme complète pour la maîtrise de la méditation coranique :
          bibliothèque, pratique du miroir, recherche et protocoles thérapeutiques.
        </p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuote}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="glass-card rounded-xl p-6 mb-12 max-w-2xl mx-auto text-center">
          <p className="font-serif text-lg text-foreground/90 italic leading-relaxed mb-2">
            &ldquo;{citationsDesMaitres[currentQuote].text}&rdquo;
          </p>
          <p className="text-gold text-sm">— {citationsDesMaitres[currentQuote].author}</p>
          <p className="text-xs text-muted-foreground">{citationsDesMaitres[currentQuote].source}</p>
        </motion.div>
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {sections.map((section, i) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i + 0.3 }}
            onClick={() => setActiveSection(section.id)}
            className={`glass-card rounded-xl p-6 cursor-pointer card-hover border ${section.border} group`}>
            <div className={`mb-3 ${section.color} transition-transform group-hover:scale-110`}>
              {section.icon}
            </div>
            <h3 className="text-xl font-serif font-bold text-foreground mb-2">{section.title}</h3>
            <p className="text-muted-foreground text-sm">{section.desc}</p>
            <div className="flex items-center gap-1 mt-4 text-sm text-gold/60 group-hover:text-gold transition-colors">
              <span>Explorer</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
        {[
          { value: String(books.length + clientBooks.length), label: 'Livres', icon: <GraduationCap className="w-5 h-5" /> },
          { value: String(therapyProtocols.length), label: 'Protocoles', icon: <Stethoscope className="w-5 h-5" /> },
          { value: String(versetsQuotidiens.length), label: 'Versets Miroir', icon: <Sparkles className="w-5 h-5" /> },
          { value: String(fichesVersets.length), label: 'Fiches Versets', icon: <ScrollText className="w-5 h-5" /> },
        ].map((stat) => (
          <div key={stat.label} className="glass-card rounded-xl p-4 text-center">
            <div className="text-gold/60 mb-2 flex justify-center">{stat.icon}</div>
            <div className="text-2xl font-bold text-gold-gradient">{stat.value}</div>
            <div className="text-xs text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>

      <StrategieTherapeutiqueSection />
    </div>
  );
}

// ==================== STRATEGIE THERAPEUTIQUE ====================

function StrategieTherapeutiqueSection() {
  const [expandedTheme, setExpandedTheme] = useState<string | null>(null);
  const [conseilStartIndex, setConseilStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setConseilStartIndex(prev => (prev + 1) % conseilsPratiques.length);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  const visibleConseils = [
    conseilsPratiques[conseilStartIndex % conseilsPratiques.length],
    conseilsPratiques[(conseilStartIndex + 1) % conseilsPratiques.length],
    conseilsPratiques[(conseilStartIndex + 2) % conseilsPratiques.length],
  ];

  return (
    <div className="mt-16 max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Target className="w-7 h-7 text-gold" />
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gold-gradient">Strategie Therapeutique</h2>
        </div>
        <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
          8 themes therapeutiques pour guider votre pratique du Tadabur selon vos besoins
        </p>
        <div className="gold-divider mt-4 max-w-xs mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {strategiesThematiques.map((strategie) => (
          <motion.div
            key={strategie.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card rounded-xl overflow-hidden card-hover cursor-pointer group"
            onClick={() => setExpandedTheme(expandedTheme === strategie.id ? null : strategie.id)}
          >
            <div
              className="h-1.5 w-full"
              style={{ backgroundColor: strategie.color }}
            />
            <div className="p-5">
              <div className="flex items-start gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-lg shrink-0"
                  style={{ backgroundColor: strategie.color + '20' }}
                >
                  {strategie.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif font-bold text-sm text-foreground group-hover:text-gold transition-colors leading-tight">
                    {strategie.theme}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="outline" className="text-[10px] border-border text-muted-foreground">
                      {strategie.livresRecommandes.length} livre{strategie.livresRecommandes.length > 1 ? 's' : ''}
                    </Badge>
                    {strategie.protocolesAssocies.length > 0 && (
                      <Badge variant="outline" className="text-[10px] border-border text-muted-foreground">
                        {strategie.protocolesAssocies.length} protocole{strategie.protocolesAssocies.length > 1 ? 's' : ''}
                      </Badge>
                    )}
                  </div>
                </div>
                <ChevronDown className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform ${expandedTheme === strategie.id ? 'rotate-180' : ''}`} />
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                {strategie.description}
              </p>
            </div>

            <AnimatePresence>
              {expandedTheme === strategie.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-gold/10 p-4 space-y-4 bg-deep/30">
                    <div className="ornate-card rounded-lg p-4">
                      <p className="arabic text-lg text-center text-gold/90 leading-[2] mb-2">
                        {strategie.versetClef.arabe}
                      </p>
                      <p className="text-xs font-serif text-foreground/80 italic text-center mb-1">
                        {strategie.versetClef.french}
                      </p>
                      <p className="text-[10px] text-gold/60 text-center">
                        Coran {strategie.versetClef.reference}
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2 font-medium">
                        Conseil pratique
                      </p>
                      <p className="text-xs text-foreground/70 leading-relaxed">
                        {strategie.conseilPratique}
                      </p>
                    </div>

                    {strategie.protocolesAssocies.length > 0 && (
                      <div>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2 font-medium">
                          Protocoles associes
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {strategie.protocolesAssocies.map(pid => {
                            const proto = therapyProtocols.find(p => p.id === pid);
                            return proto ? (
                              <Badge key={pid} variant="outline" className="text-[10px]" style={{ borderColor: proto.color + '40', color: proto.color }}>
                                {proto.letter} : {proto.title}
                              </Badge>
                            ) : null;
                          })}
                        </div>
                      </div>
                    )}

                    {strategie.parcoursSuggere && (
                      <div>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-2 font-medium">
                          Parcours suggere
                        </p>
                        {(() => {
                          const parc = parcoursTherapeutiques.find(p => p.id === strategie.parcoursSuggere);
                          return parc ? (
                            <Badge variant="outline" className="text-[10px] border-mirror/30 text-mirror">
                              {parc.icon} {parc.title}
                            </Badge>
                          ) : null;
                        })()}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <div className="mt-12">
        <div className="flex items-center gap-2 mb-6 justify-center">
          <Lightbulb className="w-5 h-5 text-gold" />
          <h3 className="text-lg font-serif font-bold text-gold">Conseils Pratiques</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {visibleConseils.map((conseil, i) => (
            <motion.div
              key={conseil.id + '-' + i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-5 border border-gold/10 hover:border-gold/30 transition-all"
            >
              <h4 className="font-serif font-bold text-sm text-foreground mb-2 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-[10px] text-gold font-mono">
                  {i + 1}
                </span>
                {conseil.titre}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-3">
                {conseil.description}
              </p>
              <div className="space-y-1.5">
                {conseil.etapes.slice(0, 3).map((etape, ei) => (
                  <div key={ei} className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-gold/40 mt-1.5 shrink-0" />
                    <p className="text-[10px] text-muted-foreground leading-relaxed line-clamp-2">{etape}</p>
                  </div>
                ))}
                {conseil.etapes.length > 3 && (
                  <p className="text-[10px] text-gold/50 italic">+{conseil.etapes.length - 3} etape{conseil.etapes.length - 3 > 1 ? 's' : ''} supplementaire{conseil.etapes.length - 3 > 1 ? 's' : ''}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==================== BIBLIOTHEQUE ====================

const clientBookEmojis: Record<string, string> = {
  'tadabur-douleur': '💫',
  'tadabur-emotion': '💝',
  'tadabur-relations': '🤝',
  'tadabur-anxiete': '🌊',
  'tadabur-estime': '🪞',
  'tadabur-deuil': '🕊️',
  'tadabur-pardon': '🔓',
  'tadabur-confiance': '🌱',
  'tadabur-gratitude': '☀️',
  'tadabur-resilience': '💎',
  'tadabur-couples': '💑',
  'tadabur-tdah': '🧠',
  'tadabur-obsessions': '🔗',
  'tadabur-ados': '🌱',
  'tadabur-waswas': '🔮',
  'tadabur-colere': '🔥',
  'tadabur-sommeil': '🌙',
  'tadabur-traumatismes': '🩹',
  'tadabur-solitude': '🌅',
  'tadabur-attachement': '🤗',
  'tadabur-identite': '🌈',
  'tadabur-burnout': '🔋',
  'cahier-tadabur': '📓',
};

const coursLevelEmojis: Record<number, string> = {
  1: '📖',
  2: '✨',
  3: '🌙',
  4: '🎓',
};

function BibliothequeSection() {
  const { currentBook, currentChapter, setCurrentBook, setCurrentChapter, readingProgress, toggleChapterComplete, journalEntries, setJournalEntry } = useLibraryStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeBibTab, setActiveBibTab] = useState('cours');
  const [pdfLoading, setPdfLoading] = useState(false);

  const booksWithExtras = books.map(b => {
  if (b.id === 'niveau2') return { ...b, chapters: [...b.chapters, ...enrichedCourses.niveau2] };
  if (b.id === 'niveau3') return { ...b, chapters: [...b.chapters, ...enrichedCourses.niveau3] };
  return b;
});
const allBooks = [...booksWithExtras, ...clientBooks];

  const filteredCourseBooks = books.filter(b =>
    b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredClientBooks = clientBooks.filter(b =>
    b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getBookProgress = (bookId: string) => {
    const book = allBooks.find(b => b.id === bookId);
    if (!book) return 0;
    const progress = readingProgress[bookId] || {};
    const completed = Object.values(progress).filter(Boolean).length;
    return Math.round((completed / book.chapters.length) * 100);
  };

  // Book detail view
  if (currentBook) {
    const book = allBooks.find(b => b.id === currentBook);
    if (!book) return null;

    if (currentChapter) {
      return (
        <BookReader
          book={book}
          chapterId={currentChapter}
          readingProgress={readingProgress}
          journalEntries={journalEntries}
          onBack={() => setCurrentChapter(null)}
          onChapterChange={(id) => setCurrentChapter(id)}
          onToggleComplete={toggleChapterComplete}
          onJournalEntry={setJournalEntry}
        />
      );
    }

    // Book chapters list
    const isClientBook = book.level === 0;

    return (
      <div className="section-enter">
        <button onClick={() => setCurrentBook(null)}
          className="flex items-center gap-2 text-muted-foreground hover:text-gold mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Retour à la bibliothèque</span>
        </button>

        <div className="max-w-3xl mx-auto">
          <div className="book-detail-banner mb-8 islamic-pattern-bg">
            <div className="relative z-10 flex items-start gap-5">
              <div className="w-16 h-20 rounded-lg bg-gradient-to-br from-gold/20 via-deep to-mirror/10 border border-gold/30 flex items-center justify-center shrink-0 book-cover-frame">
                <span className="text-3xl relative z-10">{isClientBook ? (clientBookEmojis[book.id] || '📖') : (coursLevelEmojis[book.level] || '📖')}</span>
              </div>
              <div className="flex-1 min-w-0">
                <Badge variant="outline" className={isClientBook ? 'border-purple-400/30 text-purple-400 mb-2' : 'border-gold/30 text-gold mb-2'}>
                  {isClientBook ? 'Livre Client' : `Niveau ${book.level}`}
                </Badge>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gold-gradient mb-1 leading-tight">{book.title}</h2>
                <p className="text-muted-foreground text-sm">{book.subtitle}</p>
                <p className="text-xs text-gold/50 mt-1.5 font-serif italic">Inspiré de : {book.inspiration}</p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-xl p-5 mb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <BookMarked className="w-3.5 h-3.5" />
                  <span>{book.chapters.length} chapitres</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" />
                  <span>~{Math.round(book.chapters.length * 2.5)} min de lecture</span>
                </div>
              </div>
              <span className="text-gold font-semibold text-sm">{getBookProgress(book.id)}%</span>
            </div>
            <div className="relative">
              <Progress value={getBookProgress(book.id)} className="h-2.5 bg-deep" />
              <div className="absolute inset-0 rounded-full pointer-events-none session-progress-glow" />
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-muted-foreground">
              <span>{Object.values(readingProgress[book.id] || {}).filter(Boolean).length} terminé{Object.values(readingProgress[book.id] || {}).filter(Boolean).length !== 1 ? 's' : ''}</span>
              <span>{book.chapters.length - Object.values(readingProgress[book.id] || {}).filter(Boolean).length} restant{book.chapters.length - Object.values(readingProgress[book.id] || {}).filter(Boolean).length !== 1 ? 's' : ''}</span>
            </div>
          </div>

          <Button
            onClick={async () => {
              setPdfLoading(true);
              try {
                const html = generatePdfHtml({
                  title: book.title,
                  subtitle: book.subtitle,
                  inspiration: book.inspiration,
                  chapters: book.chapters.map(c => ({ title: c.title, content: c.content })),
                });
                const printWindow = window.open('', '_blank');
                if (printWindow) {
                  printWindow.document.write(html);
                  printWindow.document.close();
                  printWindow.onload = () => {
                    printWindow.print();
                  };
                }
              } catch (e) {
                console.error(e);
              } finally {
                setPdfLoading(false);
              }
            }}
            disabled={pdfLoading}
            className="w-full mb-6 bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/25 text-gold hover:from-gold/20 hover:to-gold/10 hover:text-gold transition-all group"
          >
            <span className="flex items-center justify-center gap-2">
              {pdfLoading
                ? <Loader2 className="w-4 h-4 animate-spin" />
                : <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
              }
              <span>{pdfLoading ? 'Génération du PDF en cours...' : 'Télécharger le PDF complet'}</span>
            </span>
          </Button>

          <div className="chapter-toc space-y-1 pl-2">
            {book.chapters.map((chapter) => {
              const isComplete = readingProgress[book.id]?.[chapter.id] || false;
              return (
                <button key={chapter.id}
                  onClick={() => setCurrentChapter(chapter.id)}
                  className={`chapter-toc-item w-full py-3.5 pr-4 text-left group flex items-center gap-3 rounded-r-lg transition-all hover:bg-gold/5 ${isComplete ? 'completed' : ''}`}>
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center border shrink-0 transition-all
                    ${isComplete ? 'border-green-400/40 bg-green-400/10 text-green-400' : 'border-gold/25 bg-gold/5 text-gold/50 group-hover:border-gold/50 group-hover:text-gold'}`}>
                    {isComplete
                      ? <CheckCircle2 className="w-4 h-4" />
                      : <span className="font-mono text-xs font-bold">{chapter.number.toString().padStart(2, '0')}</span>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-serif text-sm font-medium transition-colors truncate ${isComplete ? 'text-foreground/60' : 'text-foreground group-hover:text-gold'}`}>
                      {chapter.title}
                    </h3>
                  </div>
                  <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-all ${isComplete ? 'text-muted-foreground/40' : 'text-muted-foreground/50 group-hover:text-gold group-hover:translate-x-0.5'}`} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Book list with tabs
  return (
    <div className="section-enter">
      <SectionHeader
        icon={<BookOpen className="w-8 h-8 text-gold" />}
        title="Bibliothèque"
        subtitle="Cours de méditation coranique et livres thérapeutiques Tadabur"
      >
        <div className="relative max-w-sm mt-4 ml-12">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher un livre..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-deep/50 border-gold/10 focus:border-gold/30"
          />
        </div>
      </SectionHeader>

      <Tabs value={activeBibTab} onValueChange={setActiveBibTab} className="space-y-6">
        <TabsList className="bg-deep/50 border border-gold/10">
          <TabsTrigger value="cours" className="data-[state=active]:bg-gold/10 data-[state=active]:text-gold">
            <GraduationCap className="w-4 h-4 mr-1" /> Cours
          </TabsTrigger>
          <TabsTrigger value="tadabur" className="data-[state=active]:bg-gold/10 data-[state=active]:text-gold">
            <Heart className="w-4 h-4 mr-1" /> Tadabur & Thérapie
          </TabsTrigger>
          <TabsTrigger value="parcours" className="data-[state=active]:bg-gold/10 data-[state=active]:text-gold">
            <Map className="w-4 h-4 mr-1" /> Parcours
          </TabsTrigger>
          <TabsTrigger value="fiches" className="data-[state=active]:bg-gold/10 data-[state=active]:text-gold">
            <ScrollText className="w-4 h-4 mr-1" /> Fiches Versets
          </TabsTrigger>
          <TabsTrigger value="scripts" className="data-[state=active]:bg-gold/10 data-[state=active]:text-gold">
            <Headphones className="w-4 h-4 mr-1" /> Scripts Audio
          </TabsTrigger>
        </TabsList>

        <TabsContent value="cours">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourseBooks.map((book) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => setCurrentBook(book.id)}
                className="glass-card rounded-xl overflow-hidden cursor-pointer book-card-hover book-shimmer group">
                <div className="relative h-52 bg-gradient-to-br from-gold/5 via-deep to-mirror/5 islamic-pattern-bg flex items-center justify-center border-b border-gold/10">
                  <div className="book-cover-frame w-32 h-40 flex flex-col items-center justify-center bg-gradient-to-br from-gold/8 via-deep/80 to-mirror/5">
                    <span className="text-4xl mb-1 relative z-10">{coursLevelEmojis[book.level] || '📖'}</span>
                    <span className="text-3xl font-serif font-bold text-gold/15 relative z-10">{book.level}</span>
                  </div>
                  <div className="absolute top-0 right-4">
                    <span className="book-ribbon book-ribbon-gold">Niveau {book.level}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif font-bold text-lg text-foreground group-hover:text-gold transition-colors mb-1 leading-snug">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gold/70 mb-3 line-clamp-1">{book.subtitle}</p>
                  <p className="text-xs text-muted-foreground mb-4 line-clamp-2 leading-relaxed">{book.description}</p>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <BookMarked className="w-3 h-3" />
                        {book.chapters.length} chap.
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        ~{Math.round(book.chapters.length * 2.5)} min
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-gold/80">{getBookProgress(book.id)}%</span>
                  </div>
                  <Progress value={getBookProgress(book.id)} className="h-1.5 bg-deep" />
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tadabur">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClientBooks.map((book) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => setCurrentBook(book.id)}
                className="rounded-xl overflow-hidden cursor-pointer book-card-hover book-shimmer group bg-gradient-to-br from-mirror/10 to-purple-500/5 border border-mirror/10 hover:border-mirror/30">
                <div className="relative h-52 bg-gradient-to-br from-mirror/5 via-deep to-purple-500/5 islamic-pattern-bg flex items-center justify-center border-b border-mirror/10">
                  <div className="book-cover-frame w-32 h-40 flex flex-col items-center justify-center bg-gradient-to-br from-mirror/8 via-deep/80 to-purple-500/5">
                    <span className="text-3xl mb-1.5 relative z-10">{clientBookEmojis[book.id] || '📖'}</span>
                    <span className="text-[10px] font-serif font-bold text-mirror/30 relative z-10 text-center leading-tight px-2 line-clamp-2">{book.title.split(' ').slice(-1).join(' ')}</span>
                  </div>
                  <div className="absolute top-0 right-4">
                    <span className="book-ribbon book-ribbon-purple">Thérapie</span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-purple-400/60 mb-1.5">{book.subtitle.split(' ').slice(0, 3).join(' ')}</p>
                  <h3 className="font-serif font-bold text-lg text-foreground group-hover:text-mirror transition-colors mb-1 leading-snug">
                    {book.title}
                  </h3>
                  <p className="text-sm text-purple-400/60 mb-3 line-clamp-1">{book.subtitle}</p>
                  <p className="text-xs text-muted-foreground mb-4 line-clamp-2 leading-relaxed">{book.description}</p>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <BookMarked className="w-3 h-3" />
                        {book.chapters.length} chap.
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        ~{Math.round(book.chapters.length * 2.5)} min
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-mirror/80">{getBookProgress(book.id)}%</span>
                  </div>
                  <Progress value={getBookProgress(book.id)} className="h-1.5 bg-deep" />
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="parcours">
          <ParcoursTab />
        </TabsContent>

        <TabsContent value="fiches">
          <FichesVersetsTab />
        </TabsContent>

        <TabsContent value="scripts">
          <ScriptsAudioTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}

// ==================== PARCOURS TAB ====================

const ficheThemeLabels: Record<string, string> = {
  confiance: 'Confiance', patience: 'Patience', guerison: 'Guérison', presence: 'Présence',
  pardon: 'Pardon', gratitude: 'Gratitude', sagesse: 'Sagesse', amour: 'Amour',
  espoir: 'Espoir', detachment: 'Détachement', force: 'Force', guidance: 'Guidance',
  transformation: 'Transformation', paix: 'Paix', courage: 'Courage',
};

function ParcoursTab() {
  const [expandedParcours, setExpandedParcours] = useState<string | null>(null);
  const [activeParcoursSubTab, setActiveParcoursSubTab] = useState<'guides' | 'protocoles'>('guides');
  const { setCurrentBook } = useLibraryStore();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <button
          onClick={() => setActiveParcoursSubTab('guides')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeParcoursSubTab === 'guides' ? 'bg-gold/15 text-gold border border-gold/30' : 'text-muted-foreground hover:text-foreground border border-transparent'}`}
        >
          <Map className="w-4 h-4 inline mr-1" /> Parcours Guides ({parcoursGuides.length})
        </button>
        <button
          onClick={() => setActiveParcoursSubTab('protocoles')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeParcoursSubTab === 'protocoles' ? 'bg-gold/15 text-gold border border-gold/30' : 'text-muted-foreground hover:text-foreground border border-transparent'}`}
        >
          <Target className="w-4 h-4 inline mr-1" /> Parcours Protocoles ({parcoursTherapeutiques.length})
        </button>
      </div>

      {activeParcoursSubTab === 'guides' && (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">{parcoursGuides.length} parcours guides journaliers avec exercices et versets coraniques pour accompagner votre pratique pas a pas</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {parcoursGuides.map((parcours) => (
              <Card key={parcours.id} className="glass-card border border-gold/10 hover:border-gold/30 transition-all overflow-hidden">
                <CardHeader className="pb-3 cursor-pointer" onClick={() => setExpandedParcours(expandedParcours === parcours.id ? null : parcours.id)}>
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0" style={{ backgroundColor: parcours.color + '15', border: '1px solid ' + parcours.color + '30' }}>
                      {parcours.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-base font-serif text-gold leading-tight">{parcours.title}</CardTitle>
                      <CardDescription className="text-xs text-muted-foreground mt-1">{parcours.subtitle}</CardDescription>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        <Badge variant="outline" className="text-[10px] border-gold/20 text-gold/70">{parcours.totalDays} jours</Badge>
                        <Badge variant="outline" className="text-[10px] border-mirror/20 text-mirror/70">{parcours.difficulty === 'debutant' ? 'Debutant' : parcours.difficulty === 'intermediaire' ? 'Intermediaire' : 'Avance'}</Badge>
                      </div>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform ${expandedParcours === parcours.id ? 'rotate-180' : ''}`} />
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  {expandedParcours === parcours.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="border-t border-gold/10 pt-3 mt-3 space-y-3"
                    >
                      <p className="text-xs text-foreground/70 leading-relaxed">{parcours.description}</p>
                      <div className="glass-card rounded-lg p-3 bg-deep/30">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Public cible</p>
                        <p className="text-xs text-foreground/70">{parcours.targetAudience}</p>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1 mt-2">Rythme quotidien</p>
                        <p className="text-xs text-foreground/70">{parcours.dailyRhythm}</p>
                      </div>
                      <div className="space-y-2 max-h-96 overflow-y-auto custom-scrollbar">
                        {parcours.steps.map((step) => (
                          <button
                            key={step.dayNumber}
                            onClick={() => setCurrentBook(step.bookId)}
                            className="w-full text-left glass-card rounded-lg p-3 card-hover group flex items-start gap-3"
                          >
                            <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 font-mono text-xs font-bold" style={{ backgroundColor: parcours.color + '15', color: parcours.color, border: '1px solid ' + parcours.color + '30' }}>
                              {step.dayNumber}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-0.5">
                                <span className="text-sm font-medium text-foreground group-hover:text-gold transition-colors">{step.title}</span>
                                <span className="text-[10px] text-muted-foreground">{step.duration}</span>
                              </div>
                              <p className="text-[10px] text-muted-foreground line-clamp-2">{step.focusArea}</p>
                              <div className="ornate-card rounded p-2 mt-2">
                                <p className="arabic text-xs text-gold/80 text-center leading-[1.8]">{step.verseArabic}</p>
                                <p className="text-[10px] text-foreground/60 italic text-center">{step.verseFrench}</p>
                                <p className="text-[9px] text-gold/50 text-center">{step.verseReference}</p>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeParcoursSubTab === 'protocoles' && (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground mb-4">{parcoursTherapeutiques.length} parcours therapeutiques progressifs pour guider votre pratique</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {parcoursTherapeutiques.map((parcours) => (
          <Card key={parcours.id} className="glass-card border border-gold/10 hover:border-gold/30 transition-all overflow-hidden">
            <CardHeader className="pb-3 cursor-pointer" onClick={() => setExpandedParcours(expandedParcours === parcours.id ? null : parcours.id)}>
              <div className="flex items-start gap-3">
                <div className="text-3xl mt-1">{parcours.icon}</div>
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-base font-serif text-gold">{parcours.title}</CardTitle>
                  <CardDescription className="text-xs text-muted-foreground mt-1">{parcours.subtitle}</CardDescription>
                </div>
                <ChevronDown className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform ${expandedParcours === parcours.id ? 'rotate-180' : ''}`} />
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="outline" className="border-gold/20 text-gold/70 text-[10px]">{parcours.duration}</Badge>
                <Badge variant="outline" className="border-mirror/20 text-mirror/70 text-[10px]">{parcours.steps.length} étapes</Badge>
                <Badge variant="outline" className="border-purple-400/20 text-purple-400/70 text-[10px]">{parcours.targetAudience.split(',')[0]}</Badge>
              </div>
              {expandedParcours === parcours.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="border-t border-gold/10 pt-3 mt-3 space-y-3"
                >
                  <p className="text-xs text-foreground/70 leading-relaxed">{parcours.description}</p>
                  <div className="space-y-2">
                    {parcours.steps.map((step) => (
                      <button
                        key={step.order}
                        onClick={() => setCurrentBook(step.bookId)}
                        className="w-full text-left glass-card rounded-lg p-3 card-hover group flex items-start gap-3"
                      >
                        <div className="w-7 h-7 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs font-mono text-gold">{step.order}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-sm font-medium text-foreground group-hover:text-gold transition-colors">{step.title}</span>
                            <span className="text-[10px] text-muted-foreground">{step.duration}</span>
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-2">{step.objective}</p>
                        </div>
                        <ChevronRight className="w-3 h-3 text-muted-foreground shrink-0 mt-2" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ==================== FICHES VERSETS TAB ====================

function FichesVersetsTab() {
  const [selectedFiche, setSelectedFiche] = useState<number | null>(null);
  const [filterTheme, setFilterTheme] = useState<string | null>(null);

  const filteredFiches = filterTheme
    ? fichesVersets.filter(f => f.theme === filterTheme)
    : fichesVersets;

  const themeCounts: Record<string, number> = {};
  fichesVersets.forEach(f => {
    themeCounts[f.theme] = (themeCounts[f.theme] || 0) + 1;
  });

  if (selectedFiche !== null) {
    const fiche = fichesVersets.find(f => f.id === selectedFiche);
    if (!fiche) return null;
    return (
      <div>
        <button onClick={() => setSelectedFiche(null)} className="flex items-center gap-2 text-muted-foreground hover:text-gold mb-4 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Retour aux fiches</span>
        </button>
        <div className="max-w-3xl mx-auto space-y-4">
          <Card className="glass-card border border-gold/10">
            <CardContent className="pt-6">
              <div className="text-center mb-4">
                <Badge variant="outline" className="border-mirror/20 text-mirror/70 text-xs mb-3">{ficheThemeLabels[fiche.theme] || fiche.theme}</Badge>
                <p className="arabic text-xl md:text-2xl text-gold/90 leading-[2] mb-3">{fiche.verseArabic}</p>
                <div className="gold-divider max-w-xs mx-auto my-3" />
                <p className="text-base font-serif text-foreground/90 italic">{fiche.verseFrench}</p>
                <p className="text-sm text-gold/60 mt-2">Coran {fiche.reference}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border border-mirror/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-mirror flex items-center gap-2">
                <Eye className="w-4 h-4" /> Version Miroir
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/80 italic leading-relaxed">{fiche.mirrorVersion}</p>
            </CardContent>
          </Card>

          <Card className="glass-card border border-gold/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-gold flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Exercice Fana
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/80 leading-relaxed">{fiche.fanaExercise}</p>
            </CardContent>
          </Card>

          <Card className="glass-card border border-purple-400/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-purple-400 flex items-center gap-2">
                <PenLine className="w-4 h-4" /> Journaling
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/80 leading-relaxed">{fiche.journalingPrompt}</p>
            </CardContent>
          </Card>

          <Card className="glass-card border border-green-400/10">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-green-400 flex items-center gap-2">
                <Sun className="w-4 h-4" /> Affirmation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/80 font-serif italic leading-relaxed">{fiche.affirmation}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 mb-4">
        <button onClick={() => setFilterTheme(null)} className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${!filterTheme ? 'bg-gold/15 text-gold border border-gold/30' : 'text-muted-foreground border border-border hover:border-gold/20'}`}>
          Tous ({fichesVersets.length})
        </button>
        {Object.entries(themeCounts).sort((a, b) => b[1] - a[1]).map(([theme, count]) => (
          <button key={theme} onClick={() => setFilterTheme(filterTheme === theme ? null : theme)} className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${filterTheme === theme ? 'bg-gold/15 text-gold border border-gold/30' : 'text-muted-foreground border border-border hover:border-gold/20'}`}>
            {ficheThemeLabels[theme] || theme} ({count})
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredFiches.map((fiche) => (
          <button key={fiche.id} onClick={() => setSelectedFiche(fiche.id)} className="glass-card rounded-lg p-4 text-left card-hover group">
            <div className="flex items-start justify-between gap-2 mb-2">
              <Badge variant="outline" className="border-mirror/15 text-mirror/60 text-[10px] shrink-0">{ficheThemeLabels[fiche.theme] || fiche.theme}</Badge>
              <span className="text-[10px] text-gold/50">{fiche.reference}</span>
            </div>
            <p className="arabic text-sm text-gold/80 mb-2 leading-relaxed line-clamp-1">{fiche.verseArabic}</p>
            <p className="text-xs text-foreground/80 line-clamp-2 mb-2">{fiche.verseFrench}</p>
            <p className="text-[10px] text-muted-foreground line-clamp-1 italic">{fiche.mirrorVersion.slice(0, 90)}...</p>
          </button>
        ))}
      </div>
    </div>
  );
}

// ==================== SCRIPTS AUDIO TAB ====================

function ScriptsAudioTab() {
  const [selectedScript, setSelectedScript] = useState<string | null>(null);
  const [filterPhase, setFilterPhase] = useState<string | null>(null);

  const phases = ['Fana', 'Tajalli', 'Munajat', 'Cycle Complet', 'Béance'];
  const filteredScripts = filterPhase
    ? audioScripts.filter(s => s.phase === filterPhase)
    : audioScripts;

  if (selectedScript) {
    const script = audioScripts.find(s => s.id === selectedScript);
    if (!script) return null;
    const scriptLines = script.script.split('\n').map((line, i) => {
      if (line.startsWith('[pause')) {
        const match = line.match(/\[(\w+)\s+(\d+)\s+\w+\]/);
        if (match) {
          return (
            <div key={i} className="flex items-center justify-center py-2 my-1">
              <div className="flex items-center gap-2 text-gold/40">
                <div className="w-8 h-[1px] bg-gold/20" />
                <Clock className="w-3 h-3" />
                <span className="text-[10px] font-mono">{match[2]}s</span>
                <div className="w-8 h-[1px] bg-gold/20" />
              </div>
            </div>
          );
        }
      }
      if (line.trim() === '') return <br key={i} />;
      return <p key={i} className="text-sm text-foreground/80 leading-relaxed">{line}</p>;
    });

    return (
      <div>
        <button onClick={() => setSelectedScript(null)} className="flex items-center gap-2 text-muted-foreground hover:text-gold mb-4 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Retour aux scripts</span>
        </button>
        <div className="max-w-3xl mx-auto">
          <Card className="glass-card border border-gold/10 mb-4">
            <CardHeader>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="outline" className="border-gold/20 text-gold text-xs">{script.phase}</Badge>
                <Badge variant="outline" className="border-purple-400/20 text-purple-400 text-xs">{script.level}</Badge>
                <Badge variant="outline" className="border-mirror/20 text-mirror text-xs">{script.duration}</Badge>
              </div>
              <CardTitle className="text-lg font-serif text-gold">{script.title}</CardTitle>
              <CardDescription className="text-xs text-muted-foreground mt-1">{script.description}</CardDescription>
            </CardHeader>
          </Card>
          <Card className="glass-card border border-gold/10">
            <CardContent className="pt-6">
              <div className="prose prose-invert max-w-none">{scriptLines}</div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 mb-4">
        <button onClick={() => setFilterPhase(null)} className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${!filterPhase ? 'bg-gold/15 text-gold border border-gold/30' : 'text-muted-foreground border border-border hover:border-gold/20'}`}>
          Tous ({audioScripts.length})
        </button>
        {phases.map(phase => {
          const count = audioScripts.filter(s => s.phase === phase).length;
          return (
            <button key={phase} onClick={() => setFilterPhase(filterPhase === phase ? null : phase)} className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${filterPhase === phase ? 'bg-gold/15 text-gold border border-gold/30' : 'text-muted-foreground border border-border hover:border-gold/20'}`}>
              {phase} ({count})
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredScripts.map((script) => (
          <button key={script.id} onClick={() => setSelectedScript(script.id)} className="glass-card rounded-lg p-4 text-left card-hover group">
            <div className="flex items-center gap-2 mb-2">
              <Headphones className="w-4 h-4 text-gold/60" />
              <Badge variant="outline" className="border-gold/20 text-gold/70 text-[10px]">{script.phase}</Badge>
              <Badge variant="outline" className="border-purple-400/20 text-purple-400/70 text-[10px]">{script.level}</Badge>
            </div>
            <h3 className="text-sm font-serif font-medium text-foreground group-hover:text-gold transition-colors mb-1">{script.title}</h3>
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
              <Clock className="w-3 h-3" />
              <span>{script.duration}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{script.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

// ==================== VERSE MIRROR SELECTOR ====================

function VerseMirrorSelector() {
  const [selectedVerseIdx, setSelectedVerseIdx] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  
  const filteredVerses = versetsQuotidiens.filter((v) => {
    const matchesSearch = v.french.toLowerCase().includes(searchTerm.toLowerCase()) ||
      v.reference.includes(searchTerm) ||
      (v.mirrorVersion && v.mirrorVersion.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (v as { theme?: string }).theme?.includes(searchTerm.toLowerCase());
    const matchesTheme = !selectedTheme || (v as { theme?: string }).theme === selectedTheme;
    return matchesSearch && matchesTheme;
  });

  const themeLabels: Record<string, string> = {
    confiance: 'Confiance', patience: 'Patience', guerison: 'Guérison', presence: 'Présence',
    pardon: 'Pardon', gratitude: 'Gratitude', sagesse: 'Sagesse', amour: 'Amour',
    espoir: 'Espoir', detachement: 'Détachement', force: 'Force', guidance: 'Guidance',
    meditation: 'Méditation', transformation: 'Transformation', priere: 'Prière',
  };

  // Count verses per theme
  const themeCounts: Record<string, number> = {};
  versetsQuotidiens.forEach((v) => {
    const t = (v as { theme?: string }).theme;
    if (t) themeCounts[t] = (themeCounts[t] || 0) + 1;
  });

  return (
    <div>
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Rechercher un verset par contenu, référence ou thème..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-deep/50 border-mirror/10 focus:border-mirror/30"
        />
      </div>

      {/* Theme filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button onClick={() => setSelectedTheme(null)}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${!selectedTheme ? 'bg-mirror/15 text-mirror border border-mirror/30' : 'text-muted-foreground border border-border hover:border-mirror/20'}`}>
          Tous ({versetsQuotidiens.length})
        </button>
        {Object.entries(themeCounts).sort((a, b) => b[1] - a[1]).map(([theme, count]) => (
          <button key={theme} onClick={() => setSelectedTheme(selectedTheme === theme ? null : theme)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${selectedTheme === theme ? 'bg-mirror/15 text-mirror border border-mirror/30' : 'text-muted-foreground border border-border hover:border-mirror/20'}`}>
            {themeLabels[theme] || theme} ({count})
          </button>
        ))}
      </div>

      {selectedVerseIdx !== null ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedVerseIdx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="max-w-3xl mx-auto">
              <button
                onClick={() => setSelectedVerseIdx(null)}
                className="flex items-center gap-2 text-muted-foreground hover:text-mirror mb-4 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Retour à la liste</span>
              </button>

              <div className="text-center mb-6">
                <div className="inline-block px-3 py-1 rounded-full bg-mirror/10 border border-mirror/20 mb-4">
                  <span className="text-xs text-mirror font-medium">Version Miroir</span>
                </div>
                <p className="arabic text-2xl md:text-3xl text-gold/90 mb-3 leading-[2]">
                  {versetsQuotidiens[selectedVerseIdx].arabe}
                </p>
                <div className="gold-divider max-w-md mx-auto my-4" />
                <p className="text-lg font-serif text-foreground/90 italic mb-2">
                  {versetsQuotidiens[selectedVerseIdx].french}
                </p>
                <p className="text-sm text-gold/60">— Coran {versetsQuotidiens[selectedVerseIdx].reference}</p>
              </div>

              <div className="bg-gradient-to-br from-mirror/10 via-deep to-purple-500/5 border border-mirror/20 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Eye className="w-5 h-5 text-mirror" />
                  <h3 className="font-serif font-bold text-mirror">Lecture Miroir</h3>
                  {(versetsQuotidiens[selectedVerseIdx] as { theme?: string }).theme && (
                    <Badge variant="outline" className="border-mirror/20 text-mirror/70 text-xs ml-auto">
                      {themeLabels[(versetsQuotidiens[selectedVerseIdx] as { theme?: string }).theme!] || (versetsQuotidiens[selectedVerseIdx] as { theme?: string }).theme}
                    </Badge>
                  )}
                </div>
                <p className="text-foreground/80 leading-relaxed italic">
                  {versetsQuotidiens[selectedVerseIdx].mirrorVersion}
                </p>
              </div>

              {versetsQuotidiens[selectedVerseIdx].reflection && (
                <div className="glass-card rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 text-gold" />
                    <span className="text-xs text-gold font-medium">Réflexion</span>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {versetsQuotidiens[selectedVerseIdx].reflection}
                  </p>
                </div>
              )}

              <div className="flex justify-center gap-3">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-mirror/30 text-mirror hover:bg-mirror/10"
                  onClick={() => {
                    let idx: number;
                    do {
                      idx = Math.floor(Math.random() * versetsQuotidiens.length);
                    } while (idx === selectedVerseIdx && versetsQuotidiens.length > 1);
                    setSelectedVerseIdx(idx);
                  }}
                >
                  <Dices className="w-4 h-4 mr-1" /> Verset aléatoire
                </Button>
                {selectedVerseIdx > 0 && (
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-muted-foreground"
                    onClick={() => setSelectedVerseIdx(selectedVerseIdx - 1)}
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" /> Précédent
                  </Button>
                )}
                {selectedVerseIdx < versetsQuotidiens.length - 1 && (
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-muted-foreground"
                    onClick={() => setSelectedVerseIdx(selectedVerseIdx + 1)}
                  >
                    Suivant <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[500px] overflow-y-auto pr-2">
          {filteredVerses.map((v) => {
            const realIdx = versetsQuotidiens.findIndex(vv => vv.id === v.id);
            return (
              <button
                key={v.id}
                onClick={() => setSelectedVerseIdx(realIdx)}
                className="glass-card rounded-lg p-4 text-left card-hover group"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-serif text-foreground/90 group-hover:text-mirror transition-colors mb-1 line-clamp-2 flex-1">
                    {v.french}
                  </p>
                  {(v as { theme?: string }).theme && (
                    <Badge variant="outline" className="border-mirror/10 text-mirror/50 text-[10px] shrink-0 whitespace-nowrap">
                      {themeLabels[(v as { theme?: string }).theme!] || (v as { theme?: string }).theme}
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-gold/60 mb-2">— {v.reference}</p>
                {v.mirrorVersion && (
                  <p className="text-xs text-muted-foreground line-clamp-1 italic">
                    🪞 {v.mirrorVersion.slice(0, 80)}...
                  </p>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ==================== PROTOCOLS TAB FOR CHERCHEUR ====================

function ProtocolsLabTab() {
  const [selectedProtocol, setSelectedProtocol] = useState<string | null>(null);
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? therapyProtocols :
    therapyProtocols.filter(p => p.category === filter);

  const protocol = selectedProtocol ? therapyProtocols.find(p => p.id === selectedProtocol) : null;

  if (protocol) {
    return (
      <div>
        <button onClick={() => setSelectedProtocol(null)}
          className="flex items-center gap-2 text-muted-foreground hover:text-gold mb-4 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Retour aux protocoles</span>
        </button>

        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{protocol.icon}</span>
            <div>
              <Badge variant="outline" className="border-gold/30 text-gold mb-1">
                Protocole {protocol.letter} — {protocol.category === 'trauma' ? 'Trauma' : 'Relationnel'}
              </Badge>
              <h3 className="text-xl font-serif font-bold text-gold-gradient">{protocol.title}</h3>
              <p className="text-sm text-muted-foreground">{protocol.subtitle}</p>
            </div>
          </div>
          <p className="text-sm text-foreground/70 mt-2">{protocol.description}</p>
        </div>

        <div className="space-y-4 mb-6">
          {protocol.phases.map((phase, i) => (
            <Card key={i} className="glass-card">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                    <span className="font-mono text-gold text-xs">{i + 1}</span>
                  </div>
                  <div>
                    <CardTitle className="text-gold text-base">{phase.name}</CardTitle>
                    <CardDescription className="text-muted-foreground text-xs">{phase.duration}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 mb-3">{phase.description}</p>
                <div className="space-y-2">
                  {phase.verses.map((v, j) => (
                    <div key={j} className="glass-card rounded-lg p-3">
                      <p className="arabic text-base text-gold/90 mb-1">{v.arabic}</p>
                      <p className="text-xs text-foreground/70 italic">{v.french}</p>
                      <p className="text-xs text-muted-foreground">— {v.reference}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="glass-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-mirror text-sm flex items-center gap-2">
                <Lightbulb className="w-4 h-4" /> Points clés
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {protocol.keyInsights.map((insight, i) => (
                  <li key={i} className="text-xs text-foreground/70 flex items-start gap-2">
                    <ChevronRight className="w-3 h-3 text-mirror mt-0.5 shrink-0" />
                    {insight}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-red-400 text-sm flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" /> Contre-indications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {protocol.contraindications.map((c, i) => (
                  <li key={i} className="text-xs text-foreground/70 flex items-start gap-2">
                    <ChevronRight className="w-3 h-3 text-red-400 mt-0.5 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex gap-2 mb-4 flex-wrap">
        {['all', 'trauma', 'relationnel'].map(f => (
          <button key={f} onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded-full text-xs transition-all
              ${filter === f ? 'bg-mirror/20 text-mirror border border-mirror/40' : 'text-muted-foreground border border-border hover:border-mirror/20'}`}>
            {f === 'all' ? `Tous (${therapyProtocols.length})` : f === 'trauma' ? `Trauma (${therapyProtocols.filter(p => p.category === 'trauma').length})` : `Relationnel (${therapyProtocols.filter(p => p.category === 'relationnel').length})`}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(p => (
          <Card key={p.id} className="glass-card cursor-pointer card-hover group"
            onClick={() => setSelectedProtocol(p.id)}>
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{p.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1">
                    <Badge variant="outline" className="border-gold/20 text-gold/70 text-xs">{p.letter}</Badge>
                    <Badge variant="outline" className="border-border text-xs">{p.category}</Badge>
                  </div>
                  <h4 className="font-serif font-bold text-sm text-foreground group-hover:text-gold transition-colors truncate">{p.title}</h4>
                </div>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-2">{p.description}</p>
              <div className="flex items-center gap-1 mt-2 text-xs text-mirror/60 group-hover:text-mirror">
                <span>Voir le protocole</span>
                <ChevronRight className="w-3 h-3" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ==================== GUIDED BREATHING ====================

function GuidedBreathing() {
  const [isActive, setIsActive] = useState(false);
  const [cycle, setCycle] = useState(0);
  const [phase, setPhase] = useState<'inspire' | 'retiens' | 'expire'>('inspire');
  const totalCycles = 7;

  useEffect(() => {
    if (!isActive) return;
    const timers: NodeJS.Timeout[] = [];
    
    const runCycle = () => {
      // Inspire (4s)
      setPhase('inspire');
      timers.push(setTimeout(() => {
        // Retiens (4s)
        setPhase('retiens');
        timers.push(setTimeout(() => {
          // Expire (6s)
          setPhase('expire');
          timers.push(setTimeout(() => {
            setCycle(c => {
              if (c + 1 >= totalCycles) {
                setIsActive(false);
                return 0;
              }
              return c + 1;
            });
          }, 6000));
        }, 4000));
      }, 4000));
    };
    
    runCycle();
    return () => timers.forEach(clearTimeout);
  }, [isActive, cycle]);

  const reset = () => { setIsActive(false); setCycle(0); setPhase('inspire'); };

  const phaseConfig = {
    inspire: { label: 'Inspire', text: 'Hasbu...', duration: '4s', scale: 'scale-125', color: 'bg-gold/20 border-gold/40 text-gold' },
    retiens: { label: 'Retiens', text: 'nallah', duration: '4s', scale: 'scale-150', color: 'bg-mirror/20 border-mirror/40 text-mirror' },
    expire: { label: 'Expire', text: 'Allah', duration: '6s', scale: 'scale-100', color: 'bg-green-500/20 border-green-500/40 text-green-400' },
  };
  const config = phaseConfig[phase];

  return (
    <div className="text-center">
      <div className={`w-32 h-32 mx-auto mb-6 rounded-full border-2 flex items-center justify-center transition-all duration-[4000ms] ${isActive ? `${config.scale} ${config.color}` : 'bg-deep/50 border-gold/20'}`}>
        <span className="text-2xl font-serif text-gold/90">{config.text}</span>
      </div>
      
      <div className="flex items-center justify-center gap-4 mb-6">
        {(['inspire', 'retiens', 'expire'] as const).map(p => (
          <div key={p} className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${phase === p ? phaseConfig[p].color : 'text-muted-foreground border border-border'}`}>
            {phaseConfig[p].label} ({phaseConfig[p].duration})
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-3 mb-4">
        {Array.from({ length: totalCycles }).map((_, i) => (
          <div key={i} className={`w-3 h-3 rounded-full transition-all ${i < cycle ? 'bg-gold' : i === cycle ? 'bg-gold animate-pulse' : 'bg-deep border border-gold/20'}`} />
        ))}
      </div>

      <div className="flex justify-center gap-2 text-sm text-muted-foreground mb-4">
        <span>Cycle {cycle + 1}/{totalCycles}</span>
      </div>

      <Button onClick={isActive ? reset : () => setIsActive(true)} variant="outline" size="sm"
        className={`border-gold/30 hover:bg-gold/10 text-gold ${isActive ? 'animate-pulse' : ''}`}>
        {isActive ? <Pause className="w-4 h-4 mr-1" /> : <Play className="w-4 h-4 mr-1" />}
        {isActive ? 'Arrêter' : 'Commencer la respiration'}
      </Button>
    </div>
  );
}

// ==================== PRACTICE STREAK ====================

function PracticeStreak() {
  const [streakData, setStreakData] = useState<{ current: number; best: number; lastPractice: string | null; totalMinutes: number; sessions: number }>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('practice-streak');
      if (saved) return JSON.parse(saved);
    }
    return { current: 0, best: 0, lastPractice: null, totalMinutes: 0, sessions: 0 };
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('practice-streak', JSON.stringify(streakData));
    }
  }, [streakData]);

  const recordPractice = () => {
    const today = new Date().toDateString();
    if (streakData.lastPractice === today) return;
    
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    const newCurrent = streakData.lastPractice === yesterday ? streakData.current + 1 : 1;
    
    setStreakData({
      current: newCurrent,
      best: Math.max(newCurrent, streakData.best),
      lastPractice: today,
      totalMinutes: streakData.totalMinutes + 5,
      sessions: streakData.sessions + 1,
    });
  };

  const streakEmojis = ['🔥', '⚡', '✨', '🌟', '💫'];
  const emojiIndex = Math.min(Math.floor(streakData.current / 3), streakEmojis.length - 1);

  return (
    <Card className="glass-card ornate-card">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <CardTitle className="text-gold flex items-center gap-2">
            <Flame className="w-5 h-5" /> Série de Pratique
          </CardTitle>
          {streakData.current > 0 && (
            <Badge className="bg-gold/20 text-gold border-gold/40">{streakEmojis[emojiIndex]} {streakData.current} jours</Badge>
          )}
        </div>
        
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="text-center p-3 rounded-lg bg-deep/50">
            <div className="text-2xl font-bold text-gold-gradient">{streakData.current}</div>
            <div className="text-xs text-muted-foreground mt-1">Série actuelle</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-deep/50">
            <div className="text-2xl font-bold text-mirror-gradient">{streakData.best}</div>
            <div className="text-xs text-muted-foreground mt-1">Record</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-deep/50">
            <div className="text-2xl font-bold text-foreground">{streakData.totalMinutes}</div>
            <div className="text-xs text-muted-foreground mt-1">Minutes totales</div>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-2 bg-deep rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-gold/60 to-gold rounded-full transition-all duration-500"
              style={{ width: `${Math.min((streakData.current / 30) * 100, 100)}%` }}
            />
          </div>
          <span className="text-xs text-muted-foreground">Objectif: 30 jours</span>
        </div>

        <Button 
          onClick={recordPractice}
          className="w-full bg-gold/10 text-gold border border-gold/30 hover:bg-gold/20 transition-all"
          size="sm"
        >
          <Zap className="w-4 h-4 mr-2" />
          {streakData.lastPractice === new Date().toDateString() ? 'Pratique enregistrée ✓' : 'Enregistrer ma pratique aujourd\'hui'}
        </Button>
      </CardContent>
    </Card>
  );
}

// ==================== MIROIR ====================

function MiroirSection() {
  const [verseIndex] = useState(() => {
    const today = new Date();
    return today.getDate() % versetsQuotidiens.length;
  });
  const [journalText, setJournalText] = useState('');
  const [selectedName, setSelectedName] = useState<number | null>(null);
  const [meditationPhase, setMeditationPhase] = useState(0);
  const [pulledVerse, setPulledVerse] = useState<number | null>(null);
  const { addEntry: addJournalEntry } = useMirrorJournalStore();
  const verse = versetsQuotidiens[verseIndex];

  const meditationPhases = [
    { name: 'Fana', desc: 'Apaisez les vagues du mental. Respirez profondément.', duration: '5 min', color: 'from-gold/20 to-gold/5' },
    { name: 'Tajalli', desc: 'Laissez le verset se refléter dans votre cœur.', duration: '5 min', color: 'from-mirror/20 to-mirror/5' },
    { name: 'Munajat', desc: 'Parlez à votre Seigneur avec sincérité.', duration: '5 min', color: 'from-green-400/20 to-green-400/5' },
    { name: 'Béance', desc: 'Le silence sacré. Restez en paix.', duration: '3 min', color: 'from-purple-400/20 to-purple-400/5' },
  ];

  const displayedNames = selectedName !== null
    ? [nomsDivins[selectedName]]
    : nomsDivins.slice(0, 12);

  const pulledVerseData = pulledVerse !== null ? versetsQuotidiens[pulledVerse] : null;

  const handlePullVerse = () => {
    let idx: number;
    do {
      idx = Math.floor(Math.random() * versetsQuotidiens.length);
    } while (idx === verseIndex && versetsQuotidiens.length > 1);
    setPulledVerse(idx);
  };

  return (
    <div className="section-enter">
      <SectionHeader
        icon={<Eye className="w-8 h-8 text-mirror" />}
        title="Le Miroir"
        subtitle="Version Miroir des versets — votre espace de contemplation et de méditation"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass-card lg:col-span-2">
          <CardContent className="p-8">
            <div className="text-center">
              <Badge variant="outline" className="border-mirror/30 text-mirror mb-4">
                <Calendar className="w-3 h-3 mr-1" /> Verset du jour
              </Badge>
              <p className="arabic text-2xl md:text-3xl text-gold/90 mb-4 leading-[2]">{verse.arabe}</p>
              <div className="gold-divider max-w-md mx-auto my-4" />
              <p className="text-lg font-serif text-foreground/90 italic mb-2">{verse.french}</p>
              <p className="text-sm text-gold/60 mb-4">— Coran {verse.reference}</p>
              <Card className="glass-card max-w-lg mx-auto">
                <CardContent className="p-4">
                  <p className="text-sm text-foreground/70 leading-relaxed">{verse.reflection}</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-gold flex items-center gap-2">
              <Activity className="w-5 h-5" /> Méditation Guidée
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 mb-4 flex-wrap">
              {meditationPhases.map((p, i) => (
                <button key={i} onClick={() => setMeditationPhase(i)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all
                    ${meditationPhase === i ? 'bg-gold/20 text-gold border border-gold/40' : 'text-muted-foreground border border-border hover:border-gold/20'}`}>
                  {p.name}
                </button>
              ))}
            </div>
            <div className={`rounded-xl p-6 bg-gradient-to-b ${meditationPhases[meditationPhase].color} text-center mb-4`}>
              <h3 className="text-xl font-serif font-bold text-gold mb-2">{meditationPhases[meditationPhase].name}</h3>
              <p className="text-sm text-foreground/70 mb-2">{meditationPhases[meditationPhase].desc}</p>
              <p className="text-xs text-muted-foreground">{meditationPhases[meditationPhase].duration}</p>
              <div className={`w-20 h-20 mx-auto mt-4 rounded-full border-2 border-gold/30 flex items-center justify-center
                ${meditationPhase === 0 ? 'breathe' : ''}`}>
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center">
                  <span className="text-2xl">{['🫧', '🪞', '🤲', '🌙'][meditationPhase]}</span>
                </div>
              </div>
            </div>
            <MeditationTimer />
          </CardContent>
        </Card>

        <Card className="glass-card lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-gold flex items-center gap-2">
                <Sparkles className="w-5 h-5" /> Les 99 Noms d&apos;Allah
              </CardTitle>
              {selectedName !== null && (
                <Button variant="ghost" size="sm" className="text-muted-foreground" onClick={() => setSelectedName(null)}>
                  <ArrowLeft className="w-4 h-4 mr-1" /> Retour
                </Button>
              )}
            </div>
            <CardDescription>
              {selectedName !== null ? 'Cliquez sur un Nom pour méditer' : `Affichage de ${displayedNames.length} Noms — méditez sur chacun`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {displayedNames.map((name) => (
                <button key={name.id}
                  onClick={() => selectedName === null ? setSelectedName(nomsDivins.findIndex(n => n.id === name.id)) : undefined}
                  className="glass-card rounded-lg p-4 text-left card-hover group">
                  <p className="arabic text-xl text-gold mb-1 leading-[2]">{name.arabe}</p>
                  <p className="font-serif font-semibold text-foreground text-sm group-hover:text-gold transition-colors">{name.latin}</p>
                  <p className="text-xs text-muted-foreground">{name.francais}</p>
                  {selectedName !== null && (
                    <p className="text-xs text-foreground/60 mt-2 leading-relaxed">{name.meditation}</p>
                  )}
                </button>
              ))}
            </div>
            {selectedName === null && (
              <div className="text-center mt-4">
                <p className="text-xs text-muted-foreground">Cliquez sur un Nom pour voir la méditation associée</p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="glass-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-gold flex items-center gap-2">
              <Star className="w-5 h-5" /> Citations des Maîtres
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {citationsDesMaitres.slice(0, 6).map((quote) => (
                <div key={quote.id} className="glass-card rounded-lg p-4">
                  <p className="font-serif text-sm text-foreground/80 italic leading-relaxed mb-2">
                    &ldquo;{quote.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gold">— {quote.author}</p>
                    <p className="text-xs text-muted-foreground">{quote.source}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Practice Streak */}
        <PracticeStreak />

        {/* Respiration Coranique Guidée */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-mirror flex items-center gap-2">
              <Activity className="w-5 h-5" /> Respiration Coranique Guidée
            </CardTitle>
            <CardDescription>Synchronisez votre respiration avec le dhikr — &ldquo;Hasbunallah&rdquo; (Allah nous suffit)</CardDescription>
          </CardHeader>
          <CardContent>
            <GuidedBreathing />
          </CardContent>
        </Card>

        {/* Version Miroir - Verse Selector — FEATURE PRINCIPALE */}
        <Card className="glass-card lg:col-span-2 border-mirror/20">
          <CardHeader>
            <CardTitle className="text-mirror flex items-center gap-2 text-xl">
              <Eye className="w-6 h-6" /> 🪞 Version Miroir des Versets
            </CardTitle>
            <CardDescription>{versetsQuotidiens.length} versets — Choisissez un verset et découvrez ce qu&apos;il révèle sur vous</CardDescription>
          </CardHeader>
          <CardContent>
            <VerseMirrorSelector />
          </CardContent>
        </Card>

        {/* Tirage du Miroir */}
        <Card className="glass-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-mirror flex items-center gap-2">
              <Dices className="w-5 h-5" /> Tirage du Miroir
            </CardTitle>
            <CardDescription>Un verset au hasard pour votre méditation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              {pulledVerseData ? (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={pulledVerse}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="max-w-2xl mx-auto"
                  >
                    <p className="arabic text-2xl md:text-3xl text-gold/90 mb-4 leading-[2]">{pulledVerseData.arabe}</p>
                    <div className="gold-divider max-w-md mx-auto my-4" />
                    <p className="text-lg font-serif text-foreground/90 italic mb-2">{pulledVerseData.french}</p>
                    <p className="text-sm text-gold/60 mb-6">— Coran {pulledVerseData.reference}</p>
                    <div className="glass-card rounded-lg p-4 max-w-lg mx-auto mb-6">
                      <p className="text-sm text-foreground/70 leading-relaxed">{pulledVerseData.reflection}</p>
                    </div>
                    <p className="text-sm text-muted-foreground italic mb-4">Comment ce verset vous parle-t-il aujourd&apos;hui ?</p>
                  </motion.div>
                </AnimatePresence>
              ) : (
                <div className="py-8">
                  <p className="text-muted-foreground mb-4">Cliquez pour recevoir un verset miroir</p>
                </div>
              )}
              <Button onClick={handlePullVerse}
                className="bg-mirror/10 text-mirror border border-mirror/30 hover:bg-mirror/20">
                <Dices className="w-4 h-4 mr-1" /> Tirer un verset
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Prière de l'Istikhara */}
        <IstikharaGuide />

        {/* Journal du Miroir — Simple */}
        <Card className="glass-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-mirror flex items-center gap-2">
              <PenLine className="w-5 h-5" /> Journal du Miroir
            </CardTitle>
            <CardDescription>Ce que le miroir vous a révélé aujourd&apos;hui...</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              value={journalText}
              onChange={(e) => setJournalText(e.target.value)}
              placeholder="Prenez un moment pour écrire ce que votre cœur ressent après la méditation."
              className="min-h-[150px] bg-deep/50 border-mirror/10 focus:border-mirror/30 resize-none mb-4"
            />
            <Button size="sm" className="bg-mirror/10 text-mirror border border-mirror/30 hover:bg-mirror/20"
              onClick={() => { addJournalEntry({ id: Date.now().toString(), date: new Date().toISOString(), verseId: verse.id, phase: 'fana', emotionalState: 5, content: journalText, gratitude: '' }); setJournalText(''); }}>
              <Save className="w-4 h-4 mr-1" /> Sauvegarder
            </Button>
          </CardContent>
        </Card>

        {/* Corpus de Versets Etendus */}
        <CorpusVersetsSection />
      </div>
    </div>
  );
}

// ==================== CORPUS DE VERSETS ETENDUS ====================

const themeLabels: Record<string, string> = {
  patience: 'Patience',
  confiance: 'Confiance',
  guerison: 'Guerison',
  pardon: 'Pardon',
  gratitude: 'Gratitude',
  force: 'Force',
  espoir: 'Espoir',
  'lacher-prise': 'Lacher-prise',
  amour: 'Amour',
  sagesse: 'Sagesse',
  paix: 'Paix',
  protection: 'Protection',
  'relation-allah': 'Relation avec Allah',
  colere: 'Colere',
  epreuve: 'Epreuve',
  identite: 'Identite',
  'couple-famille': 'Couple et Famille',
  deuil: 'Deuil',
  anxiete: 'Anxiete',
  transformation: 'Transformation',
};

const themeIcons: Record<string, string> = {
  patience: '⏳', confiance: '🤲', guerison: '💚', pardon: '🔓', gratitude: '☀️',
  force: '💪', espoir: '🌅', 'lacher-prise': '🍃', amour: '💝', sagesse: '🦉',
  paix: '🕊️', protection: '🛡️', 'relation-allah': '🌙', colere: '🔥', epreuve: '⛰️',
  identite: '🌈', 'couple-famille': '💑', deuil: '💫', anxiete: '🌊', transformation: '🦋',
};

function CorpusVersetsSection() {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [selectedVerse, setSelectedVerse] = useState<number | null>(null);

  const currentVerses = selectedTheme
    ? (versetsParCategorie[selectedTheme] || [])
    : [];

  const totalVerses = Object.values(versetsParCategorie).reduce((sum, arr) => sum + arr.length, 0);

  return (
    <div className="lg:col-span-2 space-y-4">
      <div className="glass-card rounded-xl p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center">
            <ScrollText className="w-5 h-5 text-gold" />
          </div>
          <div>
            <h3 className="text-lg font-serif font-bold text-gold-gradient">Corpus Coranique Etendu</h3>
            <p className="text-xs text-muted-foreground">{totalVerses} versets repartis en {verseCategories.length} themes therapeutiques</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          <button
            onClick={() => { setSelectedTheme(null); setSelectedVerse(null); }}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${!selectedTheme ? 'bg-gold/20 text-gold border border-gold/40' : 'text-muted-foreground hover:text-foreground border border-border'}`}
          >
            Tous ({totalVerses})
          </button>
          {verseCategories.map(cat => (
            <button
              key={cat}
              onClick={() => { setSelectedTheme(cat); setSelectedVerse(null); }}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${selectedTheme === cat ? 'bg-gold/20 text-gold border border-gold/40' : 'text-muted-foreground hover:text-foreground border border-border'}`}
            >
              {themeIcons[cat] || '📖'} {themeLabels[cat] || cat} ({(versetsParCategorie[cat] || []).length})
            </button>
          ))}
        </div>

        {!selectedTheme && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {verseCategories.map(cat => {
              const verses = versetsParCategorie[cat] || [];
              const randomVerse = verses[Math.floor(Math.random() * verses.length)];
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedTheme(cat)}
                  className="glass-card rounded-lg p-3 text-left card-hover group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{themeIcons[cat] || '📖'}</span>
                    <span className="text-sm font-medium text-foreground group-hover:text-gold transition-colors">{themeLabels[cat] || cat}</span>
                  </div>
                  {randomVerse && (
                    <>
                      <p className="arabic text-xs text-gold/70 leading-[1.8] line-clamp-2 mb-1">{randomVerse.arabic}</p>
                      <p className="text-[10px] text-muted-foreground italic line-clamp-1">{randomVerse.french}</p>
                      <p className="text-[9px] text-gold/40 mt-1">{randomVerse.reference}</p>
                    </>
                  )}
                  <Badge variant="outline" className="text-[9px] border-border text-muted-foreground mt-2">{verses.length} versets</Badge>
                </button>
              );
            })}
          </div>
        )}

        {selectedTheme && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">{themeIcons[selectedTheme] || '📖'}</span>
              <h4 className="text-base font-serif font-bold text-foreground">{themeLabels[selectedTheme] || selectedTheme}</h4>
              <Badge variant="outline" className="text-[10px] border-gold/20 text-gold/70">{currentVerses.length} versets</Badge>
            </div>
            <div className="space-y-2 max-h-[600px] overflow-y-auto custom-scrollbar">
              {currentVerses.map((v, idx) => (
                <button
                  key={v.id}
                  onClick={() => setSelectedVerse(selectedVerse === idx ? null : idx)}
                  className="w-full text-left glass-card rounded-lg p-4 card-hover group transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-mono text-gold">{idx + 1}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="arabic text-sm text-gold/90 leading-[2] mb-2">{v.arabic}</p>
                      <p className="text-sm font-serif text-foreground/80 italic">{v.french}</p>
                      <p className="text-xs text-gold/50 mt-1">Coran {v.reference}</p>
                      {selectedVerse === idx && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-3 pt-3 border-t border-gold/10"
                        >
                          <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Reflexion therapeutique</p>
                          <p className="text-xs text-foreground/70 leading-relaxed">{v.therapeuticReflection}</p>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ==================== CHERCHEUR ====================

function ChercheurSection() {
  const { notes, experiments, addNote, updateNote, deleteNote, addExperiment, updateExperiment, deleteExperiment } = useChercheurStore();
  const { addSuggestion } = useTechniqueLabStore();
  const [newNote, setNewNote] = useState({ title: '', content: '', category: 'Technique' });
  const [newExp, setNewExp] = useState({ title: '', hypothesis: '', methodology: '', status: 'en_cours' as const });
  const [showNoteForm, setShowNoteForm] = useState(false);
  const [showExpForm, setShowExpForm] = useState(false);
  const [activeTab, setActiveTab] = useState('notes');
  const [noteFilter, setNoteFilter] = useState('all');
  const [evalFilter, setEvalFilter] = useState('all');
  const [checkedEvals, setCheckedEvals] = useState<Set<string>>(new Set());
  const [insights, setInsights] = useState<string[]>([]);
  const [insightsLoading, setInsightsLoading] = useState(false);

  const handleGetInsights = (type: string) => {
    setInsightsLoading(true);
    const insightsMap: Record<string, string[]> = {
      technique: [
        `💡 Suggestion de technique : Essayez de varier la durée du Fana entre 5 et 20 minutes selon votre état émotionnel du jour. Les jours de grande agitation méritent un Fana plus long (15-20 min) pour stabiliser le mental.`,
        `🔬 Piste de recherche : Documentez les variations de votre expérience du Tajalli selon le moment de la journée. Le Qiyām al-Layl (veille nocturne) produit souvent des expériences plus profondes.`,
        `📊 Mesure proposée : Créez un "baromètre spirituel" quotidien de 1 à 10 pour chaque phase (Fana, Tajalli, Munajat, Béance). Suivez les tendances sur 30 jours pour identifier les patterns.`,
        `🧪 Expérimentation : Testez l'effet de la répétition d'un seul verset pendant 7 jours consécutifs. Notez comment le verset "descend" de plus en plus profondément dans le cœur.`,
        `🎯 Objectif avancé : Développez votre capacité à maintenir l'état de Béance pendant la prière (salat). Le khushu' dans la prière est la forme ultime de la présence contemplative.`,
        `📚 Étude recommandée : Relisez le chapitre "Al-Murqaba" de l'Ihya' d'Al-Ghazali. Sa description de la "veille du cœur" offre des nuances qui enrichiront votre pratique du Fana.`,
      ],
      protocole: [
        `🏥 Amélioration de protocole : Avant chaque séance de thérapie, évaluez l'état émotionnel du patient avec une échelle de 1 à 10 (pré-séance). Après la séance, réévaluez. Un delta de +2 ou plus indique une réponse positive au protocole.`,
        `📋 Nouvelle suggestion : Créez un "protocole d'urgence" de 10 minutes (Fana 3 min → Tajalli sur verset de confiance 4 min → Munajat 2 min → Béance 1 min) pour les moments de crise aiguë.`,
        `🔍 Pistes de recherche : Pour chaque protocole, identifiez les versets qui produisent le plus d'impact sur les patients. Constituez progressivement une "bibliothèque de versets thérapeutiques" classés par pathologie.`,
        `📊 Suivi longitudinal : Proposez à vos patients de tenir un journal quotidien pendant 30 jours entre les séances. Les données récoltées permettront d'ajuster les protocoles de manière empirique.`,
        `🤝 Collaboration : Envisagez de collaborer avec un thérapeute en TCC ou EMDR pour explorer les synergies entre le Tadaburr Thérapeutique et les approches occidentales validées.`,
        `📈 Évaluation : Développez un questionnaire de suivi post-protocol en 5 questions simples à administrer 1 semaine et 1 mois après la fin du protocole.`,
      ],
      avancee: [
        `🌙 Pratique nocturne : Le Qiyām al-Layl est l'accélérateur le plus puissant de la pratique. Commencez par 2 nuits par semaine (2h avant Fajr) et observez les transformations en 40 jours.`,
        `🧠 Neuro-Tadaburr : Explorez les corrélations entre les ondes cérébrales (alpha, theta, gamma) et chaque phase de la méditation. Le Dhikr du cœur pourrait synchroniser les ondes alpha-theta.`,
        `🔬 Recherche documentée : Publiez un article sur "Le Tadaburr Thérapeutique : Une approche spirituelle islamique de la guérison du trauma". Structurez-le selon les normes académiques APA.`,
        `💡 Innovation : Développez un "protocole adaptatif" qui modifie automatiquement la durée de chaque phase en fonction des signaux physiologiques du patient (fréquence cardiaque, respiration).`,
        `🏛️ Institutionnalisation : Créez un certificat de formation en "Tadaburr Thérapeutique" pour les praticiens de la santé mentale musulmans. Structurez un cursus de 3 modules.`,
        `🌐 Diffusion : Envisagez de créer des ateliers de groupe hebdomadaires où les participants pratiquent le cycle Fana-Tajalli-Munajat-Béance ensemble.`,
      ],
    };
    const key = type === 'technique' ? 'technique' : type === 'protocole' ? 'protocole' : 'avancee';
    const base = insightsMap[key] || insightsMap.technique;
    const shuffled = [...base].sort(() => Math.random() - 0.5);
    setInsights(shuffled.slice(0, 3));
    setInsightsLoading(false);
  };

  const handleAddNote = () => {
    if (!newNote.title.trim()) return;
    addNote({
      id: Date.now().toString(),
      ...newNote,
      status: 'active',
      createdAt: new Date().toISOString(),
    });
    setNewNote({ title: '', content: '', category: 'Technique' });
    setShowNoteForm(false);
  };

  const handleAddExperiment = () => {
    if (!newExp.title.trim()) return;
    addExperiment({
      id: Date.now().toString(),
      ...newExp,
      observations: '',
      conclusions: '',
      createdAt: new Date().toISOString(),
    });
    setNewExp({ title: '', hypothesis: '', methodology: '', status: 'en_cours' });
    setShowExpForm(false);
  };

  const filteredNotes = noteFilter === 'all' ? notes : notes.filter(n => n.category === noteFilter);
  const filteredEvals = evalFilter === 'all' ? autoEvaluationQuestions : autoEvaluationQuestions.filter(q => q.domain === evalFilter);

  const statusColors: Record<string, string> = {
    en_cours: 'border-yellow-400/30 text-yellow-400 bg-yellow-400/5',
    termine: 'border-green-400/30 text-green-400 bg-green-400/5',
    en_pause: 'border-orange-400/30 text-orange-400 bg-orange-400/5',
  };
  const statusLabels: Record<string, string> = { en_cours: 'En cours', termine: 'Terminé', en_pause: 'En pause' };

  const diffColors: Record<string, string> = {
    débutant: 'border-green-400/30 text-green-400 bg-green-400/5',
    intermédiaire: 'border-yellow-400/30 text-yellow-400 bg-yellow-400/5',
    avancé: 'border-red-400/30 text-red-400 bg-red-400/5',
  };

  const priorityColors: Record<string, string> = {
    haute: 'border-red-400/30 text-red-400 bg-red-400/5',
    moyenne: 'border-yellow-400/30 text-yellow-400 bg-yellow-400/5',
    basse: 'border-green-400/30 text-green-400 bg-green-400/5',
  };

  const categoryColors: Record<string, string> = {
    amelioration: 'border-blue-400/30 text-blue-400 bg-blue-400/5',
    nouveau_protocole: 'border-purple-400/30 text-purple-400 bg-purple-400/5',
    recherche: 'border-green-400/30 text-green-400 bg-green-400/5',
    experimentation: 'border-yellow-400/30 text-yellow-400 bg-yellow-400/5',
  };

  const handleAddToLab = (item: typeof pistesAmelioration[0]) => {
    addSuggestion({
      id: Date.now().toString(),
      title: item.title,
      description: item.description,
      category: item.category as 'amelioration' | 'nouveau_protocole' | 'recherche' | 'experimentation',
      priority: item.priority as 'haute' | 'moyenne' | 'basse',
      status: 'idee',
      createdAt: new Date().toISOString(),
      notes: '',
    });
  };

  return (
    <div className="section-enter">
      <SectionHeader
        icon={<FlaskConical className="w-8 h-8 text-green-400" />}
        title="Chercheur"
        subtitle="Laboratoire de recherche pour perfectionner la technique"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { icon: <FileText className="w-5 h-5" />, value: notes.length, label: 'Notes de recherche', color: 'text-green-400' },
          { icon: <Beaker className="w-5 h-5" />, value: experiments.filter(e => e.status === 'en_cours').length, label: 'Expériences en cours', color: 'text-yellow-400' },
          { icon: <Brain className="w-5 h-5" />, value: questionsRecherche.filter(q => q.status === 'ouverte').length, label: 'Questions ouvertes', color: 'text-mirror' },
          { icon: <BookOpen className="w-5 h-5" />, value: bibliographieScientifique.length, label: 'Références', color: 'text-purple-400' },
        ].map((stat) => (
          <div key={stat.label} className="glass-card rounded-xl p-4">
            <div className={`${stat.color} mb-2`}>{stat.icon}</div>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <div className="text-xs text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="bg-deep/50 border border-gold/10 flex-wrap h-auto gap-1 p-1">
          <TabsTrigger value="notes" className="data-[state=active]:bg-gold/10 data-[state=active]:text-gold">
            <FileText className="w-4 h-4 mr-1" /> Notes
          </TabsTrigger>
          <TabsTrigger value="experiences" className="data-[state=active]:bg-gold/10 data-[state=active]:text-gold">
            <Beaker className="w-4 h-4 mr-1" /> Expériences
          </TabsTrigger>
          <TabsTrigger value="questions" className="data-[state=active]:bg-gold/10 data-[state=active]:text-gold">
            <Lightbulb className="w-4 h-4 mr-1" /> Questions
          </TabsTrigger>
          <TabsTrigger value="biblio" className="data-[state=active]:bg-gold/10 data-[state=active]:text-gold">
            <BookOpen className="w-4 h-4 mr-1" /> Bibliographie
          </TabsTrigger>
          <TabsTrigger value="exercices" className="data-[state=active]:bg-gold/10 data-[state=active]:text-gold">
            <Target className="w-4 h-4 mr-1" /> Exercices
          </TabsTrigger>
          <TabsTrigger value="labo" className="data-[state=active]:bg-gold/10 data-[state=active]:text-gold">
            <Zap className="w-4 h-4 mr-1" /> Laboratoire
          </TabsTrigger>
          <TabsTrigger value="autoeval" className="data-[state=active]:bg-gold/10 data-[state=active]:text-gold">
            <ClipboardCheck className="w-4 h-4 mr-1" /> Auto-Évaluation
          </TabsTrigger>
          <TabsTrigger value="insights" className="data-[state=active]:bg-gold/10 data-[state=active]:text-gold">
            <Sparkles className="w-4 h-4 mr-1" /> Analyse & Suggestions IA
          </TabsTrigger>
          <TabsTrigger value="protocoles" className="data-[state=active]:bg-gold/10 data-[state=active]:text-gold">
            <Stethoscope className="w-4 h-4 mr-1" /> Protocoles ({therapyProtocols.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="notes">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex gap-2 flex-wrap">
              {['all', 'Technique', 'Neurosciences', 'Spiritualité', 'Clinique'].map(f => (
                <button key={f} onClick={() => setNoteFilter(f)}
                  className={`px-3 py-1 rounded-full text-xs transition-all
                    ${noteFilter === f ? 'bg-gold/20 text-gold border border-gold/40' : 'text-muted-foreground border border-border hover:border-gold/20'}`}>
                  {f === 'all' ? 'Toutes' : f}
                </button>
              ))}
            </div>
            <Button size="sm" onClick={() => setShowNoteForm(!showNoteForm)}
              className="bg-gold/10 text-gold border border-gold/30 hover:bg-gold/20">
              <Plus className="w-4 h-4 mr-1" /> Nouvelle note
            </Button>
          </div>

          {showNoteForm && (
            <Card className="glass-card mb-6">
              <CardContent className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <Input placeholder="Titre de la note" value={newNote.title}
                    onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                    className="bg-deep/50 border-gold/10 focus:border-gold/30" />
                  <Select value={newNote.category} onValueChange={(v) => setNewNote({ ...newNote, category: v })}>
                    <SelectTrigger className="bg-deep/50 border-gold/10">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Technique">Technique</SelectItem>
                      <SelectItem value="Neurosciences">Neurosciences</SelectItem>
                      <SelectItem value="Spiritualité">Spiritualité</SelectItem>
                      <SelectItem value="Clinique">Clinique</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Textarea placeholder="Contenu de la note..." value={newNote.content}
                  onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
                  className="min-h-[100px] bg-deep/50 border-gold/10 focus:border-gold/30 resize-none mb-4" />
                <div className="flex gap-2">
                  <Button size="sm" onClick={handleAddNote}
                    className="bg-gold/10 text-gold border border-gold/30 hover:bg-gold/20">
                    <Save className="w-4 h-4 mr-1" /> Sauvegarder
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => setShowNoteForm(false)}>Annuler</Button>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="space-y-3">
            {filteredNotes.length === 0 ? (
              <div className="glass-card rounded-xl p-8 text-center">
                <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">Aucune note pour le moment.</p>
                <p className="text-xs text-muted-foreground mt-1">Commencez à documenter vos recherches !</p>
              </div>
            ) : (
              filteredNotes.map(note => (
                <Card key={note.id} className="glass-card">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="border-gold/20 text-gold/70 text-xs">{note.category}</Badge>
                        <span className="text-xs text-muted-foreground">
                          {new Date(note.createdAt).toLocaleDateString('fr-FR')}
                        </span>
                      </div>
                      <button onClick={() => deleteNote(note.id)} className="text-muted-foreground hover:text-red-400 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <h4 className="font-serif font-semibold text-foreground mb-1">{note.title}</h4>
                    <p className="text-sm text-muted-foreground">{note.content}</p>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </TabsContent>

        <TabsContent value="experiences">
          <div className="flex justify-end mb-4">
            <Button size="sm" onClick={() => setShowExpForm(!showExpForm)}
              className="bg-gold/10 text-gold border border-gold/30 hover:bg-gold/20">
              <Plus className="w-4 h-4 mr-1" /> Nouvelle expérience
            </Button>
          </div>

          {showExpForm && (
            <Card className="glass-card mb-6">
              <CardContent className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <Input placeholder="Titre de l'expérience" value={newExp.title}
                    onChange={(e) => setNewExp({ ...newExp, title: e.target.value })}
                    className="bg-deep/50 border-gold/10 focus:border-gold/30" />
                  <Select value={newExp.status} onValueChange={(v) => setNewExp({ ...newExp, status: v as 'en_cours' | 'termine' | 'en_pause' })}>
                    <SelectTrigger className="bg-deep/50 border-gold/10">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en_cours">En cours</SelectItem>
                      <SelectItem value="termine">Terminé</SelectItem>
                      <SelectItem value="en_pause">En pause</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Input placeholder="Hypothèse..." value={newExp.hypothesis}
                  onChange={(e) => setNewExp({ ...newExp, hypothesis: e.target.value })}
                  className="bg-deep/50 border-gold/10 focus:border-gold/30 mb-4" />
                <Textarea placeholder="Méthodologie..." value={newExp.methodology}
                  onChange={(e) => setNewExp({ ...newExp, methodology: e.target.value })}
                  className="min-h-[80px] bg-deep/50 border-gold/10 focus:border-gold/30 resize-none mb-4" />
                <div className="flex gap-2">
                  <Button size="sm" onClick={handleAddExperiment}
                    className="bg-gold/10 text-gold border border-gold/30 hover:bg-gold/20">
                    <Save className="w-4 h-4 mr-1" /> Créer
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => setShowExpForm(false)}>Annuler</Button>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="space-y-3">
            {experiments.length === 0 ? (
              <div className="glass-card rounded-xl p-8 text-center">
                <Beaker className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">Aucune expérience enregistrée.</p>
              </div>
            ) : (
              experiments.map(exp => (
                <Card key={exp.id} className="glass-card">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-serif font-semibold text-foreground">{exp.title}</h4>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className={statusColors[exp.status]}>
                          {statusLabels[exp.status]}
                        </Badge>
                        <button onClick={() => deleteExperiment(exp.id)} className="text-muted-foreground hover:text-red-400">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    {exp.hypothesis && <p className="text-sm text-gold/70 mb-1"><strong>Hypothèse :</strong> {exp.hypothesis}</p>}
                    {exp.methodology && <p className="text-sm text-muted-foreground"><strong>Méthodologie :</strong> {exp.methodology}</p>}
                    <p className="text-xs text-muted-foreground mt-2">{new Date(exp.createdAt).toLocaleDateString('fr-FR')}</p>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </TabsContent>

        <TabsContent value="questions">
          <Card className="glass-card mb-6">
            <CardHeader>
              <CardTitle className="text-gold flex items-center gap-2">
                <Lightbulb className="w-5 h-5" /> Questions de Recherche Ouvertes
              </CardTitle>
              <CardDescription>Questions à explorer pour améliorer la technique</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {questionsRecherche.map(q => (
                  <div key={q.id} className="glass-card rounded-lg p-4 flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 shrink-0"
                      style={{ backgroundColor: q.category === 'Neurosciences' ? '#00d4ff' : q.category === 'Clinique' ? '#c9a227' : q.category === 'Spiritualité' ? '#8b5cf6' : '#22c55e' }} />
                    <div className="flex-1">
                      <p className="text-sm text-foreground">{q.question}</p>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="outline" className="border-border text-xs">{q.category}</Badge>
                        <Badge variant="outline" className={
                          q.status === 'ouverte' ? 'border-yellow-400/30 text-yellow-400 text-xs' : 'border-green-400/30 text-green-400 text-xs'
                        }>
                          {q.status === 'ouverte' ? 'Ouverte' : 'En cours'}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="biblio">
          <div className="space-y-3">
            {bibliographieScientifique.map(ref => (
              <Card key={ref.id} className="glass-card">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="border-border text-xs mt-1 shrink-0">{ref.annee}</Badge>
                    <div>
                      <p className="text-sm text-foreground font-medium">{ref.titre}</p>
                      <p className="text-xs text-gold/70">{ref.auteur}</p>
                      <div className="flex gap-2 mt-1">
                        <Badge variant="outline" className="border-gold/20 text-gold/60 text-xs">{ref.categorie}</Badge>
                      </div>
                      {ref.note && <p className="text-xs text-muted-foreground mt-1 italic">{ref.note}</p>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Exercices Tab */}
        <TabsContent value="exercices">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {exercicesPratiques.map((ex) => (
              <Card key={ex.id} className="glass-card">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-serif font-bold text-foreground text-lg">{ex.title}</h3>
                    <Badge variant="outline" className="border-gold/20 text-gold/70 text-xs">{ex.duration}</Badge>
                  </div>
                  <div className="flex gap-2 mb-3">
                    <Badge variant="outline" className={diffColors[ex.difficulty] || 'border-border text-xs'}>
                      {ex.difficulty}
                    </Badge>
                    <Badge variant="outline" className="border-mirror/30 text-mirror text-xs">
                      {ex.domain}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{ex.description}</p>
                  <div className="space-y-2 mb-4">
                    {ex.steps.map((step, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs text-gold font-mono">{i + 1}</span>
                        </div>
                        <p className="text-sm text-foreground/80">{step}</p>
                      </div>
                    ))}
                  </div>
                  <div className="glass-card rounded-lg p-3">
                    <p className="arabic text-lg text-gold/90 mb-1">{ex.verse.arabic}</p>
                    <p className="text-sm text-foreground/80 italic">{ex.verse.french}</p>
                    <p className="text-xs text-muted-foreground">— {ex.verse.reference}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Laboratoire Tab */}
        <TabsContent value="labo">
          <div className="space-y-4">
            {pistesAmelioration.map((item) => (
              <Card key={item.id} className="glass-card">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-serif font-semibold text-foreground">{item.title}</h4>
                    <div className="flex gap-2 shrink-0">
                      <Badge variant="outline" className={categoryColors[item.category] || 'border-border text-xs'}>
                        {item.category.replace(/_/g, ' ')}
                      </Badge>
                      <Badge variant="outline" className={priorityColors[item.priority] || 'border-border text-xs'}>
                        {item.priority}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                  <div className="glass-card rounded-lg p-3 mb-3">
                    <p className="text-xs text-foreground/60"><strong>Impact potentiel :</strong> {item.potentialImpact}</p>
                  </div>
                  <Button size="sm" variant="outline"
                    className="border-mirror/30 text-mirror hover:bg-mirror/10"
                    onClick={() => handleAddToLab(item)}>
                    <Plus className="w-3 h-3 mr-1" /> Ajouter au suivi
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Auto-Évaluation Tab */}
        <TabsContent value="autoeval">
          <div className="flex gap-2 mb-4 flex-wrap">
            {['all', 'Fana', 'Tajalli', 'Munajat', 'Béance', 'Pratique', 'Intégration', 'Recherche'].map(f => (
              <button key={f} onClick={() => setEvalFilter(f)}
                className={`px-3 py-1 rounded-full text-xs transition-all
                  ${evalFilter === f ? 'bg-gold/20 text-gold border border-gold/40' : 'text-muted-foreground border border-border hover:border-gold/20'}`}>
                {f === 'all' ? 'Tous' : f}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {filteredEvals.map((q) => (
              <div key={q.id} className="glass-card rounded-lg p-4 flex items-start gap-3 cursor-pointer"
                onClick={() => {
                  setCheckedEvals(prev => {
                    const next = new Set(prev);
                    if (next.has(q.id)) next.delete(q.id); else next.add(q.id);
                    return next;
                  });
                }}>
                <div className={`w-5 h-5 rounded border shrink-0 mt-0.5 flex items-center justify-center transition-all
                  ${checkedEvals.has(q.id) ? 'bg-gold/20 border-gold/40 text-gold' : 'border-border'}`}>
                  {checkedEvals.has(q.id) && <CheckCircle2 className="w-4 h-4" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground">{q.question}</p>
                  <div className="flex gap-2 mt-1">
                    <Badge variant="outline" className="border-gold/20 text-gold/60 text-xs">{q.domain}</Badge>
                    <Badge variant="outline" className="border-border text-xs">{q.frequency}</Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card rounded-xl p-4 mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Score : <span className="text-gold font-bold">{checkedEvals.size}</span> / {autoEvaluationQuestions.length} critères validés
            </p>
            <Progress value={(checkedEvals.size / autoEvaluationQuestions.length) * 100} className="h-2 mt-2 bg-deep max-w-xs mx-auto" />
          </div>
        </TabsContent>

        <TabsContent value="insights">
          <Card className="glass-card mb-6">
            <CardHeader>
              <CardTitle className="text-gold flex items-center gap-2">
                <Sparkles className="w-5 h-5" /> Suggestions Intelligentes
              </CardTitle>
              <CardDescription>Obtenez des suggestions personnalisées pour améliorer votre pratique basées sur l&apos;analyse de vos données</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3 mb-6">
                <button onClick={() => handleGetInsights('technique')}
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-gold/10 text-gold border border-gold/30 hover:bg-gold/20 transition-all">
                  🎯 Améliorer ma technique
                </button>
                <button onClick={() => handleGetInsights('protocole')}
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-mirror/10 text-mirror border border-mirror/30 hover:bg-mirror/20 transition-all">
                  🏥 Améliorer mes protocoles
                </button>
                <button onClick={() => handleGetInsights('avancee')}
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/30 hover:bg-green-500/20 transition-all">
                  🌙 Pratiques avancées
                </button>
              </div>

              {insightsLoading ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/5 border border-gold/20 flex items-center justify-center animate-pulse">
                    <Sparkles className="w-8 h-8 text-gold/40" />
                  </div>
                  <p className="text-muted-foreground text-sm">Analyse en cours...</p>
                </div>
              ) : insights.length > 0 ? (
                <div className="space-y-4 stagger-children">
                  {insights.map((insight, i) => (
                    <div key={i} className="glass-card rounded-lg p-4 border-l-2 border-gold/40">
                      <p className="text-sm text-foreground/80 leading-relaxed">{insight}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/5 border border-gold/20 flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-gold/40" />
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">Sélectionnez un domaine pour obtenir des suggestions personnalisées</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Protocoles Tab */}
        <TabsContent value="protocoles">
          <Card className="glass-card mb-6">
            <CardHeader>
              <CardTitle className="text-gold flex items-center gap-2">
                <Stethoscope className="w-5 h-5" /> Protocoles Thérapeutiques
              </CardTitle>
              <CardDescription>Tous les protocoles disponibles pour vos séances de thérapie — explorez et testez</CardDescription>
            </CardHeader>
          </Card>
          <ProtocolsLabTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}

// ==================== THERAPIE ====================

function TherapieSection() {
  const [selectedProtocol, setSelectedProtocol] = useState<string | null>(null);
  const [activeTherapyTab, setActiveTherapyTab] = useState('trauma');
  const [sessionNotes, setSessionNotes] = useState('');
  const [showSessionForm, setShowSessionForm] = useState(false);
  const [showSessionRunner, setShowSessionRunner] = useState(false);
  const { sessions, addSession } = useTherapyStore();
  const [newSession, setNewSession] = useState({
    patientInitials: '', preScore: 5, postScore: 5, notes: '', breakthroughs: '', followUp: '',
  });

  const traumaProtocols = therapyProtocols.filter(p => p.category === 'trauma');
  const relationnelProtocols = therapyProtocols.filter(p => p.category === 'relationnel');
  const displayedProtocols = activeTherapyTab === 'trauma' ? traumaProtocols : relationnelProtocols;

  const protocol = selectedProtocol ? therapyProtocols.find(p => p.id === selectedProtocol) : null;
  const protocolSessions = sessions.filter(s => s.protocolId === selectedProtocol);

  const handleSaveSession = () => {
    if (!protocol) return;
    if (!newSession.patientInitials.trim()) return;
    addSession({
      id: Date.now().toString(),
      protocolId: protocol.id,
      protocolTitle: protocol.title,
      patientInitials: newSession.patientInitials.toUpperCase(),
      date: new Date().toISOString(),
      preScore: newSession.preScore,
      postScore: newSession.postScore,
      notes: newSession.notes,
      breakthroughs: newSession.breakthroughs,
      followUp: newSession.followUp,
      completedAt: new Date().toISOString(),
    });
    setNewSession({ patientInitials: '', preScore: 5, postScore: 5, notes: '', breakthroughs: '', followUp: '' });
    setShowSessionForm(false);
  };

  if (protocol) {
    return (
      <div className="section-enter">
        <button onClick={() => setSelectedProtocol(null)}
          className="flex items-center gap-2 text-muted-foreground hover:text-gold mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Retour aux protocoles</span>
        </button>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{protocol.icon}</span>
            <div>
              <Badge variant="outline" className="border-gold/30 text-gold mb-1">
                {protocol.category === 'trauma' ? 'Trauma & Émotions' : 'Relationnel & Existentiel'} — Protocole {protocol.letter}
              </Badge>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-gold-gradient">{protocol.title}</h2>
              <p className="text-muted-foreground">{protocol.subtitle}</p>
            </div>
          </div>

          <p className="text-foreground/80 mb-6 leading-relaxed">{protocol.description}</p>

          <div className="gold-divider mb-6" />

          {/* Session tracking button */}
          <Button onClick={() => setShowSessionForm(!showSessionForm)}
            className="bg-rose-400/10 text-rose-400 border border-rose-400/30 hover:bg-rose-400/20 mb-6">
            <Plus className="w-4 h-4 mr-1" /> Nouvelle Séance
          </Button>
          <Button onClick={() => setShowSessionRunner(true)}
            className="bg-gold/10 text-gold border border-gold/30 hover:bg-gold/20 mb-6 ml-2">
            <Play className="w-4 h-4 mr-1" /> Session Guidée
          </Button>

          {showSessionForm && (
            <Card className="glass-card mb-6 border-rose-400/20">
              <CardHeader>
                <CardTitle className="text-rose-400 flex items-center gap-2">
                  <ClipboardCheck className="w-5 h-5" /> Formulaire de Séance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-muted-foreground mb-1 block">Initiales du patient (2 lettres)</label>
                    <Input
                      placeholder="AB"
                      value={newSession.patientInitials}
                      onChange={(e) => setNewSession({ ...newSession, patientInitials: e.target.value.slice(0, 2) })}
                      className="bg-deep/50 border-gold/10 focus:border-gold/30 max-w-[100px] uppercase"
                      maxLength={2}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-muted-foreground mb-1 flex justify-between">
                        <span>Score initial</span>
                        <span className="text-gold">{newSession.preScore}/10</span>
                      </label>
                      <Slider
                        value={[newSession.preScore]}
                        onValueChange={(v) => setNewSession({ ...newSession, preScore: v[0] })}
                        min={1} max={10} step={1}
                      />
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground mb-1 flex justify-between">
                        <span>Score final</span>
                        <span className="text-gold">{newSession.postScore}/10</span>
                      </label>
                      <Slider
                        value={[newSession.postScore]}
                        onValueChange={(v) => setNewSession({ ...newSession, postScore: v[0] })}
                        min={1} max={10} step={1}
                      />
                    </div>
                  </div>
                </div>
                <Textarea placeholder="Notes de séance..." value={newSession.notes}
                  onChange={(e) => setNewSession({ ...newSession, notes: e.target.value })}
                  className="min-h-[80px] bg-deep/50 border-gold/10 focus:border-gold/30 resize-none" />
                <Textarea placeholder="Prises de conscience / Breakthroughs..." value={newSession.breakthroughs}
                  onChange={(e) => setNewSession({ ...newSession, breakthroughs: e.target.value })}
                  className="min-h-[80px] bg-deep/50 border-gold/10 focus:border-gold/30 resize-none" />
                <Textarea placeholder="Suivi / Follow-up..." value={newSession.followUp}
                  onChange={(e) => setNewSession({ ...newSession, followUp: e.target.value })}
                  className="min-h-[80px] bg-deep/50 border-gold/10 focus:border-gold/30 resize-none" />
                <div className="flex gap-2">
                  <Button size="sm" onClick={handleSaveSession}
                    className="bg-rose-400/10 text-rose-400 border border-rose-400/30 hover:bg-rose-400/20">
                    <Save className="w-4 h-4 mr-1" /> Sauvegarder la séance
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => setShowSessionForm(false)}>Annuler</Button>
                </div>
              </CardContent>
            </Card>
          )}

          {showSessionRunner && protocol && (
            <TherapySessionRunner protocolId={protocol.id} onClose={() => setShowSessionRunner(false)} />
          )}

          {/* Past sessions */}
          {protocolSessions.length > 0 && (
            <Card className="glass-card mb-6">
              <CardHeader>
                <CardTitle className="text-gold flex items-center gap-2">
                  <History className="w-5 h-5" /> Séances précédentes ({protocolSessions.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {protocolSessions.map((s) => (
                    <div key={s.id} className="glass-card rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="border-rose-400/30 text-rose-400 text-xs">{s.patientInitials}</Badge>
                          <span className="text-xs text-muted-foreground">
                            {new Date(s.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <span className={s.postScore > s.preScore ? 'text-green-400' : s.postScore < s.preScore ? 'text-red-400' : 'text-muted-foreground'}>
                            {s.preScore} → {s.postScore}
                          </span>
                        </div>
                      </div>
                      {s.notes && <p className="text-xs text-muted-foreground">{s.notes}</p>}
                      {s.breakthroughs && <p className="text-xs text-gold/70 mt-1">💡 {s.breakthroughs}</p>}
                      {s.followUp && <p className="text-xs text-muted-foreground mt-1">📋 {s.followUp}</p>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          <div className="space-y-4 mb-8">
            {protocol.phases.map((phase, i) => (
              <Card key={i} className="glass-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                      <span className="font-mono text-gold text-sm">{i + 1}</span>
                    </div>
                    <div>
                      <CardTitle className="text-gold text-lg">{phase.name}</CardTitle>
                      <CardDescription className="text-muted-foreground">{phase.duration}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">{phase.description}</p>
                  <div className="space-y-2">
                    {phase.verses.map((v, j) => (
                      <div key={j} className="glass-card rounded-lg p-3">
                        <p className="arabic text-lg text-gold/90 mb-1">{v.arabic}</p>
                        <p className="text-sm text-foreground/80 italic">{v.french}</p>
                        <p className="text-xs text-muted-foreground">— {v.reference}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="glass-card mb-6">
            <CardHeader>
              <CardTitle className="text-mirror flex items-center gap-2">
                <Lightbulb className="w-5 h-5" /> Points clés
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {protocol.keyInsights.map((insight, i) => (
                  <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-mirror mt-0.5 shrink-0" />
                    {insight}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="glass-card mb-6">
            <CardHeader>
              <CardTitle className="text-red-400 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" /> Contre-indications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {protocol.contraindications.map((c, i) => (
                  <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-gold flex items-center gap-2">
                  <Timer className="w-5 h-5" /> Minuteur de séance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <MeditationTimer />
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-gold flex items-center gap-2">
                  <PenLine className="w-5 h-5" /> Notes de séance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={sessionNotes}
                  onChange={(e) => setSessionNotes(e.target.value)}
                  placeholder="Observations pendant la séance..."
                  className="min-h-[180px] bg-deep/50 border-gold/10 focus:border-gold/30 resize-none"
                />
                <Button size="sm" className="mt-2 bg-gold/10 text-gold border border-gold/30 hover:bg-gold/20">
                  <Save className="w-4 h-4 mr-1" /> Sauvegarder
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-card mt-6">
            <CardHeader>
              <CardTitle className="text-gold">Fondements du Tadaburr Thérapeutique</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Régulation émotionnelle', desc: 'Le Tadaburr offre un cadre contenant pour l\'expression des affects tumultueux.', icon: '🌿' },
                  { title: 'Reframing cognitif', desc: 'Le verset fonctionne comme un prisme qui décompose la vision déformée et la recompose.', icon: '🪞' },
                  { title: 'Expression émotionnelle', desc: 'Les versets coraniques modélisent la vulnérabilité spirituelle comme une force.', icon: '💧' },
                  { title: 'Acceptation radicale', desc: 'Le ridā et le tawakkul offrent une voie d\'acceptation sans résignation ni déni.', icon: '🌊' },
                  { title: 'Connexion au sens', desc: 'La souffrance est reconnectée à une dimension de sens qui transcende la symptomatologie.', icon: '✨' },
                ].map((f, i) => (
                  <div key={i} className="glass-card rounded-lg p-4 flex items-start gap-3">
                    <span className="text-xl">{f.icon}</span>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">{f.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="section-enter">
      <SectionHeader
        icon={<Heart className="w-8 h-8 text-rose-400" />}
        title="Thérapie"
        subtitle="15 protocoles de méditation thérapeutique pour accompagner la guérison"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { value: '15', label: 'Protocoles', icon: <Stethoscope className="w-5 h-5" />, color: 'text-rose-400' },
          { value: sessions.length.toString(), label: 'Séances enregistrées', icon: <ClipboardCheck className="w-5 h-5" />, color: 'text-gold' },
          { value: sessions.length > 0 ? Math.round(sessions.reduce((acc, s) => acc + (s.postScore - s.preScore), 0) / sessions.length * 10) / 10 : '0', label: 'Score moyen Δ', icon: <TrendingUp className="w-5 h-5" />, color: 'text-green-400' },
          { value: sessions.filter(s => s.breakthroughs).length.toString(), label: 'Breakthroughs', icon: <Sparkles className="w-5 h-5" />, color: 'text-mirror' },
        ].map((s) => (
          <div key={s.label} className="glass-card rounded-xl p-4 text-center">
            <div className={`${s.color} mb-2 flex justify-center`}>{s.icon}</div>
            <div className="text-2xl font-bold text-foreground">{s.value}</div>
            <div className="text-xs text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Session Analytics */}
      {sessions.length > 0 && (
        <Card className="glass-card mb-6">
          <CardHeader>
            <CardTitle className="text-gold flex items-center gap-2">
              <BarChart3 className="w-5 h-5" /> Analyse de vos Séances
            </CardTitle>
            <CardDescription>Suivi de l'efficacité de vos séances par protocole</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {Array.from(new Set(sessions.map(s => s.protocolId))).map(protocolId => {
                const protocolSessions = sessions.filter(s => s.protocolId === protocolId);
                const protocol = therapyProtocols.find(p => p.id === protocolId);
                const avgDelta = Math.round(protocolSessions.reduce((acc, s) => acc + (s.postScore - s.preScore), 0) / protocolSessions.length * 10) / 10;
                const latestSession = protocolSessions[0];
                return (
                  <div key={protocolId} className="glass-card rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{protocol?.icon || '📋'}</span>
                        <div>
                          <p className="text-sm font-serif font-semibold text-foreground">{protocol?.title || protocolId}</p>
                          <p className="text-xs text-muted-foreground">{protocolSessions.length} séance(s)</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className={avgDelta >= 0 ? 'border-green-400/30 text-green-400' : 'border-red-400/30 text-red-400'}>
                          Δ {avgDelta >= 0 ? '+' : ''}{avgDelta}
                        </Badge>
                      </div>
                    </div>
                    {latestSession.breakthroughs && (
                      <p className="text-xs text-gold/70 mt-1">💡 {latestSession.breakthroughs}</p>
                    )}
                    <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                      <span>Dernière séance: {new Date(latestSession.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}</span>
                      <span>•</span>
                      <span>{latestSession.patientInitials}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex gap-3 mb-6">
        <button onClick={() => setActiveTherapyTab('trauma')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all border
            ${activeTherapyTab === 'trauma' ? 'bg-gold/20 text-gold border-gold/40' : 'text-muted-foreground border-border hover:border-gold/20'}`}>
          Trauma & Émotions ({traumaProtocols.length})
        </button>
        <button onClick={() => setActiveTherapyTab('relationnel')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all border
            ${activeTherapyTab === 'relationnel' ? 'bg-mirror/20 text-mirror border-mirror/40' : 'text-muted-foreground border-border hover:border-mirror/20'}`}>
          Relationnel & Existentiel ({relationnelProtocols.length})
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProtocols.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i + 0.1 }}
            onClick={() => setSelectedProtocol(p.id)}
            className="glass-card rounded-xl p-5 cursor-pointer card-hover border border-transparent hover:border-gold/20 group">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{p.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="outline" className="border-gold/20 text-gold/70 text-xs">Protocole {p.letter}</Badge>
                </div>
                <h3 className="font-serif font-bold text-foreground group-hover:text-gold transition-colors truncate">{p.title}</h3>
                <p className="text-xs text-muted-foreground">{p.subtitle}</p>
              </div>
            </div>
            <p className="text-xs text-foreground/60 line-clamp-2 mb-4">{p.description}</p>
            <div className="flex items-center gap-1 text-sm text-gold/60 group-hover:text-gold transition-colors">
              <span>Voir le protocole</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ==================== NEW COMPONENTS ====================

function DhikrCounter() {
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(33);
  const [selectedFormula, setSelectedFormula] = useState(0);
  const [todayTotal, setTodayTotal] = useState(() => {
    if (typeof window !== 'undefined') {
      const today = new Date().toDateString();
      const saved = localStorage.getItem(`dhikr-${today}`);
      return saved ? parseInt(saved) : 0;
    }
    return 0;
  });
  const [pulseKey, setPulseKey] = useState(0);
  const formulas = [
    { name: 'SubhanAllah', arabic: 'سُبْحَانَ اللَّهِ' },
    { name: 'Alhamdulillah', arabic: 'الْحَمْدُ لِلَّهِ' },
    { name: 'Allahu Akbar', arabic: 'اللَّهُ أَكْبَرُ' },
    { name: 'La ilaha illa Allah', arabic: 'لَا إِلَٰهَ إِلَّا اللَّهُ' },
    { name: 'Astaghfirullah', arabic: 'أَسْتَغْفِرُ اللَّهَ' },
  ];
  const targets = [33, 99, 100, 1000];
  
  // Persist today total to localStorage
  useEffect(() => {
    const today = new Date().toDateString();
    localStorage.setItem(`dhikr-${today}`, String(todayTotal));
  }, [todayTotal]);

  const increment = () => {
    setCount(c => c + 1);
    setTodayTotal(t => t + 1);
    setPulseKey(k => k + 1);
  };
  
  const resetCount = () => setCount(0);
  const resetAll = () => { setCount(0); setTodayTotal(0); };
  const progress = target > 0 ? Math.min((count / target) * 100, 100) : 0;
  
  return (
    <Card className="glass-card ornamental-corners">
      <CardHeader>
        <CardTitle className="text-gold flex items-center gap-2">
          <Sparkles className="w-5 h-5" /> Compteur de Dhikr
        </CardTitle>
        <CardDescription>Votre rappel quotidien — le cœur se purifie par le dhikr</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Formula selector */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {formulas.map((f, i) => (
            <button key={i} onClick={() => { setSelectedFormula(i); setCount(0); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${selectedFormula === i ? 'bg-gold/15 text-gold border border-gold/30' : 'text-muted-foreground border border-border hover:border-gold/20 hover:text-foreground'}`}>
              <span className="block text-[10px]">{f.arabic}</span>
              <span className="block">{f.name}</span>
            </button>
          ))}
        </div>
        
        {/* Target selector */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs text-muted-foreground">Objectif :</span>
          {targets.map(t => (
            <button key={t} onClick={() => setTarget(t)}
              className={`px-2.5 py-1 rounded-full text-xs font-mono transition-all ${target === t ? 'bg-gold/15 text-gold border border-gold/40' : 'text-muted-foreground border border-border hover:text-foreground'}`}>
              {t}
            </button>
          ))}
        </div>
        
        {/* Counter display */}
        <div className="text-center mb-4">
          <motion.div
            key={pulseKey}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className="w-32 h-32 mx-auto rounded-full border-2 border-gold/30 flex items-center justify-center bg-deep/50 relative overflow-hidden cursor-pointer"
            onClick={increment}>
            {count > 0 && (
              <div className="absolute bottom-0 left-0 right-0 bg-gold/10 transition-all duration-300" style={{ height: `${progress}%` }} />
            )}
            <span className="text-4xl font-mono text-gold relative z-10">{count}</span>
          </motion.div>
          <p className="text-xs text-muted-foreground mt-2">{Math.round(progress)}% de l'objectif</p>
        </div>
        
        {/* Progress bar */}
        <div className="h-1.5 bg-deep rounded-full mb-4 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-gold/60 to-gold rounded-full transition-all duration-300 session-progress-glow" style={{ width: `${progress}%` }} />
        </div>
        
        {/* Controls */}
        <div className="flex items-center justify-between">
          <Button onClick={increment} size="sm" className="bg-gold/10 text-gold border border-gold/30 hover:bg-gold/20 min-w-[100px]">
            <Plus className="w-4 h-4 mr-1" /> Compter
          </Button>
          <div className="flex gap-2">
            <Button onClick={resetCount} size="sm" variant="ghost" className="text-muted-foreground">
              <RotateCcw className="w-4 h-4" />
            </Button>
            <Button onClick={resetAll} size="sm" variant="ghost" className="text-muted-foreground text-xs">
              Tout
            </Button>
          </div>
        </div>
        
        {/* Today total */}
        <div className="mt-4 text-center">
          <p className="text-xs text-muted-foreground">Total aujourd'hui : <span className="text-gold font-mono">{todayTotal}</span></p>
        </div>
      </CardContent>
    </Card>
  );
}

function IstikharaGuide() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showGuide, setShowGuide] = useState(false);
  
  const steps = [
    {
      title: 'Préparation — Les Ablutions',
      description: 'Effectuez vos ablutions (wudu) avec conscience. Chaque goutte d\'eau qui coule sur vos membres est une purification intérieure.',
      verse: { arabic: 'إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِينَ', french: 'Allah aime ceux qui se repentent et ceux qui se purifient.', reference: 'Coran 2:222' },
      duration: '5 min',
      action: 'Prenez le temps de vous laver avec intention (niyyah) de vous purifier pour rencontrer votre Seigneur.',
    },
    {
      title: 'Prière de deux rak\'ahs',
      description: 'Priez deux rak\'ahs avec sincérité et concentration. L\'istikhara est une prière complète comme toute autre prière. Formulez votre intention (niyyah) d\'accomplir la prière de consultation.',
      verse: { arabic: 'وَقُل رَّبِّ زِدْنِي عِلْمًا', french: 'Et dis : Ô mon Seigneur, accrois mes connaissances.', reference: 'Coran 20:114' },
      duration: '10 min',
      action: 'Après la salutation finale, récitez la dou\'a complète de l\'istikhara enseignée par le Prophète ﷺ.',
    },
    {
      title: 'La Dou\'a de l\'Istikhara (complète)',
      description: 'Récitez la supplication complète enseignée par le Prophète ﷺ (Sahih al-Bukhari 6382) avec le cœur présent et l\'esprit clair. Formulez votre question avant de commencer.',
      verse: { arabic: istikharaCompleteDuas.arabe, french: istikharaCompleteDuas.french, reference: 'Hadith — Sahih al-Bukhari 6382' },
      duration: '5 min',
      action: 'Récitez lentement, en ressentant chaque mot. Remplacez "cette affaire" (هَذَا الْأَمْرَ) par votre décision précise.',
      extraContent: istikharaCompleteDuas.description,
    },
    {
      title: 'L\'Attente dans le Silence',
      description: 'Après la prière, restez dans l\'attente paisible. La réponse vient souvent dans les rêves, dans l\'inclination du cœur (inclinatio), ou dans les circonstances qui s\'ouvrent devant vous.',
      verse: { arabic: 'وَرَبُّكَ يَخْلُقُ مَا يَشَاءُ وَيَخْتَارُ', french: 'Et ton Seigneur crée ce qu\'Il veut et choisit.', reference: 'Coran 28:68' },
      duration: 'Silence paisible',
      action: 'Ne forcez pas la décision. Observez les signes qui se présentent à vous dans les jours suivants. L\'inclination du cœur est un signe clé.',
    },
  ];
  
  if (!showGuide) {
    return (
      <Card className="glass-card ornamental-corners cursor-pointer group" onClick={() => setShowGuide(true)}>
        <CardContent className="p-6 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold/5 border border-gold/20 flex items-center justify-center group-hover:border-gold/40 transition-all">
            <span className="text-3xl">🧭</span>
          </div>
          <h3 className="text-lg font-serif font-bold text-gold mb-2">Prière de l'Istikhara</h3>
          <p className="text-sm text-muted-foreground mb-3">Guide pas-à-pas de la consultation divine pour vos décisions</p>
          <div className="flex items-center justify-center gap-1 text-sm text-gold/60 group-hover:text-gold transition-colors">
            <span>Commencer la guide</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className="glass-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-gold flex items-center gap-2">
            <span className="text-xl">🧭</span> Prière de l'Istikhara
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={() => { setShowGuide(false); setCurrentStep(0); }} className="text-muted-foreground">
            <ArrowLeft className="w-4 h-4 mr-1" /> Retour
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-6">
          {steps.map((_, i) => (
            <div key={i} className={`w-8 h-1.5 rounded-full transition-all ${i <= currentStep ? 'bg-gold' : 'bg-deep border border-gold/20'}`} />
          ))}
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <div className="text-center mb-4">
              <Badge variant="outline" className="border-gold/30 text-gold mb-2">
                Étape {currentStep + 1}/{steps.length}
              </Badge>
              <h3 className="text-xl font-serif font-bold text-foreground">{steps[currentStep].title}</h3>
            </div>
            
            <div className="glass-card rounded-lg p-4 mb-4 text-center">
              <p className="arabic text-xl text-gold/90 mb-3 leading-[2]">{steps[currentStep].verse.arabic}</p>
              <div className="gold-divider max-w-xs mx-auto my-3" />
              <p className="text-sm text-foreground/80 italic">{steps[currentStep].verse.french}</p>
              <p className="text-xs text-gold/60 mt-1">— {steps[currentStep].verse.reference}</p>
            </div>
            
            <p className="text-sm text-foreground/70 mb-3 leading-relaxed">{steps[currentStep].description}</p>
            
            <div className="bg-gold/5 border border-gold/15 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-gold" />
                <span className="text-xs text-gold font-medium">Action</span>
              </div>
              <p className="text-sm text-foreground/70">{steps[currentStep].action}</p>
            </div>
            
            <div className="flex items-center justify-between">
              <Button variant="ghost" size="sm" onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0} className="text-muted-foreground">
                <ChevronLeft className="w-4 h-4 mr-1" /> Précédent
              </Button>
              <span className="text-xs text-muted-foreground">{steps[currentStep].duration}</span>
              {currentStep < steps.length - 1 ? (
                <Button size="sm" onClick={() => setCurrentStep(currentStep + 1)}
                  className="bg-gold/10 text-gold border border-gold/30 hover:bg-gold/20">
                  Suivant <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              ) : (
                <Button size="sm" onClick={() => { setCurrentStep(0); setShowGuide(false); }}
                  className="bg-green-500/10 text-green-400 border border-green-500/30 hover:bg-green-500/20">
                  <CheckCircle2 className="w-4 h-4 mr-1" /> Terminé
                </Button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}

function TherapySessionRunner({ protocolId, onClose }: { protocolId: string; onClose: () => void }) {
  const protocol = therapyProtocols.find(p => p.id === protocolId);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [sessionNotes, setSessionNotes] = useState('');
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { addSession } = useTherapyStore();
  const isRunningRef = useRef(false);

  const phaseDurations = [300, 300, 300, 180]; // Fana 5min, Tajalli 5min, Munajat 5min, Béance 3min

  // Sync running ref
  useEffect(() => { isRunningRef.current = isRunning; }, [isRunning]);

  const [timeLeft, setTimeLeft] = useState(phaseDurations[0] || 300);

  // Derived: reset timeLeft when phase changes and not running
  const effectiveTimeLeft = isRunning ? timeLeft : (phaseDurations[currentPhase] || 300);

  const handlePhaseTransition = () => {
    if (protocol && currentPhase < protocol.phases.length - 1) {
      setCurrentPhase(p => p + 1);
      setIsRunning(false);
    } else {
      setIsComplete(true);
      setIsRunning(false);
    }
  };

  const handleTick = () => {
    setTimeLeft(t => {
      if (t <= 1) {
        handlePhaseTransition();
        return 0;
      }
      return t - 1;
    });
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(handleTick, 1000);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isRunning]);

  if (!protocol) return null;
  if (isComplete) {
    return (
      <Card className="glass-card border-green-500/20">
        <CardContent className="p-8 text-center">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-green-400" />
          </div>
          <h3 className="text-xl font-serif font-bold text-green-400 mb-2">Séance Complète</h3>
          <p className="text-sm text-foreground/70 mb-6">Vous avez terminé les 4 phases de la méditation coranique.</p>
          <Textarea placeholder="Notes de séance..." value={sessionNotes}
            onChange={(e) => setSessionNotes(e.target.value)}
            className="min-h-[100px] bg-deep/50 border-gold/10 focus:border-gold/30 resize-none mb-4" />
          <div className="flex justify-center gap-2">
            <Button onClick={onClose} variant="ghost" size="sm">Fermer</Button>
            <Button onClick={() => {
              addSession({
                id: Date.now().toString(),
                protocolId: protocol.id, protocolTitle: protocol.title,
                patientInitials: 'ME', date: new Date().toISOString(),
                preScore: 5, postScore: 5, notes: sessionNotes,
                breakthroughs: '', followUp: '', completedAt: new Date().toISOString(),
              });
              onClose();
            }} size="sm" className="bg-green-500/10 text-green-400 border border-green-500/30 hover:bg-green-500/20">
              <Save className="w-4 h-4 mr-1" /> Sauvegarder
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const phase = protocol.phases[currentPhase];
  const progressPercent = ((currentPhase * (phaseDurations[currentPhase] || 300) + ((phaseDurations[currentPhase] || 300) - effectiveTimeLeft)) / phaseDurations.reduce((a, b) => a + b, 0) * 100);

  return (
    <Card className={`glass-card ${isRunning ? 'border-gold/30 gold-glow' : ''}`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-gold flex items-center gap-2">
              <Timer className="w-5 h-5" /> Session Guidée
            </CardTitle>
            <CardDescription>{protocol.title} — {protocol.subtitle}</CardDescription>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="text-muted-foreground">
            <X className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {/* Overall progress */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-muted-foreground mb-1">
            <span>Progression globale</span>
            <span>{Math.round(progressPercent)}%</span>
          </div>
          <div className="h-1.5 bg-deep rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-gold to-mirror rounded-full transition-all duration-1000" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>
        
        {/* Phase indicators */}
        <div className="flex gap-1 mb-6">
          {protocol.phases.map((p, i) => (
            <div key={i} className={`flex-1 h-1 rounded-full transition-all ${i < currentPhase ? 'bg-gold' : i === currentPhase ? 'bg-gold animate-pulse' : 'bg-deep border border-gold/10'}`} />
          ))}
        </div>
        
        {/* Current phase */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 mb-3">
            <span className="text-xs text-gold font-medium">Phase {currentPhase + 1}/4</span>
          </div>
          <h3 className="text-lg font-serif font-bold text-foreground mb-1">{phase.name}</h3>
          <p className="text-sm text-foreground/70">{phase.description}</p>
        </div>
        
        {/* Timer */}
        <div className="text-center mb-4">
          <div className={`w-28 h-28 mx-auto rounded-full border-2 ${isRunning ? 'border-gold/40 breathe' : 'border-gold/20'} flex items-center justify-center bg-deep/50 mb-2`}>
            <span className="text-3xl font-mono text-gold">{Math.floor(effectiveTimeLeft / 60)}:{(effectiveTimeLeft % 60).toString().padStart(2, '0')}</span>
          </div>
        </div>
        
        {/* Verses for this phase */}
        <div className="space-y-2 mb-4">
          {phase.verses.map((v, j) => (
            <div key={j} className="glass-card rounded-lg p-3 text-center serene-fade">
              <p className="arabic text-lg text-gold/90 mb-1">{v.arabic}</p>
              <p className="text-xs text-foreground/70 italic">{v.french}</p>
            </div>
          ))}
        </div>
        
        {/* Controls */}
        <div className="flex justify-center gap-3">
          <Button onClick={() => setIsRunning(!isRunning)} size="sm"
            className={`border-gold/30 hover:bg-gold/10 text-gold ${isRunning ? 'bg-gold/10' : ''}`}>
            {isRunning ? <Pause className="w-4 h-4 mr-1" /> : <Play className="w-4 h-4 mr-1" />}
            {isRunning ? 'Pause' : 'Démarrer'}
          </Button>
          <Button onClick={() => {
            setIsRunning(false);
          }} size="sm" variant="ghost" className="text-muted-foreground">
            <RotateCcw className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// ==================== MAIN ====================

export default function HomePage() {
  const { activeSection } = useNavigationStore();

  return (
    <div className="min-h-screen flex bg-background">
      <Sidebar />
      <main className="flex-1 lg:ml-64 p-6 md:p-10">
        <AnimatePresence mode="wait">
          {activeSection === 'accueil' && <AccueilSection key="accueil" />}
          {activeSection === 'bibliotheque' && <BibliothequeSection key="bibliotheque" />}
          {activeSection === 'miroir' && <MiroirSection key="miroir" />}
          {activeSection === 'chercheur' && <ChercheurSection key="chercheur" />}
          {activeSection === 'therapie' && <TherapieSection key="therapie" />}
        </AnimatePresence>
      </main>
    </div>
  );
}
