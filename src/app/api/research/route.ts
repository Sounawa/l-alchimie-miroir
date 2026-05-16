import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

// GET /api/research
export async function GET() {
  try {
    const notes = await db.researchNote.findMany({
      orderBy: { createdAt: 'desc' },
      take: 100,
    });
    return NextResponse.json(notes);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch notes' }, { status: 500 });
  }
}

// POST /api/research
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, content, category, status, tags } = body;

    if (!title) {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }

    const note = await db.researchNote.create({
      data: { title, content, category: category || 'Technique', status: status || 'active', tags },
    });
    return NextResponse.json(note, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to create note' }, { status: 500 });
  }
}

// PUT /api/research
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...data } = body;

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    const note = await db.researchNote.update({ where: { id }, data });
    return NextResponse.json(note);
  } catch {
    return NextResponse.json({ error: 'Failed to update note' }, { status: 500 });
  }
}

// DELETE /api/research?id=xxx
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    await db.researchNote.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to delete note' }, { status: 500 });
  }
}
