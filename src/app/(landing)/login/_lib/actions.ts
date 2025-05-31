import { signIn } from '@/app/_lib/auth';

export async function githubSSOFormAction() {
	'use server';
	await signIn('github', { redirectTo: '/home' });
}

export async function loginFormAction(formData: FormData) {
	'use server';
	await signIn('credentials', formData);
}
