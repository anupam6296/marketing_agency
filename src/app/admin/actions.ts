'use server';

import { revalidatePath } from 'next/cache';

// DB disabled for now: stub the action to succeed and revalidate.
export async function updateLeadStatus(id: string, status: string) {
    try {
        console.log('updateLeadStatus stubbed', { id, status });
        revalidatePath('/admin/leads');
        return { success: true };
    } catch (error) {
        console.error('Failed to update status (stub):', error);
        return { success: false, error: 'Unavailable in preview' };
    }
}
