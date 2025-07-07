import 'server-only';

export interface IRepository<T> {
	find(filters?: Partial<T>): Promise<T | undefined>;
	findAll(filters?: Partial<T>): Promise<T[]>;
}
