import { QueryClientContextProvider } from '@/context/QueryClientContext';
import { memo } from 'react';

type ProvidersProps = { children: React.ReactNode };
function Providers({ children }: ProvidersProps) {
	return <QueryClientContextProvider>{children}</QueryClientContextProvider>;
}

export default memo(Providers);
