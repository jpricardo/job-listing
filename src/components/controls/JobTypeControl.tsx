import { memo } from 'react';

import { JobType } from '@/lib';

import ControlCard from '../containers/ControlCard';
import CheckboxGroup from '../inputs/CheckboxGroup';

type JobTypeControlProps = {
	value: JobType[];
	onChange: (value: JobType[]) => void;
};

function JobTypeControl({ value, onChange }: JobTypeControlProps) {
	const options: JobType[] = ['FullTime', 'Hybrid', 'Remote'];

	return (
		<ControlCard title='Job type'>
			<CheckboxGroup name='job-type-checkboxgroup' options={options} value={value} onChange={onChange} />
		</ControlCard>
	);
}

export default memo(JobTypeControl);
