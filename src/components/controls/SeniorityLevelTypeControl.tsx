import { memo } from 'react';

import { SeniorityLevelType } from '@/lib';

import ControlCard from '../containers/ControlCard';
import CheckboxGroup from '../inputs/CheckboxGroup';

type SeniorityLevelTypeControlProps = {
	value: SeniorityLevelType[];
	onChange: (value: SeniorityLevelType[]) => void;
};

function SeniorityLevelTypeControl({ value, onChange }: SeniorityLevelTypeControlProps) {
	const options: SeniorityLevelType[] = ['Junior', 'Associate', 'Senior', 'Lead'];

	return (
		<ControlCard title='Area'>
			<CheckboxGroup name='seniority-level-type-checkboxgroup' options={options} value={value} onChange={onChange} />
		</ControlCard>
	);
}

export default memo(SeniorityLevelTypeControl);
