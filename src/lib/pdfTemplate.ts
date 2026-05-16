/**
 * PDF Template Generator for L'Alchimie du Miroir
 * PREMIUM EDITION - Refined typography, spacing, and layout
 *
 * Design principles:
 * - Generous margins (25mm) for breathing room
 * - Body text 10.5pt with 1.65 line-height (editorial standard)
 * - Playfair Display for headings, Crimson Pro for body (luxurious pairing)
 * - Gold accents on cream parchment
 * - No text-indent: modern paragraph spacing with 5pt gap
 * - Orphans/widows control for professional breaks
 * - Colophon page at the end
 */

export interface BookPdfData {
  title: string;
  subtitle: string;
  inspiration: string;
  chapters: { title: string; content: string }[];
}

/**
 * Parse markdown-like content into styled HTML blocks.
 */
function parseContent(raw: string): string {
  const lines = raw.split('\n');
  const blocks: string[] = [];
  let i = 0;
  let isFirstParagraph = true;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed === '') {
      i++;
      continue;
    }

    // Horizontal rule: ---
    if (/^---+$/.test(trimmed)) {
      blocks.push('<div class="hr-separator"><span class="hr-star">&#10022;</span></div>');
      i++;
      continue;
    }

    // Heading 2: ## Title
    if (/^##\s+/.test(trimmed)) {
      blocks.push(`<h2>${inlineFormat(trimmed.replace(/^##\s+/, ''))}</h2>`);
      i++;
      isFirstParagraph = false;
      continue;
    }

    // Heading 3: ### Subtitle
    if (/^###\s+/.test(trimmed)) {
      blocks.push(`<h3>${inlineFormat(trimmed.replace(/^###\s+/, ''))}</h3>`);
      i++;
      isFirstParagraph = false;
      continue;
    }

    // Blockquote: > Quote
    if (/^>\s?/.test(trimmed)) {
      const quoteLines: string[] = [];
      while (i < lines.length && /^>\s?/.test(lines[i].trim())) {
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ''));
        i++;
      }
      blocks.push(
        `<blockquote><div class="quote-deco">&ldquo;</div><div class="quote-text">${quoteLines.map(l => inlineFormat(l)).join('<br/>')}</div></blockquote>`
      );
      continue;
    }

    // Numbered list: 1. item
    if (/^\d+\.\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        items.push(inlineFormat(lines[i].trim().replace(/^\d+\.\s+/, '')));
        i++;
      }
      blocks.push(`<ol>${items.map(it => `<li>${it}</li>`).join('')}</ol>`);
      isFirstParagraph = false;
      continue;
    }

    // Unordered list: - item
    if (/^[-*]\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i].trim())) {
        items.push(inlineFormat(lines[i].trim().replace(/^[-*]\s+/, '')));
        i++;
      }
      blocks.push(`<ul>${items.map(it => `<li>${it}</li>`).join('')}</ul>`);
      isFirstParagraph = false;
      continue;
    }

    // Paragraph: collect consecutive non-empty, non-special lines
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !/^##\s+/.test(lines[i].trim()) &&
      !/^###\s+/.test(lines[i].trim()) &&
      !/^>\s?/.test(lines[i].trim()) &&
      !/^[-*]\s+/.test(lines[i].trim()) &&
      !/^\d+\.\s+/.test(lines[i].trim()) &&
      !/^---+$/.test(lines[i].trim())
    ) {
      paraLines.push(lines[i].trim());
      i++;
    }

    if (paraLines.length > 0) {
      const text = paraLines.map(l => inlineFormat(l)).join(' ');
      if (isFirstParagraph) {
        const firstLetter = text.charAt(0);
        const rest = text.slice(1);
        blocks.push(`<p class="lettrine"><span class="lettrine-letter">${firstLetter}</span>${rest}</p>`);
        isFirstParagraph = false;
      } else {
        blocks.push(`<p>${text}</p>`);
      }
    }
  }

  return blocks.join('\n');
}

/**
 * Inline formatting: **bold** -> strong, *italic* -> em
 */
function inlineFormat(text: string): string {
  let out = text;
  out = out.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  out = out.replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, '<em>$1</em>');
  return out;
}

/**
 * Escape HTML entities for safety
 */
