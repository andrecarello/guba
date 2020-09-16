import Anonymous from '../Helpers/Anonymous';
import Interactions from '../Helpers/Interactions';

export const PROJECT_NAME = 'Oi Vantagens';
export const PROJECT_SLUG_NAME = 'oi-vantagens';
export const CLIENT_NAME = 'OI';
export const ANONYMOUS = 'uuid';
export const INTERACTIONS = true;
export const TEST_EMAIL = '';
export const TEST_PASSWORD = '';
export const CLIENT_EMAIL_SUPPORT = '';

export const CLUSTERS = {
	pre: 1,
	recarga: 2,
	controle: 3,
	exclusivo: 4
};

export default {
	title: (page = '') => {
		if (page) document.title = `${page} | ${PROJECT_NAME}`;
		else document.title = PROJECT_NAME;
	},

	ga: (text) => {
		console.log(text)
	},

	anonymous: () => {
		if (!localStorage.getItem(ANONYMOUS)) return Anonymous.init();

		return null;
	},

	interactions: (schema) => {
		if (INTERACTIONS) return Interactions.init({ schema: schema });

		return null;
	}
};
