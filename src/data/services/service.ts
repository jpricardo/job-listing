import { timer } from '../helpers';

export default class Service {
	private delay = process.env.NODE_ENV === 'test' ? 0 : 500;

	/**
	 * Simulating a slow request over the network
	 */
	protected async request<T>(response: T): Promise<T> {
		await timer(this.delay);
		return response;
	}
}
