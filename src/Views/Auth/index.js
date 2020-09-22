// @ is an alias to /src

// -> import core
import { mapGetters } from 'vuex';
import Settings from '@/config/Settings';

// -> import components
import LayoutContainer from '@/Views/_Components/Layout/Container/index.vue';
import HeadersAuth from '@/Views/_Components/Headers/Auth/index.vue';

export default {
	name: 'Auth',
	mounted() {
		Settings.title('Login');

		if (!!this.pin) {
			this.msisdnForm = !this.msisdnForm;
			this.pinForm = !this.pinForm;
		}
	},
	components: {
		container: LayoutContainer,

		HeadersAuth
	}
};
