import { WEBHOOK_TOKEN } from '@/configs/env.config';
import { revalidatePath, revalidateTag } from 'next/cache';
import type { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
	if (req.method !== 'POST') {
		return Response.json({ message: 'Method must be POST', status: 400 });
	}
	const requestToken = req.headers.get('Authorization');
	if (requestToken === null) {
		return Response.json({ message: 'Token is null', status: 400 });
	}
	const token = requestToken.split(' ')[1];
	if (token !== WEBHOOK_TOKEN) {
		return Response.json({ message: 'Invalid token' });
	}

	// TODO: check on strapi frontend production url is right
	revalidateTag('header');
	revalidateTag('footer');
	revalidateTag('carousel');
	revalidateTag('managers');
	revalidateTag('documents');
	revalidateTag('developments');
	revalidateTag('sponsors');
	revalidatePath('/', 'page');
	revalidatePath('/about', 'page');
	revalidatePath('/contact', 'page');
	revalidatePath('/project', 'page');
	revalidatePath('/documents', 'page');
	revalidatePath('/structure', 'page');
	revalidatePath('/sponsors', 'page');
	revalidatePath('/submissions', 'page');
	revalidatePath('/contacts', 'page');

	return Response.json({
		revalidated: true,
		status: 200,
		message: 'revalidated',
	});
}
