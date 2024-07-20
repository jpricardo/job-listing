'use client';
import { memo } from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
	font-size: 0.85rem;
	line-height: 0.85rem;
	font-weight: 400;
`;

type LabelProps = React.HTMLAttributes<HTMLLabelElement> & { htmlFor?: string };
function Label({ ...props }: LabelProps) {
	return <StyledLabel {...props} />;
}

export default memo(Label);
