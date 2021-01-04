// -> import core
import Settings from '@/config/Settings';

// -> import components
import LayoutButton from '@/Views/_Components/Layout/Button/index.vue';

// -> import helpers
import { Masks } from '@/Helpers/Mask';
import { Toast as toast } from '@/Helpers/Toast';

// -> icons
import OiIcon from '@/Views/_Components/Icons/Oi.vue';

export default {
	name: 'Contact',
	data() {
		return {
			form: {
				name: 'André',
				msisdn: _.model('auth').msisdn,
				email: 'andre@oston.io',
				message: 'Teste de mensagem'
      },
      sended: false,

			// -> helpers
			Masks,

			// -> loadings
			loading: false
		};
	},
	mounted() {
    Settings.title('Fale Conosco');
    // this.$formulate;
	},
	components: {
		btn: LayoutButton,

		// -> icons
		OiIcon
	},
	methods: {
		submit() {
      this.loading = true;

      if(this.$refs.oston.value.length > 0) {
        toast('error', 'Não foi possível enviar a sua mensagem.')
        this.loading = false
      } else {
        setTimeout(() => {
          this.loading = false;
          this.sended = true;

          // Object.keys(this.form).map(field => this.form[field] = '');

          // toast('success', 'Seu contato foi enviado com sucesso.')
        }, 2500);
      }
		}
	}
};
