import 'server-only';

import { timer } from '../helpers';

export default abstract class InMemoryRepository {
	protected maxAge = 5 * 60 * 1000;

	private agesMap = new Map<string, Date | null>();
	private valuesMap = new Map<string, unknown>();

	protected async cache<T>(key: unknown[], cb: () => T): Promise<T> {
		const stringifiedKey = JSON.stringify(key);
		const age = this.agesMap.get(stringifiedKey)?.getTime();
		const now = new Date().getTime();

		const isStale = !age || now - age > this.maxAge;

		if (isStale) {
			console.log(stringifiedKey, 'stale!');
			// Simulating a very slow operation
			await timer(2000);

			const result = cb();

			this.agesMap.set(stringifiedKey, new Date());
			this.valuesMap.set(stringifiedKey, result);
		}

		return this.valuesMap.get(stringifiedKey) as T;
	}

	protected async invalidateCache(key: unknown[]) {
		const stringifiedKey = JSON.stringify(key);
		this.agesMap.set(stringifiedKey, null);
	}
}
