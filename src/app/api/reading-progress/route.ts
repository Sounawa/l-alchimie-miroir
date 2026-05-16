import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

// GET /api/reading-progress
export async function GET() {
  try {
    const progress = await db.readingProgress.findMany({
      orderBy: { lastReadAt: 'desc' },
    });
    return NextResponse.json(progress);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch progress' }, { status: 500 });
  }
}

// POST /api/reading-progress
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { bookId, chapterId, completed } = body;

    if (!bookId || !chapterId) {
      return NextResponse.json({ error: 'bookId and chapterId are required' }, { status: 400 });
    }

    const existing = await db.readingProgress.findFirst({
      where: { bookId, chapterId },
    });

    if (existing) {
      const updated = await db.readingProgress.update({
        where: { id: existing.id },
        data: { completed: completed !== undefined ? completed : !existing.completed, lastReadAt: new Date() },
      });
      return NextResponse.json(updated);
    }

    const progress = await db.readingProgress.create({
      data: { bookId, chapterId, completed: completed || false },
    });
    return NextResponse.json(progress, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to save progress' }, { status: 500 });
  }
}
