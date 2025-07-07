export function parseSearchParams<T extends object>(searchParams?: Partial<T>): Partial<T> {
	if (!searchParams) return {};

	for (const key in searchParams) {
		try {
			searchParams[key] = JSON.parse(searchParams[key] as string) as T[typeof key];
		} catch {
			searchParams[key] = searchParams[key] as string as T[typeof key];
		}
	}

	return searchParams;
}

export function isObjectEmpty<T extends object>(obj: T) {
	return Object.keys(obj).length === 0;
}
