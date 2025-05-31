import { Flex } from '@jpricardo/component-library';

import Container from '@/app/(home)/_components/containers/Container';

export default function SettingsPage() {
	return (
		<Flex style={{ gap: '1rem' }}>
			<Container style={{ flex: 9 }}>
				<Flex vertical style={{ gap: '1rem' }}>
					Settings
				</Flex>
			</Container>
		</Flex>
	);
}
