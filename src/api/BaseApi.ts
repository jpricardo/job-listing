import { timer } from '@/lib';

export default abstract class BaseApi {
	private delay: number = 1000;

	constructor(delay?: number) {
		if (delay !== undefined) {
			this.delay = delay;
		}
	}

	protected async mockRequest<TData>(data: TData) {
		await timer(this.delay);
		return data;
	}
}
