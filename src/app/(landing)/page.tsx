'use client';
import { Button, Typography } from '@jpricardo/component-library';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Landing() {
	const router = useRouter();

	return (
		<div className='flex max-w-10/12 flex-col items-center justify-center gap-4'>
			<Typography.Headline size='large' className='text-center'>
				Job Listing App
			</Typography.Headline>
			<Typography.Title className='text-center opacity-75'>
				Job listing app, built with Next, Tailwind and Ant Design
			</Typography.Title>

			<div className='flex flex-row gap-4'>
				<Link href='https://github.com/jpricardo/job-listing' target='_blank'>
					<Button>Github</Button>
				</Link>

				<Link href='/login' target='_self'>
					<Button variant='primary'>Get started</Button>
				</Link>
			</div>
		</div>
	);
}
