import axios from 'axios';

// -> import default controller
import Controller from './Controller';

class BrandController extends Controller {
  model = 'brand';

	getAll() {
		axios
			.get('http://api.oston.io/oi-ofertas/v1/offers/companies')
			.then(({ data }) => {
				this.dispatch(this.model, 'brands', data);
			})
			.catch((error) => console.log(error))
			.finally(() => {});
	}
}

export default BrandController;
