// -> import helpers
import LoadImage from '@/Views/_Components/Helpers/Image/index.vue';

// -> import icons
import OiIcon from '@/Views/_Components/Icons/Oi.vue';
import Msisdn from '@/Views/_Components/Layout/Msisdn/index.vue';
import Balance from '@/Views/_Components/Layout/Balance/index.vue';
import Notifications from '@/Views/_Components/Notifications/index.vue';

// -> import loading
import Loading from '@/Views/_Components/Helpers/Loading/index.vue';

export default {
	name: 'Navbar',
	components: {
		// -> layout
		OiIcon,
		Msisdn,
		Balance,
		Notifications,

		// -> helpers
		loadImage: LoadImage,

		// -> loadings
		Loading
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
					url: 'meus-interesses'
				},
				{
					icon: 'doubts',
					text: 'Dúvidas',
					url: 'fale-conosco'
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
				}
			],

			// -> loadings
			logoutLoading: false
		};
	},
	methods: {
		logout: function() {
			this.logoutLoading = true;

			setTimeout(() => {
				this.logoutLoading = false;
				this.isOpenMenu = false;
				this.$router.push({ name: 'Auth' });
				_.controller('auth').logout();
			}, 2500);
		}
	}
};
