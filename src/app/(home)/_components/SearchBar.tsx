import { Input, InputProps } from '@jpricardo/component-library';
import { memo } from 'react';

type SearchBarProps = InputProps;
function SearchBar({ style, ...props }: SearchBarProps) {
	return <Input placeholder='Searchbar' type='text' style={{ ...style }} {...props} />;
}

export default memo(SearchBar);
