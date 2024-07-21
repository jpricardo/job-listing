import { Grid } from 'antd';

const { useBreakpoint } = Grid;

export const useIsMobile = () => {
	const breakpoints = useBreakpoint();
	const isDesktop = breakpoints.lg;

	const isMobile = isDesktop === undefined ? false : !isDesktop;

	return isMobile;
};
