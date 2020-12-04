import axios from 'axios';

// -> import default controller
import Controller from './Controller';

class AuthController extends Controller {
	// set constants
	model = 'auth';

	// set hash for login/access pages
	setHash() {
		this.dispatch(this.model, 'hash', hash());
	}

  // set data in storage
  set(key, value = null) {
    this.dispatch(this.model, key, value)
  }

	// TODO: fix this
	// request pin
	requestPin(msisdn, callback, errorCallback) {
		axios
			.post(`http://api.oston.io/oi-fidelidade/v2/auth/55${strOnlyNumber(msisdn)}/request-pin`)
			.then(({ data }) => {
        this.dispatch(this.model, 'pin', data.password);

				callback();
			})
			.catch(errorCallback);
  }

  logout() {
    this._logout(this.model)
  }
}

export default AuthController;
