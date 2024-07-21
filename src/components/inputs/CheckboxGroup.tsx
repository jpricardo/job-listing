import { Flex } from 'antd';
import { memo } from 'react';

import Label from '../typography/Label';

type OptionType = string | number;

type CheckboxGroupProps = {
	name: string;

	options: OptionType[];
	value?: OptionType[];
	onChange?: (value: OptionType[]) => void;
};

function CheckboxGroup({ name, options, value, onChange }: CheckboxGroupProps) {
	const addOptionToValue = (option: OptionType, value?: OptionType[]) => {
		return [...(value || []), option];
	};

	const removeOptionFromValue = (option: OptionType, value?: OptionType[]) => {
		return value?.filter((item) => option !== item) || [];
	};

	return (
		<Flex vertical>
			{options.map((option, index) => {
				const checkboxName = `${name}-checkbox-item-${index}`;
				return (
					<Flex key={index} gap='0.25rem' align='center'>
						<input
							type='checkbox'
							id={checkboxName}
							name={checkboxName}
							checked={value?.includes(option)}
							onChange={(e) => {
								if (e.target.checked) return onChange?.(addOptionToValue(option, value));
								return onChange?.(removeOptionFromValue(option, value));
							}}
						/>
						<Label htmlFor={checkboxName}>{option}</Label>
					</Flex>
				);
			})}
		</Flex>
	);
}

export default memo(CheckboxGroup);
