// @ is an alias to /src

// -> import core
import { mapGetters } from 'vuex';
import Settings from '@/config/Settings';

// -> import components
import LayoutContainer from '@/Views/_Components/Layout/Container/index.vue';
import LayoutButton from '@/Views/_Components/Layout/Button/index.vue';

import HeadersAuth from '@/Views/_Components/Headers/Auth/index.vue';

// -> import helpers
import { Masks } from '@/Helpers/Mask';
import { isTestNumber } from '@/Helpers/Misc';
import { Toast as toast } from '@/Helpers/Toast';

export default {
	name: 'Auth',
	data() {
		return {
			form: {
				msisdn: '',
				pin: ''
			},

			msisdnForm: true,
			pinForm: false,

			// -> helpers
			Masks: Masks,

			// -> loadings
			loading: false

			// -> controllers
		};
	},
	mounted() {
		Settings.title('Login');

		if (!!this.pin) {
			this.msisdnForm = !this.msisdnForm;
			this.pinForm = !this.pinForm;
		}
	},
	components: {
		container: LayoutContainer,
		btn: LayoutButton,
		HeadersAuth
	},
	methods: {
		toggleLoading() {
			this.loading = !this.loading;
			this.msisdnForm = !this.msisdnForm;
			this.pinForm = !this.pinForm;
		},
		submitMsisdn() {
			const testNumber = isTestNumber(this.form.msisdn);
			this.loading = !this.loading;

			if (testNumber.status) {
				setTimeout(() => {
					this.toggleLoading();
					_.controller('Auth').setPin('1808');
				}, 3500);
			} else {
				this.loading = !this.loading;
				toast('error', 'OPS, verifique se o código é o mesmo que foi enviado.', { time: 5000 });
			}
		},
		submitPin() {
			if (_.model('Auth').pin === this.form.pin) {
				setTimeout(() => {
					_.controller('Auth').setHash();
					this.$router.push({ name: 'Home' });
				}, 1500);
			} else {
				toast('error', 'OPS, verifique se o código é o mesmo que foi enviado.', { time: 5000 });
			}
		},
		changeMsisdn() {
			this.msisdnForm = true;
			this.pinForm = false;
		}
	},

	computed: {
		...mapGetters('AuthModel', [ 'pin' ])
	}
};
