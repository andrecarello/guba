// -> vuex
import { mapGetters } from 'vuex';

// @ is an alias to /src
import Modal from '@/Views/_Components/Modal/Offer/index.vue'

export default {
	name: 'Offer',
  components: {
    modal: Modal
  },
  data() {
    return {
      isOpenDetailModal: false
    }
  },
	mounted() {
		_.controller('offer').get(this.$route.params.id);
	},
	computed: {
		...mapGetters('OfferModel', [ 'offer' ])
	}
};
