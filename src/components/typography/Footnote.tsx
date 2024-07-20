'use client';
import { memo } from 'react';
import styled from 'styled-components';

const StyledBody = styled.span`
	font-size: 0.75rem;
	line-height: 0.75rem;
	font-weight: 400;
	opacity: 0.85;
`;

type FootnoteProps = React.HTMLAttributes<HTMLSpanElement>;
function Footnote({ ...props }: FootnoteProps) {
	return <StyledBody {...props} />;
}

export default memo(Footnote);
