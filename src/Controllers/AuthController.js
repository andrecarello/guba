import axios from 'axios';

// -> import helpers
import { strOnlyNumber, hash } from '@/Helpers/Misc';

// -> import default controller
import Controller from './Controller';

class AuthController extends Controller {
	static view(file) {
		if (!!file) {
			return () => import(/* webpackChunkName: "auth" */ `@/Views/Auth/${file}/index.vue`)
		}
		return () => import(/* webpackChunkName: "auth" */ '@/Views/Auth/index.vue');
	}

	setHash() {
		this.dispatch('AuthModel/saveHash', hash())
	}

	setMsisdn(value) {
		this.dispatch('AuthModel/saveMsisdn', value)
	}

	setPin(value) {
		this.dispatch('AuthModel/savePin', value)
	}

	requestPin(msisdn, callback, errorCallback) {
		axios
			.post(`http://api.oston.io/oi-fidelidade/v2/auth/55${strOnlyNumber(msisdn)}/request-pin`)
			.then(({ data }) => {
				this.dispatch('AuthModel/savePin', data.password);

				callback();
			})
			.catch(errorCallback);
	}
}

export default AuthController;
