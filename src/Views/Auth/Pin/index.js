// @ is an alias to /src

// -> import core
import { mapGetters } from 'vuex';
import Settings from '@/config/Settings';

// -> import components
import LayoutButton from '@/Views/_Components/Layout/Button/index.vue';

// -> import helpers
import { Masks } from '@/Helpers/Mask';
import { isTestNumber } from '@/Helpers/Misc';
import { Toast as toast } from '@/Helpers/Toast';

export default {
	name: 'Auth',
	data() {
		return {
			form: {
				pin: ''
			},

			// -> helpers
			Masks: Masks,

			// -> loadings
			loading: false

			// -> controllers
		};
	},
	mounted() {
		Settings.title('Login');
	},
	components: {
		btn: LayoutButton
	},
	methods: {
		submitPin() {
			const pin = Masks.unset(this.form.pin);

			this.loading = !this.loading;

			if (isTestNumber(this.msisdn).status && pin === '1808') {
				setTimeout(() => {
					this.loading = !this.loading;
					_.controller('Auth').setHash();

					this.$router.push({ name: 'Home' });
				}, 2000);
			} else {
				toast('error', 'OPS, verifique se o código é o mesmo que foi enviado.');
			}
		}
	},

	computed: {
		...mapGetters('AuthModel', [ 'msisdn' ])
	}
};
