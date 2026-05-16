import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { html, filename } = await request.json();

    if (!html || typeof html !== 'string') {
      return NextResponse.json({ error: 'HTML content is required' }, { status: 400 });
    }

    // Return HTML for client-side PDF generation
    // The client will use window.print() or a client-side PDF library
    const safeFilename = (filename || 'livre').replace(/[^a-zA-Z0-9àâäéèêëïîôùûüçÀÂÄÉÈÊËÏÎÔÙÛÜÇ\s_-]/g, '').replace(/\s+/g, '_');

    return NextResponse.json({
      success: true,
      html,
      filename: safeFilename,
      message: 'HTML generated successfully. Use client-side PDF rendering.',
    });
  } catch (err) {
    console.error('PDF generation error:', err);
    return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 });
  }
}
