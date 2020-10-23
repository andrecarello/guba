import axios from 'axios';

// -> import default controller
import Controller from './Controller';

class CompanyController extends Controller {
	getCompanies() {
    axios.get(`http://api.oston.io/oi-ofertas/v1/offers/companies`)
    .then(({data}) => console.log(data))
    .catch((response) => console.error(response))
    .finally(() => {})
  }
}

export default CompanyController;
