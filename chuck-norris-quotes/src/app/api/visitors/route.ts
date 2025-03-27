import { cookies } from 'next/headers';
import prisma from '@/app/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
    const cookieStore = await cookies();
    const hasVisited = cookieStore.get('hasVisited');

    if (!hasVisited) {
        let visitorCount = await prisma.visitor.findFirst();
        if (!visitorCount) {
            visitorCount = await prisma.visitor.create({
                data: { count: 1 }
            });
        } else {
            visitorCount = await prisma.visitor.update({
                where: { id: visitorCount.id },
                data: { count: visitorCount.count + 1 }
            });
        }

        // Set cookie to expire in 24 hours
        cookieStore.set('hasVisited', 'true', {
            maxAge: 60 * 60 * 24,
            path: '/',
            sameSite: 'lax'
        });

        return NextResponse.json({ count: visitorCount.count });
    }

    const visitorCount = await prisma.visitor.findFirst();
    return NextResponse.json({ count: visitorCount?.count || 0 });
}