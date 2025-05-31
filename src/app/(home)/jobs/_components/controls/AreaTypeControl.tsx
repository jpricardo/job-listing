'use client';
import { CheckboxGroup } from '@jpricardo/component-library';
import { memo } from 'react';

import ControlCard from '../containers/ControlCard';

type AreaTypeControlProps = {
	value: any[];
	onChange: (value: any[]) => void;
};

function AreaTypeControl({ value, onChange }: AreaTypeControlProps) {
	return (
		<ControlCard title='Area'>
			<CheckboxGroup name='area-type-checkboxgroup' options={[]} value={value} onChange={onChange} />
		</ControlCard>
	);
}

export default memo(AreaTypeControl);
