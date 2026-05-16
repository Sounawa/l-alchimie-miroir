import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

// GET /api/therapy-sessions
export async function GET() {
  try {
    const sessions = await db.therapySession.findMany({
      orderBy: { completedAt: 'desc' },
      take: 100,
    });
    return NextResponse.json(sessions);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch sessions' }, { status: 500 });
  }
}

// POST /api/therapy-sessions
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { protocolId, patientName, notes, duration } = body;

    if (!protocolId) {
      return NextResponse.json({ error: 'protocolId is required' }, { status: 400 });
    }

    const session = await db.therapySession.create({
      data: { protocolId, patientName, notes, duration },
    });
    return NextResponse.json(session, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to create session' }, { status: 500 });
  }
}
