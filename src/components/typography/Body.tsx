'use client';
import { memo } from 'react';
import styled from 'styled-components';

const StyledBody = styled.span`
	font-size: 0.85rem;
	line-height: 0.85rem;
	font-weight: 400;
`;

type BodyProps = React.HTMLAttributes<HTMLSpanElement>;
function Body({ ...props }: BodyProps) {
	return <StyledBody {...props} />;
}

export default memo(Body);
