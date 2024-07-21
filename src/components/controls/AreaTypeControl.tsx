import { memo } from 'react';

import { AreaType } from '@/lib';

import ControlCard from '../containers/ControlCard';
import CheckboxGroup from '../inputs/CheckboxGroup';

type AreaTypeControlProps = {
	value: AreaType[];
	onChange: (value: AreaType[]) => void;
};

function AreaTypeControl({ value, onChange }: AreaTypeControlProps) {
	const options: AreaType[] = ['Design', 'DevOps', 'Development', 'Management', 'QA'];

	return (
		<ControlCard title='Area type'>
			<CheckboxGroup
				name='area-type-checkboxgroup'
				options={options}
				value={value}
				onChange={(value) => onChange(value as AreaType[])}
			/>
		</ControlCard>
	);
}

export default memo(AreaTypeControl);
