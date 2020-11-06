import axios from 'axios';

// -> import default controller
import Controller from './Controller';

import { strOnlyNumber } from '../Helpers/Misc';

class SearchController extends Controller {
	static view() {
		return () => import(/* webpackChunkName: "search" */ '@/Views/Search/index.vue');
	}

	searchOffers(value, page = 1) {
        this.dispatch('LoadingModel/saveLoading', true);
        
        const { msisdn } = _.model('auth');

		axios
			.get(`http://api.oston.io/oi-fidelidade/v2/services/1/search?q=${value}&page=${page}&phone=${strOnlyNumber(msisdn)}`)
			.then(({ data }) => {
                console.log(data.pagination.data);
				this.dispatch('SearchModel/saveResult', data.pagination.data);
			})
			.catch(({ response }) => {
				console.error(response.statusText);
			})
			.finally(() => this.dispatch('LoadingModel/saveLoading', false));
	}

}

export default SearchController;
