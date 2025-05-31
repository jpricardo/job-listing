import { Flex } from '@jpricardo/component-library';

import Container from '@/app/(home)/_components/containers/Container';

export default function HomePage() {
	return (
		<Flex style={{ gap: '1rem' }}>
			<Container style={{ flex: 1 }}>Home</Container>
		</Flex>
	);
}
