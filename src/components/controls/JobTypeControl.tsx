import { CheckboxGroup } from '@jpricardo/component-library';
import { memo } from 'react';

import { jobTypeOptions } from '@/lib';
import { JobType } from '@/services/job/entities/job.entity';

import ControlCard from '../containers/ControlCard';

type JobTypeControlProps = {
	value: JobType[];
	onChange: (value: JobType[]) => void;
};

function JobTypeControl({ value, onChange }: JobTypeControlProps) {
	return (
		<ControlCard title='Job type'>
			<CheckboxGroup name='job-type-checkboxgroup' options={jobTypeOptions} value={value} onChange={onChange} />
		</ControlCard>
	);
}

export default memo(JobTypeControl);
