import axios from 'axios';

import { timer } from '@/lib';

export default class HttpAdapter {
	private readonly api = axios.create({ baseURL: this.baseUrl });

	constructor(
		private baseUrl: string = '',
		private delay: number = 1000,
	) {}

	public async mockRequest<TData>(data?: TData) {
		await timer(this.delay);
		return data as TData;
	}

	public async postRequest<TPayload, TData = void>(url: string, payload: TPayload) {
		const response = await this.api.post<TData>(url, payload);

		return response.data;
	}

	public async getRequest<TData>(url: string) {
		const response = await this.api.get<TData>(url);

		return response.data;
	}

	public async patchRequest<TPayload, TData = void>(url: string, payload: TPayload) {
		const response = await this.api.patch<TData>(url, payload);

		return response.data;
	}

	public async deleteRequest<TData = void>(url: string) {
		const response = await this.api.delete<TData>(url);

		return response.data;
	}
}
