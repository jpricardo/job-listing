'use client';
import { Menu } from '@jpricardo/component-library';
import { usePathname, useRouter } from 'next/navigation';

export default function SideMenu() {
	const router = useRouter();
	const pathname = usePathname();

	return (
		<Menu
			activeKey={pathname.split('/')[1]}
			onChange={(key) => router.push(key.toString())}
			items={[
				{
					key: 'home',
					label: 'Home',
				},

				{
					key: 'jobs',
					label: 'Jobs',
				},

				{
					key: 'settings',
					label: 'Settings',
				},

				{
					key: 'profile',
					label: 'Profile',
				},
			]}
		/>
	);
}
