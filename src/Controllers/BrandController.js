import axios from 'axios';

// -> import default controller
import Controller from './Controller';

class BrandController extends Controller {
	getAll() {
		axios
			.get('http://api.oston.io/oi-ofertas/v1/offers/companies')
			.then(({ data }) => {
				this.dispatch('BrandModel/saveBrands', data);
			})
			.catch((error) => console.log(error))
			.finally(() => {});
	}
}

export default BrandController;
