// -> vuex
import { mapGetters } from 'vuex';

// @ is an alias to /src

// -> import helpers
import LoadImage from '@/Views/_Components/Helpers/Image/index.vue';

// -> import icons
import OiIcon from '@/Views/_Components/Icons/Oi.vue';
import Msisdn from '@/Views/_Components/Layout/Msisdn/index.vue';
import Balance from '@/Views/_Components/Layout/Balance/index.vue';

export default {
	name: 'Navbar',
	components: {
    // -> layout
		OiIcon,
		Msisdn,
    Balance,

    // -> helpers
    loadImage: LoadImage
	},
	data() {
		return {
			isOpenMenu: true,
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
				}
			]
		};
	},
	mounted() {},
	computed: {}
};
