import { Button, Divider } from '@jpricardo/component-library';
import { memo } from 'react';

import Container from '@/app/(home)/_components/containers/Container';

import AreaTypeControl from './controls/AreaTypeControl';
import JobTypeControl from './controls/JobTypeControl';
import OrderByControl from './controls/OrderByControl';
import SeniorityLevelControl from './controls/SeniorityLevelControl';

type ControlsProps = {
	id?: string;
	className?: string;
	style?: React.CSSProperties;

	onReset: () => void;

	orderBy: string;
	onOrderByChange: (value: string) => void;

	jobTypes: any[];
	onJobTypesChange: (value: any[]) => void;

	areaTypes: any[];
	onAreaTypesChange: (value: any[]) => void;

	seniorityLevelTypes: any[];
	onSeniorityLevelTypesChange: (value: any[]) => void;
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
		<Container title='Filter' addon={<Button onClick={onReset}>Clear all</Button>} {...props}>
			<div className='flex flex-col gap-4'>
				<OrderByControl value={orderBy} onChange={onOrderByChange} />
				<Divider />
				<JobTypeControl value={jobTypes} onChange={onJobTypesChange} />
				<Divider />
				<AreaTypeControl value={areaTypes} onChange={onAreaTypesChange} />
				<Divider />
				<SeniorityLevelControl value={seniorityLevelTypes} onChange={onSeniorityLevelTypesChange} />
			</div>
		</Container>
	);
}

export default memo(Controls);
