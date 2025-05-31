'use client';
import { CheckboxGroup } from '@jpricardo/component-library';
import { memo } from 'react';

import ControlCard from '../containers/ControlCard';

type SeniorityLevelControlProps = {
	value: any[];
	onChange: (value: any[]) => void;
};

function SeniorityLevelControl({ value, onChange }: SeniorityLevelControlProps) {
	return (
		<ControlCard title='Seniority'>
			<CheckboxGroup name='seniority-level-checkboxgroup' options={[]} value={value} onChange={onChange} />
		</ControlCard>
	);
}

export default memo(SeniorityLevelControl);
