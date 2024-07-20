import { Flex } from 'antd';
import { memo } from 'react';

import Headline from './typography/Headline';

function Header() {
	return (
		<Flex justify='center' align='center' style={{ margin: '2rem' }}>
			<Headline>Job Listing App</Headline>
		</Flex>
	);
}

export default memo(Header);
