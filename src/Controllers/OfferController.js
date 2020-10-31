import axios from 'axios';

// -> import default controller
import Controller from './Controller';

class OfferController extends Controller {
	static view() {
		return () => import(/* webpackChunkName: "offer" */ '@/Views/Offer/index.vue');
	}

	get(id) {
		this.dispatch('LoadingModel/saveLoading', true);

		axios
			.get('http://api.oston.io/oi-fidelidade/v2/offer/' + id)
			.then(({ data }) => {
				this.dispatch('OfferModel/saveOffer', data);
			})
			.catch(({ response }) => {
				console.error(response.statusText);
			})
			.finally(() => this.dispatch('LoadingModel/saveLoading', false));
	}

	getCoupon(id) {
		const msisdn = _.model('auth').msisdn;

		return axios.get(`http://api.oston.io/oi-fidelidade/v2/offer/${id}/voucher?phone=${msisdn}`);
	}
}

export default OfferController;
