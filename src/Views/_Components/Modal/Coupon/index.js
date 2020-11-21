// -> import icons
import { ChevronLeftIcon, CopyIcon, CheckIcon } from 'vue-feather-icons';

export default {
  name: 'ModalCoupon',
	components: {
		// -> icons
    ChevronLeftIcon,
    CopyIcon,
    CheckIcon
	},
	props: {
		voucher: {
			type: String,
			required: true,
			default: () => console.log('The voucher is required')
    },
    offer: {
      type: Object | Array,
      required: true,
      default: () => console.log('The discount is required')
    },
	},
	methods: {
    onCopy: function() {
      this.isCopiedVoucher = true
    },
    onError: function() {
      console.log('error')
    },
    toggleModal: function () {
      this.$parent.isOpenCouponModal = !this.$parent.isOpenCouponModal
      setTimeout(() => this.isCopiedVoucher = false, 200)
    }
  },
  data() {
    return {
      isCopiedVoucher: false
    }
  }
};
