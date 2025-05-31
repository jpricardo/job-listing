import { Button } from '@jpricardo/component-library';
import Image from 'next/image';
import { use } from 'react';

import { auth } from '@/app/_lib/auth';

import { logoutAction } from '../../_lib/actions';

export default function NavbarIcons() {
	const session = use(auth());

	return (
		<div className='flex items-center gap-2'>
			<form action={logoutAction}>
				<Button type='submit' variant='danger'>
					Logout
				</Button>
			</form>

			<Image
				className='bordered w-10 rounded-full'
				width={20}
				height={20}
				src={session?.user?.image ?? ''}
				alt='avatar'
			/>
		</div>
	);
}
