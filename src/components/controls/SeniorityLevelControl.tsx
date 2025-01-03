import { CheckboxGroup } from '@jpricardo/component-library';
import { memo } from 'react';

import { seniorityLeveloptions } from '@/lib';
import { SeniorityLevel } from '@/services/job/entities/job.entity';

import ControlCard from '../containers/ControlCard';

type SeniorityLevelControlProps = {
	value: SeniorityLevel[];
	onChange: (value: SeniorityLevel[]) => void;
};

function SeniorityLevelControl({ value, onChange }: SeniorityLevelControlProps) {
	return (
		<ControlCard title='Seniority'>
			<CheckboxGroup
				name='seniority-level-checkboxgroup'
				options={seniorityLeveloptions}
				value={value}
				onChange={onChange}
			/>
		</ControlCard>
	);
}

export default memo(SeniorityLevelControl);
