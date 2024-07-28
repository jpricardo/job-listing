import { ThemeProvider } from '@jpricardo/component-library';
import { DefaultTheme, ThemeProvider as StyledThemeProvider } from 'styled-components';

type ThemeContextProviderProps = {
	theme: DefaultTheme;
	children?: React.ReactNode;
};

export default function ThemeContextProvider({ theme, children }: ThemeContextProviderProps) {
	return (
		<ThemeProvider theme={theme}>
			<StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
		</ThemeProvider>
	);
}
