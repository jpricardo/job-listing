import { Container, Typography } from '@jpricardo/component-library';
import Link from 'next/link';

import Navbar from './_components/navigation/Navbar';
import NavbarIcons from './_components/navigation/NavbarIcons';
import NavbarUsername from './_components/navigation/NavbarUsername';
import SideMenu from './_components/navigation/SideMenu';

type HomeLayoutProps = Readonly<{ children: React.ReactNode }>;

export default function HomeLayout({ children }: HomeLayoutProps) {
	return (
		<main className='flex min-h-screen flex-row'>
			<aside className='h-screen flex-1/12'>
				<Container className='h-full w-full rounded-none p-2!'>
					<SideMenu />
				</Container>
			</aside>

			<div className='flex flex-11/12 flex-col gap-4 px-4 py-0'>
				<Navbar icons={<NavbarIcons />}>
					<NavbarUsername />
				</Navbar>

				{children}

				<footer className='flex w-full justify-end'>
					<Link href='https://github.com/jpricardo' target='_blank'>
						<Typography.Footnote>with ❤ by @jpricardo</Typography.Footnote>
					</Link>
				</footer>
			</div>
		</main>
	);
}
