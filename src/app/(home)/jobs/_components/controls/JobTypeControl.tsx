'use client';
import { CheckboxGroup } from '@jpricardo/component-library';
import { memo } from 'react';

import ControlCard from '../containers/ControlCard';

type JobTypeControlProps = {
	value: any[];
	onChange: (value: any[]) => void;
};

function JobTypeControl({ value, onChange }: JobTypeControlProps) {
	return (
		<ControlCard title='Job type'>
			<CheckboxGroup name='job-type-checkboxgroup' options={[]} value={value} onChange={onChange} />
		</ControlCard>
	);
}

export default memo(JobTypeControl);
