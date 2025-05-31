import { Typography } from '@jpricardo/component-library';
import { use } from 'react';

import { auth } from '@/app/_lib/auth';

export default function NavbarUsername() {
	const session = use(auth());

	return (
		<div className='flex items-center gap-2'>
			<Typography.Body>Welcome back, {session?.user?.name ?? 'Guest'}!</Typography.Body>
		</div>
	);
}
