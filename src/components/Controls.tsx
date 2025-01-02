import { Button, Divider, Flex } from '@jpricardo/component-library';
import { memo } from 'react';

import { OrderByType } from '@/lib';
import { AreaType, JobType, SeniorityLevelType } from '@/services/job/entities/job.entity';

import Container from './containers/Container';
import AreaTypeControl from './controls/AreaTypeControl';
import JobTypeControl from './controls/JobTypeControl';
import OrderByControl from './controls/OrderByControl';
import SeniorityLevelTypeControl from './controls/SeniorityLevelTypeControl';

type ControlsProps = {
	id?: string;
	className?: string;
	style?: React.CSSProperties;

	onReset: () => void;

	orderBy: OrderByType;
	onOrderByChange: (value: OrderByType) => void;

	jobTypes: JobType[];
	onJobTypesChange: (value: JobType[]) => void;

	areaTypes: AreaType[];
	onAreaTypesChange: (value: AreaType[]) => void;

	seniorityLevelTypes: SeniorityLevelType[];
	onSeniorityLevelTypesChange: (value: SeniorityLevelType[]) => void;
};
function Controls({
	onReset,
	orderBy,
	onOrderByChange,
	jobTypes,
	onJobTypesChange,
	areaTypes,
	onAreaTypesChange,
	seniorityLevelTypes,
	onSeniorityLevelTypesChange,
	...props
}: ControlsProps) {
	return (
		<Container title='Filter' variant='low' addon={<Button onClick={onReset}>Clear all</Button>} {...props}>
			<Flex gap='0.5rem' vertical>
				<OrderByControl value={orderBy} onChange={onOrderByChange} />
				<Divider />
				<JobTypeControl value={jobTypes} onChange={onJobTypesChange} />
				<Divider />
				<AreaTypeControl value={areaTypes} onChange={onAreaTypesChange} />
				<Divider />
				<SeniorityLevelTypeControl value={seniorityLevelTypes} onChange={onSeniorityLevelTypesChange} />
			</Flex>
		</Container>
	);
}

export default memo(Controls);
