import { Flex } from 'antd';
import { memo } from 'react';

import Label from '../typography/Label';

type OptionType = string | number;
type CheckboxGroupProps = {
	options: OptionType[];

	value?: OptionType[];
	onChange?: (value: OptionType[]) => void;
};

function CheckboxGroup({ options, value, onChange }: CheckboxGroupProps) {
	return (
		<Flex vertical>
			{options.map((option, index) => {
				const checkboxName = `checkbox-item-${index}`;
				return (
					<Flex key={index} gap='0.25rem' align='center'>
						<input type='checkbox' id={checkboxName} name={checkboxName} />
						<Label htmlFor={checkboxName}>{option}</Label>
					</Flex>
				);
			})}
		</Flex>
	);
}

export default memo(CheckboxGroup);
