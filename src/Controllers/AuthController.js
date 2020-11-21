import axios from 'axios';

// -> import default controller
import Controller from './Controller';

class AuthController extends Controller {
	// set constants
	model = 'auth';

	// set hash for login/access pages
	setHash() {
		this.dispatch('AuthModel/saveHash', hash());
	}

	// set data in storage
	set(key, value = null) {
		if (typeof key === 'object') {
			const obj = key;
			Object.keys(obj).map((k) => this.save(this.model, _.capitalize(k), obj[k]));
		} else {
			this.save(this.model, key, value);
		}
	}

	// TODO: fix this
	// request pin
	requestPin(msisdn, callback, errorCallback) {
		axios
			.post(`http://api.oston.io/oi-fidelidade/v2/auth/55${strOnlyNumber(msisdn)}/request-pin`)
			.then(({ data }) => {
        this.save(this.model, 'pin', data.password);

				callback();
			})
			.catch(errorCallback);
	}
}

export default AuthController;
