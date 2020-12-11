import axios from 'axios';

import Controller from './Controller';

class PlanController extends Controller {
  model = 'plan';
  loading = 'loading';
	baseUrl = 'http://api.oston.io/oi-go/v1/read-plans?phone=55';

	getAll() {
    const { msisdn } = _.model('auth');
		axios
			.get(this.baseUrl + msisdn)
			.then(({ data }) => {
        this.dispatch(this.model, 'plans', data[0])
			})
			.catch((response) => console.error(response))
			.finally(() => {});
	}
}

export default PlanController;
