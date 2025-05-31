'use client';
import { Select } from '@jpricardo/component-library';
import { memo } from 'react';

import ControlCard from '../containers/ControlCard';

type OrderByControlProps = {
	value: any;
	onChange: (value: any) => void;
};
function OrderByControl({ value, onChange }: OrderByControlProps) {
	return (
		<ControlCard title='Order by'>
			<Select
				value={value}
				options={['Most relevant', 'Most recent', 'Best pay']}
				onChange={onChange}
				style={{ width: '100%' }}
			/>
		</ControlCard>
	);
}

export default memo(OrderByControl);
