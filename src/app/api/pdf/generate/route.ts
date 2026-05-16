import { NextRequest, NextResponse } from 'next/server';
import { generatePdfHtml } from '@/lib/pdfTemplate';

export async function POST(request: NextRequest) {
  try {
    const book = await request.json();

    if (!book.title || !book.chapters || !Array.isArray(book.chapters)) {
      return NextResponse.json(
        { error: 'Invalid book data. Required: title (string), chapters (array).' },
        { status: 400 }
      );
    }

    const html = generatePdfHtml({
      title: book.title || '',
      subtitle: book.subtitle || '',
      inspiration: book.inspiration || '',
      chapters: book.chapters.map((ch: { title: string; content: string }) => ({
        title: ch.title || '',
        content: ch.content || '',
      })),
    });

    const safeFilename = (book.title || 'document')
      .replace(/[^a-zA-Z0-9\u00C0-\u017F\s]/g, '')
      .replace(/\s+/g, '_')
      .slice(0, 80);

    // Return HTML for client-side PDF generation
    return NextResponse.json({
      success: true,
      html,
      filename: safeFilename,
      message: 'HTML generated. Use client-side PDF rendering.',
    });
  } catch (error) {
    console.error('PDF generation error:', error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
