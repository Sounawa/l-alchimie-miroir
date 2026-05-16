'use client';

import React, { useMemo } from 'react';
import { BookOpen, Clock, ChevronLeft, ChevronRight, CheckCircle2, Circle, PenLine, Timer, Sparkles, AlertTriangle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';

/* ================================================================
   TYPES
   ================================================================ */
interface BookChapter {
  id: string;
  number: number;
  title: string;
  content: string;
}

interface Book {
  id: string;
  level: number;
  title: string;
  subtitle: string;
  description: string;
  inspiration: string;
  chapters: BookChapter[];
}

interface BookReaderProps {
  book: Book;
  chapterId: string;
  readingProgress: Record<string, Record<string, boolean>>;
  journalEntries: Record<string, string>;
  onBack: () => void;
  onChapterChange: (chapterId: string) => void;
  onToggleComplete: (bookId: string, chapterId: string) => void;
  onJournalEntry: (key: string, value: string) => void;
}

/* ================================================================
   INLINE PARSER — handles **bold**, *italic*, `code`
   ================================================================ */
function parseInline(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  // Split on **bold**, then on *italic*, then on `code`
  const boldParts = text.split(/(\*\*[^*]+\*\*)/g);
  boldParts.forEach((bp, bi) => {
    if (bp.startsWith('**') && bp.endsWith('**')) {
      parts.push(<strong key={`b${bi}`} className="book-strong">{bp.slice(2, -2)}</strong>);
    } else {
      const italicParts = bp.split(/(\*[^*]+\*)/g);
      italicParts.forEach((ip, ii) => {
        if (ip.startsWith('*') && ip.endsWith('*') && !ip.startsWith('**')) {
          parts.push(<em key={`i${bi}_${ii}`} className="book-em">{ip.slice(1, -1)}</em>);
        } else if (ip) {
          // Split plain text on backtick `code`
          const codeParts = ip.split(/(`[^`]+`)/g);
          codeParts.forEach((cp, ci) => {
            if (cp.startsWith('`') && cp.endsWith('`')) {
              parts.push(
                <code key={`c${bi}_${ii}_${ci}`} className="px-1.5 py-0.5 rounded bg-gold/10 text-gold/90 text-sm font-mono">
                  {cp.slice(1, -1)}
                </code>
              );
            } else if (cp) {
              parts.push(<span key={`t${bi}_${ii}_${ci}`}>{cp}</span>);
            }
          });
        }
      });
    }
  });
  return parts;
}

/* ================================================================
   BLOCK PARSER — converts markdown lines to styled React blocks
   ================================================================ */
interface ParsedBlock {
  type: 'h2' | 'h3' | 'verse' | 'citation' | 'exercise' | 'prayer' | 'warning' | 'journal' | 'ul' | 'ol' | 'table' | 'paragraph' | 'ornament' | 'divider';
  content: string[];
  raw?: string;
}

function parseBlocks(content: string): ParsedBlock[] {
  const lines = content.split('\n');
  const blocks: ParsedBlock[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Empty line
    if (trimmed === '') {
      i++;
      continue;
    }

    // H2 heading
    if (trimmed.startsWith('## ')) {
      blocks.push({ type: 'h2', content: [trimmed.slice(3)] });
      i++;
      continue;
    }

    // H3 heading
    if (trimmed.startsWith('### ')) {
      blocks.push({ type: 'h3', content: [trimmed.slice(4)] });
      i++;
      continue;
    }

    // Table: collect all consecutive table rows
    if (trimmed.startsWith('|')) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        const tl = lines[i].trim();
        // Skip separator lines (|---|---|)
        if (!/^\|[\s\-:|]+\|$/.test(tl)) {
          tableLines.push(tl);
        }
        i++;
      }
      if (tableLines.length > 0) {
        blocks.push({ type: 'table', content: tableLines });
      }
      continue;
    }

    // Blockquote — classify type
    if (trimmed.startsWith('> ')) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('> ')) {
        quoteLines.push(lines[i].trim().slice(2));
        i++;
      }
      const text = quoteLines.join('\n').toLowerCase();

      // Quranic verse: contains sourate/coran/verset or starts with ﴿
      if (text.includes('sourate') || text.includes('coran') || text.includes('verset') || text.includes('chapitre') || text.includes('qui est') || quoteLines[0]?.includes('﴿')) {
        blocks.push({ type: 'verse', content: quoteLines });
      }
      // Exercise: contains exercise/pratique/étape/technique
      else if (text.includes('exercice') || text.includes('pratique') || text.includes('étape') || text.includes('technique') || text.includes('guide') || trimmed.startsWith('> **Étape') || trimmed.startsWith('> **Exercice')) {
        blocks.push({ type: 'exercise', content: quoteLines });
      }
      // Prayer: contains munajat/invocation/prière/du\'a/seigneur
      else if (text.includes('munajat') || text.includes('invocation') || text.includes('prière') || text.includes('du\'') || text.includes('seigneur') || text.includes('allah') || text.includes('mon dieu') || trimmed.startsWith('> **Munajat') || trimmed.startsWith('> **Invocation')) {
        blocks.push({ type: 'prayer', content: quoteLines });
      }
      // Journal/reflection prompt
      else if (text.includes('journal') || text.includes('réflexion') || text.includes('observe') || text.includes('note') || trimmed.startsWith('> **Journal') || trimmed.startsWith('> **Réflexion')) {
        blocks.push({ type: 'journal', content: quoteLines });
      }
      // Warning
      else if (text.includes('attention') || text.includes('important') || text.includes('prudence') || trimmed.startsWith('> **Attention') || trimmed.startsWith('> **Important')) {
        blocks.push({ type: 'warning', content: quoteLines });
      }
      // Default: scholarly citation
      else {
        blocks.push({ type: 'citation', content: quoteLines });
      }
      continue;
    }

    // Unordered list: collect consecutive - items
    if (trimmed.startsWith('- ')) {
      const listLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        listLines.push(lines[i].trim().slice(2));
        i++;
      }
      blocks.push({ type: 'ul', content: listLines });
      continue;
    }

    // Ordered list: collect consecutive numbered items
    if (/^\d+\.\s/.test(trimmed)) {
      const listLines: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        listLines.push(lines[i].trim().replace(/^\d+\.\s/, ''));
        i++;
      }
      blocks.push({ type: 'ol', content: listLines });
      continue;
    }

    // Ornamental separator line (---)
    if (/^-{3,}$/.test(trimmed) || /^\*{3,}$/.test(trimmed)) {
      blocks.push({ type: 'ornament', content: [] });
      i++;
      continue;
    }

    // Default paragraph — collect consecutive non-empty non-special lines
    const paraLines: string[] = [];
    while (i < lines.length) {
      const l = lines[i].trim();
      if (l === '' || l.startsWith('##') || l.startsWith('###') || l.startsWith('|') || l.startsWith('> ') || l.startsWith('- ') || /^\d+\.\s/.test(l) || /^-{3,}$/.test(l)) break;
      paraLines.push(lines[i]);
      i++;
    }
    if (paraLines.length > 0) {
      blocks.push({ type: 'paragraph', content: paraLines });
    }
  }

  return blocks;
}

/* ================================================================
   BLOCK RENDERER
   ================================================================ */
function RenderBlock({ block, isFirstParagraph }: { block: ParsedBlock; isFirstParagraph: boolean }) {
  switch (block.type) {
    case 'h2':
      return (
        <div className="mt-10 mb-2">
          <h2 className="book-h2">{parseInline(block.content[0])}</h2>
          <div className="book-ornament"><span>✦</span></div>
        </div>
      );

    case 'h3':
      return <h3 className="book-h3">{parseInline(block.content[0])}</h3>;

    case 'verse':
      return (
        <div className="book-verse verse-glow">
          {block.content.map((line, i) => (
            <p key={i} className="my-1">{parseInline(line)}</p>
          ))}
        </div>
      );

    case 'citation':
      return (
        <div className="book-citation">
          {block.content.map((line, i) => {
            // Last line might be the author attribution
            const isAuthor = i === block.content.length - 1 && (
              line.startsWith('—') || line.startsWith('-') || line.startsWith('–')
            );
            if (isAuthor) {
              return <span key={i} className="citation-author">{parseInline(line.replace(/^[—\-\–]\s*/, ''))}</span>;
            }
            return <p key={i} className="my-1">{parseInline(line)}</p>;
          })}
        </div>
      );

    case 'exercise':
      return (
        <div className="book-exercise">
          <div className="exercise-title">
            <Sparkles className="w-4 h-4" />
            Exercice Pratique
          </div>
          {block.content.map((line, i) => (
            <p key={i} className="my-1 text-foreground/80">{parseInline(line)}</p>
          ))}
        </div>
      );

    case 'prayer':
      return (
        <div className="book-prayer">
          <div className="prayer-label">Munajat — Invocation Intime</div>
          {block.content.map((line, i) => (
            <p key={i} className="my-1 italic text-foreground/85">{parseInline(line)}</p>
          ))}
        </div>
      );

    case 'warning':
      return (
        <div className="book-warning">
          <div className="flex items-center gap-2 mb-2 text-red-400/80 text-sm font-semibold">
            <AlertTriangle className="w-4 h-4" />
            Important
          </div>
          {block.content.map((line, i) => (
            <p key={i} className="my-1">{parseInline(line)}</p>
          ))}
        </div>
      );

    case 'journal':
      return (
        <div className="book-journal-prompt">
          <div className="journal-label">
            <PenLine className="w-3.5 h-3.5" />
            Journal de Réflexion
          </div>
          {block.content.map((line, i) => (
            <p key={i} className="my-1 text-foreground/75 italic">{parseInline(line)}</p>
          ))}
        </div>
      );

    case 'ul':
      return (
        <ul className="book-ul">
          {block.content.map((line, i) => (
            <li key={i}>{parseInline(line)}</li>
          ))}
        </ul>
      );

    case 'ol':
      return (
        <ol className="book-ol">
          {block.content.map((line, i) => (
            <li key={i}>{parseInline(line)}</li>
          ))}
        </ol>
      );

    case 'table':
      return <RenderTable rows={block.content} />;

    case 'ornament':
      return (
        <div className="book-ornament">
          <span>✦</span>
        </div>
      );

    case 'paragraph': {
      const text = block.content.map(l => l.trim()).filter(Boolean).join(' ');
      const isDropcap = isFirstParagraph && block === block; // only first block

      return (
        <p className={`my-3 ${isFirstParagraph ? 'book-dropcap' : ''}`}>
          {parseInline(text)}
        </p>
      );
    }

    default:
      return null;
  }
}

/* ================================================================
   TABLE RENDERER
   ================================================================ */
function RenderTable({ rows }: { rows: string[] }) {
  const parsedRows = rows.map(row =>
    row.split('|').map(cell => cell.trim()).filter(Boolean)
  );

  if (parsedRows.length === 0) return null;

  const headers = parsedRows[0];
  const body = parsedRows.slice(1);

  return (
    <div className="book-table-wrapper">
      <table className="book-table">
        <thead>
          <tr>
            {headers.map((h, i) => <th key={i}>{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {body.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => <td key={j}>{parseInline(cell)}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ================================================================
   MEDITATION TIMER (inline component)
   ================================================================ */
function MeditationTimer() {
  const [time, setTime] = React.useState(0);
  const [running, setRunning] = React.useState(false);

  React.useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, [running]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="flex items-center gap-4">
      <div className="text-3xl font-mono text-gold/80 tabular-nums">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setRunning(!running)}
          className="px-4 py-2 rounded-lg bg-gold/10 border border-gold/20 text-gold hover:bg-gold/20 transition-colors text-sm"
        >
          {running ? 'Pause' : time > 0 ? 'Reprendre' : 'Démarrer'}
        </button>
        {time > 0 && (
          <button
            onClick={() => { setRunning(false); setTime(0); }}
            className="px-4 py-2 rounded-lg bg-deep/50 border border-gold/10 text-muted-foreground hover:text-gold transition-colors text-sm"
          >
            Réinitialiser
          </button>
        )}
      </div>
    </div>
  );
}

/* ================================================================
   ESTIMATED READING TIME
   ================================================================ */
function estimateReadingTime(content: string): string {
  const words = content.split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 220));
  return `${minutes} min de lecture`;
}

/* ================================================================
   MAIN BOOK READER COMPONENT
   ================================================================ */
export function BookReader({
  book,
  chapterId,
  readingProgress,
  journalEntries,
  onBack,
  onChapterChange,
  onToggleComplete,
  onJournalEntry,
}: BookReaderProps) {
  const chapter = book.chapters.find(c => c.id === chapterId);
  const chapterIndex = book.chapters.findIndex(c => c.id === chapterId);
  const prevChapter = chapterIndex > 0 ? book.chapters[chapterIndex - 1] : null;
  const nextChapter = chapterIndex < book.chapters.length - 1 ? book.chapters[chapterIndex + 1] : null;

  const isComplete = readingProgress[book.id]?.[chapter.id] || false;
  const isClientBook = book.level === 0;
  const journalKey = `journal-${book.id}-${chapter.id}`;

  // Parse content into blocks
  const blocks = useMemo(() => {
    if (!chapter) return [];
    return parseBlocks(chapter.content);
  }, [chapter]);

  if (!chapter) return null;

  const readingTime = estimateReadingTime(chapter.content);

  // Progress percentage within the book
  const bookProgress = Math.round(((chapterIndex + 1) / book.chapters.length) * 100);

  return (
    <div className="section-enter book-scroll min-h-screen">
      {/* Reading progress bar */}
      <div
        className="reading-progress-bar"
        style={{ width: `${bookProgress}%` }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-20">
        {/* Header */}
        <div className="flex items-center gap-2 mb-8 pt-2">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors text-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            Chapitres
          </button>
          <div className="flex-1" />
          <button
            onClick={() => onToggleComplete(book.id, chapter.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all text-sm ${
              isComplete
                ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                : 'bg-deep/50 text-muted-foreground border border-gold/10 hover:border-gold/20 hover:text-gold'
            }`}
          >
            {isComplete ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
            {isComplete ? 'Terminé' : 'Marquer lu'}
          </button>
        </div>

        {/* Chapter Meta */}
        <div className="mb-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Badge
              variant="outline"
              className={
                isClientBook
                  ? 'border-purple-400/30 text-purple-400 text-xs'
                  : 'border-gold/30 text-gold text-xs'
              }
            >
              {isClientBook ? 'Tadabur' : `Niveau ${book.level}`}
            </Badge>
            <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
              <Clock className="w-3.5 h-3.5" />
              <span>{readingTime}</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Chapitre {chapter.number} / {book.chapters.length}</span>
            </div>
          </div>

          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-gold/25 mb-4">
            <span className="font-serif font-bold text-gold text-lg">{chapter.number}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground leading-tight mb-3">
            {chapter.title}
          </h1>

          <p className="text-sm text-gold/50 font-serif italic">
            {book.title}
          </p>
        </div>

        {/* Gold divider */}
        <div className="gold-divider mb-8" />

        {/* Chapter content */}
        <div className="book-reader-body mb-12">
          {blocks.map((block, i) => (
            <RenderBlock
              key={i}
              block={block}
              isFirstParagraph={i === 0 && block.type === 'paragraph'}
            />
          ))}
        </div>

        {/* Gold divider */}
        <div className="gold-divider mb-8" />

        {/* Chapter Navigation */}
        <div className="chapter-nav">
          {prevChapter ? (
            <button
              onClick={() => onChapterChange(prevChapter.id)}
              className="chapter-nav-btn"
            >
              <ChevronLeft className="w-4 h-4" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Chapitre précédent</div>
                <div className="text-sm">{prevChapter.title}</div>
              </div>
            </button>
          ) : <div />}

          {nextChapter ? (
            <button
              onClick={() => onChapterChange(nextChapter.id)}
              className="chapter-nav-btn"
            >
              <div className="text-right">
                <div className="text-xs text-muted-foreground">Chapitre suivant</div>
                <div className="text-sm">{nextChapter.title}</div>
              </div>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onBack}
              className="chapter-nav-btn"
            >
              <div className="text-right">
                <div className="text-xs text-muted-foreground">Fin du livre</div>
                <div className="text-sm">Retour aux chapitres</div>
              </div>
              <BookOpen className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Journal de pratique */}
        <div className="ornate-card rounded-xl overflow-hidden mt-10">
          <div className="p-6">
            <div className="flex items-center gap-2 mb-1">
              <PenLine className="w-5 h-5 text-gold" />
              <h3 className="text-lg font-serif font-semibold text-foreground">
                Journal de pratique
              </h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Vos observations et réflexions après ce chapitre
            </p>
            <Textarea
              value={journalEntries[journalKey] || ''}
              onChange={(e) => onJournalEntry(journalKey, e.target.value)}
              placeholder="Ce que ce chapitre m'a révélé..."
              className="min-h-[140px] bg-deep/50 border-gold/10 focus:border-gold/30 resize-none text-foreground/80"
            />
          </div>
        </div>

        {/* Minuteur de méditation */}
        <div className="ornate-card rounded-xl overflow-hidden mt-6">
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Timer className="w-5 h-5 text-gold" />
              <h3 className="text-lg font-serif font-semibold text-foreground">
                Minuteur de méditation
              </h3>
            </div>
            <MeditationTimer />
          </div>
        </div>
      </div>
    </div>
  );
}
