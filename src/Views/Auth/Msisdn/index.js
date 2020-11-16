// @ is an alias to /src

// -> import core
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
				msisdn: ''
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

    _.controller('auth').set({
      msisdn: '51992883359',
      pin: '1808',
      balance: '100,00'
    });
	},
	components: {
		btn: LayoutButton
	},
	methods: {
		submitMsisdn() {
			const msisdn = Masks.unset(this.form.msisdn);

			this.loading = !this.loading;

			if (isTestNumber(msisdn).status) {
				setTimeout(() => {
          _.controller('auth').set('msisdn', msisdn);

          this.$router.push('pin');
          this.loading = !this.loading;

          toast('success', 'Seu código de acesso é 1808');
				}, 2000);
			} else {
				setTimeout(() => {
					this.loading = !this.loading;
					toast('error', 'OPS. Você não possui acesso a esta plataforma.');
				}, 2000);
			}
		}
	}
};
