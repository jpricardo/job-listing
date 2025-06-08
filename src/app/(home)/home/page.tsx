import { Flex } from '@jpricardo/component-library';
import type { Metadata } from 'next';

import Container from '@/app/(home)/_components/containers/Container';

export const metadata: Metadata = {
	title: 'Home',
};

export default function HomePage() {
	return (
		<Flex style={{ gap: '1rem' }}>
			<Container style={{ flex: 1 }}>Home</Container>
		</Flex>
	);
}
