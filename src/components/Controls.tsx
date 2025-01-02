import { Flex } from 'antd';
import { memo } from 'react';

import { OrderByType } from '@/lib';
import { AreaType, JobType } from '@/services/job/entities/job.entity';

import Divider from './Divider';
import Container from './containers/Container';
import AreaTypeControl from './controls/AreaTypeControl';
import JobTypeControl from './controls/JobTypeControl';
import OrderByControl from './controls/OrderByControl';
import Button from './inputs/Button';

type ControlsProps = {
	id?: string;
	className?: string;
	style?: React.CSSProperties;

	onReset: () => void;

	orderBy: OrderByType;
	onOrderByChange: React.HtmlHTMLAttributes<HTMLSelectElement>['onChange'];

	jobTypes: JobType[];
	onJobTypesChange: (value: JobType[]) => void;

	areaTypes: AreaType[];
	onAreaTypesChange: (value: AreaType[]) => void;
};
function Controls({
	onReset,
	orderBy,
	onOrderByChange,
	jobTypes,
	onJobTypesChange,
	areaTypes,
	onAreaTypesChange,
	...props
}: ControlsProps) {
	return (
		<Container title='Filter' addon={<Button onClick={onReset}>Clear all</Button>} {...props}>
			<Flex gap='0.5rem' vertical>
				<OrderByControl value={orderBy} onChange={onOrderByChange} />
				<Divider />
				<JobTypeControl value={jobTypes} onChange={onJobTypesChange} />
				<Divider />
				<AreaTypeControl value={areaTypes} onChange={onAreaTypesChange} />
			</Flex>
		</Container>
	);
}

export default memo(Controls);
