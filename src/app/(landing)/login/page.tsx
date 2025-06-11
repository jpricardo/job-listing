import { Button, Container, Input, Typography } from '@jpricardo/component-library';
import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { auth } from '@/app/_lib/auth';

import { githubSSOFormAction, loginFormAction } from './_lib/actions';

export const metadata: Metadata = {
	title: 'Login',
};

export default async function LoginPage() {
	const session = await auth();

	if (session) return redirect('/home');

	return (
		<Container className='flex w-2xs max-w-10/12 flex-col items-center justify-center gap-6'>
			<Typography.Title>Authentication</Typography.Title>

			<form name='login-form' className='flex w-full flex-col gap-2' action={loginFormAction}>
				<Input className='w-full' id='username' name='username' type='text' placeholder='Username' />
				<Input className='w-full' id='password' name='password' type='password' placeholder='Password' />
				<Button className='w-full' type='submit' variant='primary'>
					Login
				</Button>
			</form>

			<form name='sso-form' className='flex w-full flex-col gap-2' action={githubSSOFormAction}>
				<Button className='w-full' type='submit'>
					Sign in with Github
				</Button>

				<Link className='w-full' href='/home'>
					<Button className='w-full' variant='danger'>
						Bypass
					</Button>
				</Link>
			</form>

			<Link href='https://authjs.dev/' target='_blank'>
				<Typography.Footnote size='small'>Powered by Auth.js</Typography.Footnote>
			</Link>
		</Container>
	);
}
