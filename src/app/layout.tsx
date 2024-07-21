import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { memo } from 'react';

import Providers from './providers';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Job Listing',
	description: 'Job listing app, built with Next, Styled Components and Ant Design',
};

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Providers>
					<Analytics />

					{children}
				</Providers>
			</body>
		</html>
	);
}

export default memo(RootLayout);
