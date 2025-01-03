import HttpAdapter from '@/lib/HttpAdapter';

import { LoginResponseDto } from './dto/login-response.dto';
import { LoginDto } from './dto/login.dto';

export interface IAuthApi {
	login: (payload: LoginDto) => Promise<LoginResponseDto>;
}

export default class AuthApi implements IAuthApi {
	constructor(private readonly adapter = new HttpAdapter()) {}

	public async login(payload: LoginDto) {
		return this.adapter.postRequest<LoginDto, LoginResponseDto>('/auth/login', payload);
	}
}
