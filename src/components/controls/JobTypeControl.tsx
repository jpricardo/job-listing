import { memo } from 'react';

import { JobType } from '@/lib';

import ControlCard from '../containers/ControlCard';
import CheckboxGroup from '../inputs/CheckboxGroup';

function JobTypeControl() {
	const options: JobType[] = ['FullTime', 'Hybrid', 'Remote'];
	return (
		<ControlCard title='Job type'>
			<CheckboxGroup options={options} />
		</ControlCard>
	);
}

export default memo(JobTypeControl);
