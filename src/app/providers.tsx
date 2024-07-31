'use client';
import { ThemeBuilder } from '@jpricardo/component-library';
import { memo } from 'react';

import QueryClientContextProvider from '@/context/QueryClientContext';
import ThemeContextProvider from '@/context/ThemeContext';

type ProvidersProps = { children: React.ReactNode };
function Providers({ children }: ProvidersProps) {
	const theme = ThemeBuilder.getLightTheme();

	return (
		<ThemeContextProvider theme={theme}>
			<QueryClientContextProvider>{children}</QueryClientContextProvider>
		</ThemeContextProvider>
	);
}

export default memo(Providers);
