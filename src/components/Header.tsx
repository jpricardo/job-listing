import { Flex, Typography } from '@jpricardo/component-library';
import { memo } from 'react';

import { useIsMobile } from '@/hooks/useIsMobile';

function Header() {
	const isMobile = useIsMobile();

	return (
		<Flex justify='center' align='center' style={{ margin: isMobile ? '0.5rem' : '1.5rem' }}>
			<Typography.Headline>Job Listing App</Typography.Headline>
		</Flex>
	);
}

export default memo(Header);
