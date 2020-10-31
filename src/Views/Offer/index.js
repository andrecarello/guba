// -> vuex
import { mapGetters } from 'vuex';

// -> helpers
import InterseptedImage from '@/Views/_Components/Helpers/InterseptedImage/index.vue';
import LoadingComponent from '@/Views/_Components/Helpers/Loading/index.vue';
import { bodyOverflow } from '@/Helpers/Misc';

// @ is an alias to /src
import ModalOffer from '@/Views/_Components/Modal/Offer/index.vue';
import ModalCoupon from '@/Views/_Components/Modal/Coupon/index.vue';

// -> import skeleton
import skeletonOffer from '@/Views/_Skeletons/Offer/index.vue';

export default {
	name: 'Offer',
	components: {
		modalOffer: ModalOffer,
		modalCoupon: ModalCoupon,

		// -> helpers
		InterseptedImage,
		loading: LoadingComponent,

		// -> skeletons
		skeletonOffer
	},
	data() {
		return {
			voucher: '',

			// -> states
			isOpenDetailModal: false,
			isOpenCouponModal: false,
			isLoadingVoucher: false
		};
	},
	methods: {
		requestCoupon: function(id) {
			this.isLoadingVoucher = true;

			_.controller('offer')
				.getCoupon(id)
				.then(({ data }) => {
					this.voucher = data.code;
				})
				.catch(({ response }) => console.log(response))
				.finally(() => {
					this.isOpenCouponModal = !this.isOpenCouponModal;
					this.isLoadingVoucher = false;
				});
		},
		toggleModal: function() {
			this.isOpenDetailModal = !this.isOpenDetailModal;
			bodyOverflow(this.isOpenDetailModal);
		}
	},
	mounted() {
		_.controller('offer').get(this.$route.params.id);
	},
	computed: {
		...mapGetters('OfferModel', [ 'offer' ]),
		...mapGetters('LoadingModel', [ 'loading' ])
	}
};
