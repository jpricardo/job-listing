import { memo } from 'react';

type LandingLayoutProps = Readonly<{ children: React.ReactNode }>;

function LandingLayout({ children }: LandingLayoutProps) {
	return <main className='flex flex-col items-center pt-[20vh]'>{children}</main>;
}

export default memo(LandingLayout);
