import { Flex } from 'antd';
import { memo } from 'react';

import { OrderByType } from '@/lib';

import Divider from './Divider';
import Container from './containers/Container';
import JobTypeControl from './controls/JobTypeControl';
import OrderByControl from './controls/OrderByControl';
import Button from './inputs/Button';

type ControlsProps = {
	orderBy: OrderByType;
	onOrderByChange: React.HtmlHTMLAttributes<HTMLSelectElement>['onChange'];
};
function Controls({ orderBy, onOrderByChange, ...props }: ControlsProps) {
	return (
		<Container title='Filter' addon={<Button>Clear all</Button>}>
			<Flex gap='0.5rem' vertical>
				<OrderByControl value={orderBy} onChange={onOrderByChange} />
				<Divider />
				<JobTypeControl />
			</Flex>
		</Container>
	);
}

export default memo(Controls);
