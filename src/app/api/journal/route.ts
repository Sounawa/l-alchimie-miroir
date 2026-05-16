import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

// GET /api/journal
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    const entries = await db.journalEntry.findMany({
      where: category ? { category } : undefined,
      orderBy: { createdAt: 'desc' },
      take: 100,
    });

    return NextResponse.json(entries);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch journal entries' }, { status: 500 });
  }
}

// POST /api/journal
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { content, category, tags } = body;

    if (!content) {
      return NextResponse.json({ error: 'Content is required' }, { status: 400 });
    }

    const entry = await db.journalEntry.create({
      data: { content, category: category || 'miroir', tags },
    });

    return NextResponse.json(entry, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create journal entry' }, { status: 500 });
  }
}

// DELETE /api/journal?id=xxx
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    await db.journalEntry.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete journal entry' }, { status: 500 });
  }
}
