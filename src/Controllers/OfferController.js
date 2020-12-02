import axios from 'axios';

// -> import default controller
import Controller from './Controller';

class OfferController extends Controller {
  model = 'offer';
  loading = 'loading'

	get(id) {
		this.dispatch(this.loading, 'loading', true);

		axios
			.get('http://api.oston.io/oi-fidelidade/v2/offer/' + id)
			.then(({ data }) => {
				this.dispatch(this.model, 'offer', data);
			})
			.catch(({ response }) => {
				console.error(response.statusText);
			})
			.finally(() => this.dispatch(this.loading, 'loading', false));
	}

	getCoupon(id) {
		const msisdn = _.model('auth').msisdn;

		return axios.get(`http://api.oston.io/oi-fidelidade/v2/offer/${id}/voucher?phone=${msisdn}`);
	}
}

export default OfferController;
