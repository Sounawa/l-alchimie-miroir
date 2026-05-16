import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

// GET /api/experiments
export async function GET() {
  try {
    const experiments = await db.experiment.findMany({
      orderBy: { createdAt: 'desc' },
      take: 100,
    });
    return NextResponse.json(experiments);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch experiments' }, { status: 500 });
  }
}

// POST /api/experiments
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, hypothesis, methodology, observations, conclusions, status } = body;

    if (!title) {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }

    const experiment = await db.experiment.create({
      data: {
        title,
        hypothesis: hypothesis || '',
        methodology,
        observations,
        conclusions,
        status: status || 'en_cours',
      },
    });
    return NextResponse.json(experiment, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Failed to create experiment' }, { status: 500 });
  }
}

// PUT /api/experiments
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...data } = body;

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    const experiment = await db.experiment.update({ where: { id }, data });
    return NextResponse.json(experiment);
  } catch {
    return NextResponse.json({ error: 'Failed to update experiment' }, { status: 500 });
  }
}

// DELETE /api/experiments?id=xxx
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    await db.experiment.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to delete experiment' }, { status: 500 });
  }
}
