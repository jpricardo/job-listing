'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createContext, memo, useContext, useEffect, useMemo } from 'react';

export interface IQueryClientContext extends QueryClient {}

// eslint-disable-next-line
const QueryClientContext = createContext<IQueryClientContext>(undefined!);

export const useQueryClientContext = () => useContext(QueryClientContext);

type Props = { children: React.ReactNode };

export default function QueryClientContextProvider({ children }: Props) {
	const queryClient = useMemo(() => new QueryClient({ defaultOptions: { queries: { staleTime: 60 * 1000 } } }), []);

	useEffect(() => {
		queryClient.invalidateQueries();
	});

	const context = useMemo<IQueryClientContext>(() => queryClient, [queryClient]);

	return (
		<QueryClientContext.Provider value={context}>
			<QueryClientProvider client={queryClient}>
				{children}
				<ReactQueryDevtools initialIsOpen={false} position='bottom' />
			</QueryClientProvider>
		</QueryClientContext.Provider>
	);
}
