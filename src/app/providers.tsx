'use client';
import { lightTheme, ThemeProvider } from '@jpricardo/component-library';
import { memo } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { QueryClientContextProvider } from '@/context/QueryClientContext';

type ProvidersProps = { children: React.ReactNode };
function Providers({ children }: ProvidersProps) {
	return (
		<ThemeProvider theme={lightTheme}>
			<StyledThemeProvider theme={lightTheme}>
				<QueryClientContextProvider>{children}</QueryClientContextProvider>
			</StyledThemeProvider>
		</ThemeProvider>
	);
}

export default memo(Providers);
