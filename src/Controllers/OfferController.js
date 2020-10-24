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
			.catch((error) => console.error(error))
			.finally(() => this.dispatch('LoadingModel/saveLoading', false));
	}
}

export default OfferController;
