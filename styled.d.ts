import 'styled-components';

import { Theme } from '@jpricardo/component-library';

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {}
}
