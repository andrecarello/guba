import axios from 'axios';

// -> import default controller
import Controller from './Controller';

class BrandController extends Controller {
  model = 'brand';

	getAll() {
		axios
			.get('https://cupomedia.com.br/api/services/1/companies')
			.then(({ data }) => {
				this.dispatch(this.model, 'brands', data);
			})
			.catch((error) => console.log(error))
			.finally(() => {});
	}
}

export default BrandController;
