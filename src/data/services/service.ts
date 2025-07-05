import { timer } from '../helpers';

export default class Service {
	/**
	 * Simulating a slow request over the network
	 */
	protected async request<T>(response: T): Promise<T> {
		await timer(500);
		return response;
	}
}
