// -> vuex
import { mapGetters } from 'vuex';

// -> settings
import Settings from '@/config/Settings';

// -> helpers
import InterseptedImage from '@/Views/_Components/Helpers/InterseptedImage/index.vue';
import LoadingComponent from '@/Views/_Components/Helpers/Loading/index.vue';
import LoadImage from '@/Views/_Components/Helpers/Image/index.vue';
import { bodyOverflow } from '@/Helpers/Misc';
import { isClient, offerPermission } from '@/Helpers/Auth';

// -> modal
import ModalOffer from '@/Views/_Components/Modal/Offer/index.vue';
import ModalCoupon from '@/Views/_Components/Modal/Coupon/index.vue';

// -> import skeleton
import skeletonOffer from '@/Views/_Skeletons/Offer/index.vue';


const Recharges = () => import('@/Views/_Components/Recharges/index.vue');
const Plans = () => import('@/Views/_Components/Carousel/Plans/index.vue');

export default {
	name: 'Offer',
	components: {
    recharges: Recharges,
    plans: Plans,

    // -> modal
		modalOffer: ModalOffer,
		modalCoupon: ModalCoupon,

		// -> helpers
		InterseptedImage,
		loadImage: LoadImage,
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
    isClient,
    offerPermission,
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
		},
		setTitle: function() {
			Settings.title(_.model('offer').offer.title);
    },
    checkOffer: function (offer) {
      if (!!offer.pivot) return Number(offer.pivot.cluster)
      else if (!!offer.cluster) return Number(offer.cluster)
    }
	},
	mounted() {
    const { id } = this.$route.params;
    console.log(this.offer)

		if (Number(_.model('offer').offer.id) !== Number(id)) {
			_.controller('offer').get(id, () => {
				this.setTitle();
			});
		} else {
			this.setTitle();
		}
	},
	computed: {
		...mapGetters('OfferModel', [ 'offer' ]),
		...mapGetters('LoadingModel', [ 'loading' ])
	}
};
