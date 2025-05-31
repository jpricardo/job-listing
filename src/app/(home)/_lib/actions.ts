import { signOut } from '@/app/_lib/auth';

export async function logoutAction() {
	'use server';
	await signOut({ redirectTo: '/' });
}
