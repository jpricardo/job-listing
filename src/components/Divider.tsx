import { memo } from 'react';

type DividerProps = {
	id?: string;
	className?: string;
	style?: React.CSSProperties;
};
function Divider({ style, ...props }: DividerProps) {
	return <div style={{ width: '100%', height: '1px', borderTop: '1px solid #c3c3c3', ...style }} {...props} />;
}

export default memo(Divider);