function esc(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Generate the SVG Islamic geometric ornament (interlaced octagon pattern)
 */
function geometricOrnament(size = 120): string {
  return `<svg width="${size}" height="${size}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="geo" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
        <path d="M25,0 L50,25 L25,50 L0,25 Z" fill="none" stroke="rgba(197,164,91,0.15)" stroke-width="0.8"/>
        <circle cx="25" cy="25" r="2" fill="rgba(197,164,91,0.1)"/>
      </pattern>
    </defs>
    <rect width="200" height="200" fill="url(#geo)"/>
    <circle cx="100" cy="100" r="40" fill="none" stroke="rgba(197,164,91,0.2)" stroke-width="1"/>
    <circle cx="100" cy="100" r="55" fill="none" stroke="rgba(197,164,91,0.12)" stroke-width="0.5"/>
    <circle cx="100" cy="100" r="3" fill="rgba(197,164,91,0.3)"/>
  </svg>`;
}

/**
 * Elegant Islamic star ornament
 */
function starOrnament(size = 60): string {
  return `<svg width="${size}" height="${size}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke="rgba(197,164,91,0.5)" stroke-width="0.6">
      <polygon points="50,5 61,35 95,35 68,55 79,90 50,68 21,90 32,55 5,35 39,35"/>
      <polygon points="50,15 58,38 83,38 63,52 71,78 50,63 29,78 37,52 17,38 42,38"/>
    </g>
    <circle cx="50" cy="50" r="2.5" fill="rgba(197,164,91,0.4)"/>
  </svg>`;
}

/**
 * Delicate wavy ornament separator
 */
function wavyOrnament(): string {
  return `<svg width="240" height="16" viewBox="0 0 240 16" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <path d="M0,8 Q20,2 40,8 Q60,14 80,8 Q100,2 120,8 Q140,14 160,8 Q180,2 200,8 Q220,14 240,8"
      fill="none" stroke="rgba(197,164,91,0.35)" stroke-width="0.8"/>
    <circle cx="120" cy="8" r="1.5" fill="rgba(197,164,91,0.4)"/>
  </svg>`;
}

/**
 * Small diamond separator
 */
function diamondSeparator(): string {
  return `<div class="diamond-separator">&#9670; &#9670; &#9670;</div>`;
}

/**
 * Bismillah in Arabic calligraphy style
 */
function bismillah(): string {
  return `<div class="bismillah">&#1576;&#1616;&#1587;&#1618;&#1605;&#1616; &#1575;&#1604;&#1604;&#1617;&#1607;&#1616; &#1575;&#1604;&#1585;&#1617;&#1581;&#1618;&#1605;&#1614;&#1606;&#1616; &#1575;&#1604;&#1585;&#1617;&#1581;&#1616;&#1610;&#1605;&#1616;</div>`;
}

/**
 * Main export: generate complete HTML for a book PDF
 */
export function generatePdfHtml(book: BookPdfData): string {
  const { title, subtitle, inspiration, chapters } = book;

  // Build chapter sections
  const chapterSections = chapters.map((ch, idx) => {
    const chapterNumber = idx + 1;
    const parsedContent = parseContent(ch.content);

    return `
      <div class="chapter-section">
        <div class="header-bar">
          <span class="header-brand">L&rsquo;Alchimie du Miroir</span>
          <span class="header-title">${esc(book.title)}</span>
        </div>
        <div class="content-area">
          <div class="chapter-number">
            <span class="chapter-circle">${chapterNumber}</span>
          </div>
          <h1 class="chapter-title">${esc(ch.title)}</h1>
          ${diamondSeparator()}
          <div class="chapter-body">
            ${parsedContent}
          </div>
        </div>
        <div class="footer-bar">
          <div class="footer-ornament"></div>
        </div>
      </div>
    `;
  }).join('\n');

  // Build table of contents items
  const tocItems = chapters.map((ch, idx) => {
    const num = idx + 1;
    return `
      <div class="toc-item">
        <span class="toc-number">${num}</span>
        <span class="toc-title">${esc(ch.title)}</span>
        <span class="toc-dots"></span>
      </div>
    `;
  }).join('\n');

  // Complete HTML
  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${esc(title)}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&family=Crimson+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&family=Scheherazade+New:wght@400;500;600;700&display=swap" rel="stylesheet"/>
  <style>
    /* ===== PAGE SETUP ===== */
    @page {
      size: A4;
      margin: 0;
    }

    /* ===== RESET & BASE ===== */
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

    /* Arabic text in PDFs */
    .arabic, .chapter-body .arabic {
      font-family: 'Scheherazade New', 'Traditional Arabic', serif;
      direction: rtl;
      font-size: 12pt;
      line-height: 2;
    }

    :root {
      --gold: #b8943e;
      --gold-light: #d4b96e;
      --gold-dark: #96782e;
      --gold-faint: rgba(184,148,62,0.2);
      --gold-vivid: #c9a227;
      --cream: #faf5eb;
      --cream-dark: #f0e8d8;
      --cream-warm: #f5eed8;
      --dark: #0d0907;
      --dark-light: #1a1410;
      --dark-text: #e8dcc8;
      --dark-text-muted: #b8a88a;
      --page-bg: #faf6ee;
      --text-body: #2c2418;
      --text-body-light: #4a3f30;
      --margin-page: 25mm;
      --margin-inner: 22mm;
    }

    html {
      background: var(--page-bg);
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    body {
      font-family: 'Crimson Pro', 'Garamond', Georgia, 'Times New Roman', serif;
      font-size: 10.5pt;
      line-height: 1.65;
      color: var(--text-body);
      background: var(--page-bg);
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
      letter-spacing: 0.01em;
    }

    /* ===== COVER PAGE ===== */
    .cover-page {
      width: 210mm;
      min-height: 297mm;
      page-break-after: always;
      position: relative;
      background: linear-gradient(175deg, #0d0907 0%, #1a1410 40%, #0d0907 100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 25mm 30mm;
      text-align: center;
    }

    .cover-page::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 320px;
      height: 320px;
      background: radial-gradient(ellipse at center, rgba(184,148,62,0.08) 0%, transparent 70%);
      transform: translate(-50%, -50%);
      pointer-events: none;
    }

    /* Triple frame border */
    .cover-frame-outer {
      position: absolute;
      top: 10mm;
      left: 10mm;
      right: 10mm;
      bottom: 10mm;
      border: 1px solid rgba(184,148,62,0.25);
      pointer-events: none;
    }
    .cover-frame-middle {
      position: absolute;
      top: 13mm;
      left: 13mm;
      right: 13mm;
      bottom: 13mm;
      border: 0.5px solid rgba(184,148,62,0.15);
      pointer-events: none;
    }
    .cover-frame-inner {
      position: absolute;
      top: 15mm;
      left: 15mm;
      right: 15mm;
      bottom: 15mm;
      border: 0.5px solid rgba(184,148,62,0.08);
      pointer-events: none;
    }

    /* Corner ornaments */
    .cover-corner {
      position: absolute;
      width: 16px;
      height: 16px;
      border-color: rgba(184,148,62,0.3);
      border-style: solid;
    }
    .cover-corner.tl { top: 11mm; left: 11mm; border-width: 1.5px 0 0 1.5px; }
    .cover-corner.tr { top: 11mm; right: 11mm; border-width: 1.5px 1.5px 0 0; }
    .cover-corner.bl { bottom: 11mm; left: 11mm; border-width: 0 0 1.5px 1.5px; }
    .cover-corner.br { bottom: 11mm; right: 11mm; border-width: 0 1.5px 1.5px 0; }

    .cover-wavy-top {
      position: absolute;
      top: 22mm;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0.8;
    }
    .cover-wavy-bottom {
      position: absolute;
      bottom: 22mm;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0.8;
    }
    .cover-geo {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0.4;
    }

    .cover-content {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5mm;
    }

    .cover-brand {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 8.5pt;
      letter-spacing: 5px;
      text-transform: uppercase;
      color: var(--gold);
      opacity: 0.75;
    }

    .cover-subtitle-brand {
      font-family: 'Crimson Pro', serif;
      font-size: 9pt;
      font-style: italic;
      color: var(--gold-dark);
      opacity: 0.6;
      letter-spacing: 2px;
      margin-bottom: 3mm;
    }

    .cover-bismillah {
      font-size: 14pt;
      color: var(--gold);
      opacity: 0.5;
      margin: 3mm 0;
      line-height: 1.8;
    }

    .cover-divider {
      width: 60px;
      height: 0.5px;
      background: var(--gold);
      opacity: 0.3;
      margin: 2mm 0;
    }

    .cover-collection {
      font-family: 'Crimson Pro', serif;
      font-size: 7.5pt;
      letter-spacing: 3.5px;
      text-transform: uppercase;
      color: var(--dark-text-muted);
      opacity: 0.5;
      margin-top: 2mm;
    }

    .cover-title {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 30pt;
      font-weight: 700;
      color: var(--gold-vivid);
      line-height: 1.15;
      margin-top: 4mm;
      letter-spacing: 0.5px;
    }

    .cover-book-subtitle {
      font-family: 'Crimson Pro', serif;
      font-size: 11pt;
      font-style: italic;
      font-weight: 300;
      color: var(--dark-text-muted);
      margin-top: 2mm;
      line-height: 1.6;
      max-width: 85%;
    }

    .cover-inspiration {
      font-family: 'Crimson Pro', serif;
      font-size: 8.5pt;
      color: var(--gold-dark);
      opacity: 0.5;
      margin-top: 6mm;
      letter-spacing: 0.5px;
    }
    .cover-inspiration-label {
      font-style: italic;
      font-size: 7.5pt;
      opacity: 0.8;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    /* ===== TABLE OF CONTENTS ===== */
    .toc-page {
      width: 210mm;
      min-height: 297mm;
      page-break-after: always;
      background: var(--page-bg);
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: var(--margin-page) var(--margin-inner);
    }

    .toc-header {
      text-align: center;
      margin-bottom: 10mm;
    }
    .toc-header h2 {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 22pt;
      color: var(--gold-dark);
      font-weight: 600;
      letter-spacing: 6px;
      text-transform: uppercase;
    }
    .toc-header-divider {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      margin-top: 4mm;
    }
    .toc-header-divider .line {
      width: 40px;
      height: 0.5px;
      background: var(--gold-faint);
    }
    .toc-header-divider .diamond {
      width: 6px;
      height: 6px;
      border: 0.5px solid var(--gold);
      transform: rotate(45deg);
    }

    .toc-list {
      width: 75%;
    }
    .toc-item {
      display: flex;
      align-items: baseline;
      padding: 3.5mm 0;
      border-bottom: 0.5px solid rgba(184,148,62,0.1);
      position: relative;
    }
    .toc-item:last-child {
      border-bottom: none;
    }
    .toc-number {
      width: 26px;
      height: 26px;
      border-radius: 50%;
      border: 1px solid var(--gold);
      color: var(--gold);
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 10pt;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-right: 4mm;
    }
    .toc-title {
      font-family: 'Crimson Pro', serif;
      font-size: 11pt;
      color: var(--text-body);
      line-height: 1.4;
      font-weight: 400;
    }
    .toc-dots {
      flex: 1;
      border-bottom: 1px dotted rgba(184,148,62,0.15);
      margin: 0 3mm;
      min-width: 20px;
      align-self: flex-end;
      margin-bottom: 2mm;
    }

    /* ===== CONTENT SECTIONS ===== */
    .chapter-section {
      page-break-before: always;
      break-before: page;
      background: var(--page-bg);
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
      min-height: 297mm;
    }
    .chapter-section:first-child {
      page-break-before: auto;
      break-before: auto;
    }

    /* Running header */
    .header-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 6mm var(--margin-inner) 3mm var(--margin-inner);
      border-bottom: 0.5px solid rgba(184,148,62,0.12);
    }
    .header-brand {
      font-family: 'Crimson Pro', serif;
      font-size: 7pt;
      letter-spacing: 2.5px;
      text-transform: uppercase;
      color: var(--gold-dark);
      opacity: 0.55;
      font-weight: 500;
    }
    .header-title {
      font-family: 'Crimson Pro', serif;
      font-size: 7pt;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: var(--text-body-light);
      opacity: 0.4;
      font-weight: 400;
    }

    /* Footer ornament */
    .footer-bar {
      position: absolute;
      bottom: 8mm;
      left: 50%;
      transform: translateX(-50%);
    }
    .footer-ornament {
      width: 20px;
      height: 0.5px;
      background: rgba(184,148,62,0.2);
    }

    .content-area {
      padding: 6mm var(--margin-inner) 12mm var(--margin-inner);
    }

    .chapter-number {
      text-align: center;
      margin-bottom: 3mm;
    }
    .chapter-circle {
      display: inline-flex;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 1.5px solid var(--gold);
      color: var(--gold);
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 15pt;
      font-weight: 700;
      align-items: center;
      justify-content: center;
    }

    .chapter-title {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 19pt;
      font-weight: 700;
      color: var(--gold-dark);
      text-align: center;
      line-height: 1.3;
      margin-bottom: 2mm;
      letter-spacing: 0.3px;
    }

    .diamond-separator {
      text-align: center;
      color: var(--gold);
      font-size: 6pt;
      letter-spacing: 6px;
      margin-bottom: 5mm;
      opacity: 0.45;
    }

    .chapter-body {
      text-align: justify;
      hyphens: auto;
      -webkit-hyphens: auto;
    }

    /* ===== TYPOGRAPHY ===== */
    .chapter-body p {
      margin-bottom: 4pt;
      text-indent: 0;
      orphans: 3;
      widows: 3;
    }
    /* Modern style: no text-indent, gap between paragraphs */
    .chapter-body p + p {
      margin-top: 5pt;
    }

    .chapter-body p.lettrine {
      margin-bottom: 5pt;
    }

    .lettrine-letter {
      float: left;
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 38pt;
      font-weight: 700;
      line-height: 0.82;
      color: var(--gold-dark);
      margin-right: 2.5mm;
      margin-top: 1.5mm;
    }

    .chapter-body h2 {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 13pt;
      font-weight: 600;
      color: var(--gold-dark);
      margin-top: 8mm;
      margin-bottom: 2mm;
      text-align: left;
      letter-spacing: 0.3px;
      page-break-after: avoid;
      padding-bottom: 1.5mm;
      border-bottom: 0.5px solid var(--gold-faint);
    }

    .chapter-body h3 {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 11pt;
      font-weight: 600;
      color: var(--text-body);
      margin-top: 6mm;
      margin-bottom: 2mm;
      padding-left: 4mm;
      border-left: 2px solid var(--gold);
      page-break-after: avoid;
    }

    .chapter-body blockquote {
      position: relative;
      margin: 4mm 0 5mm 0;
      padding: 3.5mm 5mm 3.5mm 7mm;
      background: linear-gradient(135deg, var(--cream-warm) 0%, var(--cream-dark) 100%);
      border-left: 2px solid var(--gold);
      font-style: italic;
      color: var(--text-body-light);
      font-size: 10pt;
      line-height: 1.6;
      border-radius: 0 3px 3px 0;
      page-break-inside: avoid;
    }
    .chapter-body blockquote .quote-deco {
      position: absolute;
      top: -2mm;
      left: 4mm;
      font-size: 28pt;
      font-family: 'Playfair Display', Georgia, serif;
      color: var(--gold);
      opacity: 0.4;
      line-height: 1;
    }
    .chapter-body blockquote .quote-text {
      position: relative;
      z-index: 1;
    }

    .chapter-body ul {
      list-style: none;
      padding-left: 5mm;
      margin: 3mm 0 4mm 0;
    }
    .chapter-body ul li {
      position: relative;
      padding-left: 4.5mm;
      margin-bottom: 1.5mm;
    }
    .chapter-body ul li::before {
      content: '\\25C6';
      position: absolute;
      left: 0;
      color: var(--gold);
      font-size: 6pt;
      top: 2.5pt;
    }

    .chapter-body ol {
      padding-left: 5mm;
      margin: 3mm 0 4mm 0;
      list-style: none;
      counter-reset: golden-counter;
    }
    .chapter-body ol li {
      position: relative;
      padding-left: 6mm;
      margin-bottom: 1.5mm;
      counter-increment: golden-counter;
    }
    .chapter-body ol li::before {
      content: counter(golden-counter) '.';
      position: absolute;
      left: 0;
      color: var(--gold);
      font-family: 'Playfair Display', Georgia, serif;
      font-weight: 600;
      font-size: 9pt;
    }

    .hr-separator {
      text-align: center;
      margin: 5mm 0;
      position: relative;
    }
    .hr-separator::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 15%;
      right: 15%;
      height: 0.5px;
      background: var(--gold-faint);
    }
    .hr-star {
      background: var(--page-bg);
      padding: 0 3mm;
      color: var(--gold);
      font-size: 8pt;
      position: relative;
      z-index: 1;
    }

    .chapter-body strong {
      font-weight: 700;
      color: var(--text-body);
    }

    .chapter-body em {
      font-style: italic;
    }

    /* ===== COLOPHON PAGE ===== */
    .colophon-page {
      width: 210mm;
      min-height: 297mm;
      page-break-before: always;
      break-before: page;
      background: var(--page-bg);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 40mm 30mm;
      text-align: center;
    }
    .colophon-ornament {
      margin-bottom: 8mm;
      opacity: 0.4;
    }
    .colophon-brand {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 12pt;
      color: var(--gold-dark);
      letter-spacing: 4px;
      text-transform: uppercase;
      margin-bottom: 3mm;
    }
    .colophon-tagline {
      font-family: 'Crimson Pro', serif;
      font-size: 10pt;
      font-style: italic;
      color: var(--text-body-light);
      margin-bottom: 8mm;
      line-height: 1.6;
    }
    .colophon-divider {
      width: 40px;
      height: 0.5px;
      background: var(--gold-faint);
      margin: 3mm auto;
    }
    .colophon-text {
      font-family: 'Crimson Pro', serif;
      font-size: 8pt;
      color: var(--text-body-light);
      opacity: 0.5;
      line-height: 1.8;
      letter-spacing: 0.5px;
      margin-top: 5mm;
    }
    .colophon-bismillah {
      font-size: 18pt;
      color: var(--gold);
      opacity: 0.35;
      margin: 8mm 0 4mm 0;
      line-height: 1.8;
    }
    .colophon-dua {
      font-family: 'Crimson Pro', serif;
      font-size: 10pt;
      font-style: italic;
      color: var(--text-body-light);
      margin-top: 6mm;
      line-height: 1.7;
      max-width: 75%;
    }
  </style>
</head>
<body>
  <!-- PAGE 1: COVER -->
  <div class="cover-page">
    <div class="cover-frame-outer"></div>
    <div class="cover-frame-middle"></div>
    <div class="cover-frame-inner"></div>
    <div class="cover-corner tl"></div>
    <div class="cover-corner tr"></div>
    <div class="cover-corner bl"></div>
    <div class="cover-corner br"></div>
    <div class="cover-wavy-top">${wavyOrnament()}</div>
    <div class="cover-geo">${geometricOrnament(100)}</div>
    <div class="cover-content">
      <div class="cover-brand">L&rsquo;ALCHIMIE DU MIROIR</div>
      <div class="cover-subtitle-brand">Tadaburr Th&eacute;rapeutique</div>
      ${bismillah()}
      <div class="cover-divider"></div>
      <div class="cover-collection">Collection Tadabur &amp; Th&eacute;rapie</div>
      <div class="cover-title">${esc(title)}</div>
      <div class="cover-book-subtitle">${esc(subtitle)}</div>
      <div class="cover-inspiration">
        <span class="cover-inspiration-label">Inspir&eacute; de</span><br/>
        ${esc(inspiration)}
      </div>
    </div>
    <div class="cover-wavy-bottom">${wavyOrnament()}</div>
  </div>

  <!-- PAGE 2: TABLE OF CONTENTS -->
  <div class="toc-page">
    <div class="toc-header">
      <h2>Sommaire</h2>
      <div class="toc-header-divider">
        <span class="line"></span>
        <span class="diamond"></span>
        <span class="line"></span>
      </div>
    </div>
    <div class="toc-list">
      ${tocItems}
    </div>
  </div>

  <!-- CHAPTERS -->
  ${chapterSections}

  <!-- FINAL PAGE: COLOPHON -->
  <div class="colophon-page">
    <div class="colophon-ornament">${starOrnament(50)}</div>
    <div class="colophon-brand">L&rsquo;Alchimie du Miroir</div>
    <div class="colophon-tagline">Tadaburr Th&eacute;rapeutique</div>
    <div class="colophon-divider"></div>
    <div class="colophon-bismillah">&#1576;&#1616;&#1587;&#1618;&#1605;&#1616; &#1575;&#1604;&#1604;&#1617;&#1607;&#1616;</div>
    <div class="colophon-dua">
      &laquo; Seul celui qui a patient&eacute; dans l&rsquo;&eacute;preuve<br/>
      peut comprendre la douceur de la d&eacute;livrance. &raquo;
    </div>
    <div class="colophon-divider"></div>
    <div class="colophon-text">
      Ce guide est un outil de r&eacute;flexion et ne remplace en aucun cas<br/>
      un suivi th&eacute;rapeutique ou psychologique professionnel.<br/>
      <br/>
      &copy; L&rsquo;Alchimie du Miroir &mdash; Tous droits r&eacute;serv&eacute;s
    </div>
  </div>
</body>
</html>`;
}
