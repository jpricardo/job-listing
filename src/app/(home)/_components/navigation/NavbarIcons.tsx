import { Button } from '@jpricardo/component-library';
import Image from 'next/image';
import { use } from 'react';

import { auth } from '@/app/_lib/auth';

import { logoutAction } from '../../_lib/actions';

export default function NavbarIcons() {
	const session = use(auth());
	const defaultAvatar = 'https://ui-avatars.com/api/?name=Guest&size=64&rounded=true';

	return (
		<div className='flex items-center gap-2'>
			<form action={logoutAction}>
				<Button type='submit' variant='danger'>
					Logout
				</Button>
			</form>

			<Image
				className='bordered rounded-full'
				width={40}
				height={40}
				src={session?.user?.image ?? defaultAvatar}
				alt='avatar'
			/>
		</div>
	);
}
