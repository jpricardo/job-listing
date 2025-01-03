import AuthApi, { IAuthApi } from './auth.api';
import { LoginDto } from './dto/login.dto';

export default class AuthService {
	constructor(private api: IAuthApi = new AuthApi()) {}

	public async login(payload: LoginDto) {
		return this.api.login(payload);
	}
}
