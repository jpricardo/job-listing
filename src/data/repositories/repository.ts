import 'server-only';

export interface IRepository<T extends object | string | number> {
	find: T extends object ? (filters?: Partial<T>) => Promise<T | undefined> : (item?: T) => Promise<T | undefined>;
	findAll: T extends object ? (filters?: Partial<T>) => Promise<T[]> : (items?: T[]) => Promise<T[]>;
}
