import { Surface } from '@jpricardo/component-library';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
	title: 'Job Listing',
	description: 'Job listing app, built with Next, Tailwind and Ant Design',
};

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang='en'>
			<body>
				<Surface className='min-h-screen p-0!'>{children}</Surface>
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}
