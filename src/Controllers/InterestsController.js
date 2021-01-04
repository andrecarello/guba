import axios from 'axios';

// -> import default controller
import Controller from './Controller';

class BrandController extends Controller {
	model = 'interests';
	loading = 'loading';

	getAll(callback) {
		this.dispatch(this.loading, 'loading', true);

		axios
			.get('http://api.oston.io/oi-fidelidade/v2/interests')
			.then(({ data }) => {
				this.dispatch(this.model, 'areas', data.data);
				callback();
			})
			.catch((error) => console.log(error))
			.finally(() => this.dispatch(this.loading, 'loading', false));
	}

	get() {
		// const { msisdn } = _.model('auth');

		const msisdn = '51222222222';

		axios
			.get('http://api.oston.io/oi-fidelidade/v2/interests?phone=' + msisdn)
			.then(({ data }) => this.dispatch(this.model, 'selected', data.data));
	}
}

export default BrandController;
