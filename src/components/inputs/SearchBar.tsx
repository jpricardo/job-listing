import { TextInput, TextInputProps } from '@jpricardo/component-library';
import { memo } from 'react';

type SearchBarProps = TextInputProps;
function SearchBar({ style, ...props }: SearchBarProps) {
	return <TextInput placeholder='Searchbar' type='text' style={{ ...style }} {...props} />;
}

export default memo(SearchBar);
