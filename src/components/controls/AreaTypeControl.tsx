import { CheckboxGroup } from '@jpricardo/component-library';
import { memo } from 'react';

import { AreaType } from '@/services/job/entities/job.entity';

import ControlCard from '../containers/ControlCard';

type AreaTypeControlProps = {
	value: AreaType[];
	onChange: (value: AreaType[]) => void;
};

function AreaTypeControl({ value, onChange }: AreaTypeControlProps) {
	const options: AreaType[] = ['Design', 'DevOps', 'Development', 'Management', 'QA'];

	return (
		<ControlCard title='Area'>
			<CheckboxGroup name='area-type-checkboxgroup' options={options} value={value} onChange={onChange} />
		</ControlCard>
	);
}

export default memo(AreaTypeControl);
