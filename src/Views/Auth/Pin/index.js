// @ is an alias to /src

// -> import core
import { mapGetters } from 'vuex';
import Settings from '@/config/Settings';

// -> import components
import LayoutButton from '@/Views/_Components/Layout/Button/index.vue';

// -> import helpers
import { Masks } from '@/Helpers/Mask';
import { isTestNumber, hash } from '@/Helpers/Misc';
import { Toast as toast } from '@/Helpers/Toast';

// -> import icons
import { RefreshCwIcon } from 'vue-feather-icons';

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
			loading: false,
			sendingPin: false

			// -> controllers
		};
	},
	mounted() {
		Settings.title('Login');
	},
	components: {
		btn: LayoutButton,

		// -> icons
		RefreshCwIcon
	},
	methods: {
		submitPin() {
			const pin = Masks.unset(this.form.pin);

			this.loading = !this.loading;

			if (isTestNumber(this.msisdn).status && pin === '1808') {
				setTimeout(() => {
					this.loading = !this.loading;
					_.controller('Auth').set({
						pin: pin,
            balance: '59,31',
            hash: hash()
					});

					this.$router.push({ name: 'Home' });
				}, 2000);
			} else {
				setTimeout(() => {
					this.loading = !this.loading;
					toast('error', 'OPS, verifique se o código é o mesmo que foi enviado.');
				}, 2000);
			}
		},

		resendPin() {
			this.sendingPin = !this.sendingPin;

			setTimeout(() => {
				this.sendingPin = !this.sendingPin;

				toast('success', 'Seu código de acesso é 1808');
			}, 2500);
		}
	},

	computed: {
		...mapGetters('AuthModel', [ 'msisdn' ])
	}
};
