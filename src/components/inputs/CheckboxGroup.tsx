import { Flex } from 'antd';
import { memo } from 'react';

import Label from '../typography/Label';

type OptionType = string | number;

type CheckboxGroupProps<T extends OptionType> = {
	name: string;

	options: T[];
	value?: T[];
	onChange?: (value: T[]) => void;
};

function CheckboxGroup<T extends OptionType>({ name, options, value, onChange }: CheckboxGroupProps<T>) {
	const addOptionToValue = (option: T, value?: T[]) => {
		return [...(value || []), option];
	};

	const removeOptionFromValue = (option: T, value?: T[]) => {
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

export default memo(CheckboxGroup) as typeof CheckboxGroup;
