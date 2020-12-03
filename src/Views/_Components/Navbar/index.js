// -> vuex
import { mapGetters } from 'vuex';

// @ is an alias to /src

// -> import helpers
import LoadImage from '@/Views/_Components/Helpers/Image/index.vue';

// -> import icons
import OiIcon from '@/Views/_Components/Icons/Oi.vue';
import Msisdn from '@/Views/_Components/Layout/Msisdn/index.vue';
import Balance from '@/Views/_Components/Layout/Balance/index.vue';
import Notifications from '@/Views/_Components/Notifications/index.vue'

export default {
	name: 'Navbar',
	components: {
    // -> layout
		OiIcon,
		Msisdn,
    Balance,
    Notifications,

    // -> helpers
    loadImage: LoadImage
	},
	data() {
		return {
			isOpenMenu: false,
			items: [
				{
					icon: 'coupon',
					text: 'Meus cupons',
					url: 'cupons'
				},
				{
					icon: 'interests',
					text: 'Meus interesses',
					url: ''
        },
        {
          icon: 'doubts',
          text: 'Dúvidas',
          url: ''
        },
        {
          icon: 'terms',
          text: 'Termos',
          url: 'termos'
        },
        {
          icon: 'faq',
          text: 'FAQ',
          url: 'faq'
        },
        {
          icon: 'logout',
          text: 'Sair',
          url: ''
        }
			]
		};
	},
	mounted() {},
	computed: {}
};
