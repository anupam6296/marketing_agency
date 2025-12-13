'use server';

import { prisma } from '@/db/prisma';
import { revalidatePath } from 'next/cache';

export async function updateLeadStatus(id: string, status: string) {
    try {
        await prisma.lead.update({
            where: { id },
            data: { status },
        });
        revalidatePath('/admin/leads');
        return { success: true };
    } catch (error) {
        console.error('Failed to update status:', error);
        return { success: false, error: 'Database error' };
    }
}
