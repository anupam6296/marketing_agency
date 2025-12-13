import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, company, budget, message } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // DB disabled for deployment preview. Pretend success.
        const fakeId = 'stub-' + Math.random().toString(36).slice(2, 10);
        console.log('Lead submission (stubbed, no DB):', { name, email, company, budget, message });
        return NextResponse.json({ success: true, leadId: fakeId });
    } catch (error) {
        console.error('Error creating lead:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
