import { NextResponse } from 'next/server';
import { prisma } from '@/db/prisma';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, company, budget, message } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const lead = await prisma.lead.create({
            data: {
                name,
                email,
                company,
                budget,
                message,
                source: 'website',
            },
        });

        return NextResponse.json({ success: true, leadId: lead.id });
    } catch (error) {
        console.error('Error creating lead:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
