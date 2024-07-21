import { Flex } from 'antd';
import { memo } from 'react';

import { useIsMobile } from '@/hooks/useIsMobile';

import Headline from './typography/Headline';

function Header() {
	const isMobile = useIsMobile();

	return (
		<Flex justify='center' align='center' style={{ margin: isMobile ? '1rem' : '1.5rem' }}>
			<Headline>Job Listing App</Headline>
		</Flex>
	);
}

export default memo(Header);
