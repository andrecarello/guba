// -> vuex
import { mapGetters } 	from 'vuex'

// -> import helpers
import InterseptedImage from '@/Views/_Components/Helpers/InterseptedImage/index.vue';
import { slugify } from '@/Helpers/Misc';

// -> components
import Discount from '@/Views/_Components/Discount/index.vue';

export default {
  name: '',
  data() {
    return {
      id: this.$route.params.id
    }
  },
  components: {
		discount: Discount,

		// -> helpers
		InterseptedImage,
  },
  methods: {
		// -> helpers
		slugify
	},
  mounted() {
    _.controller('collection').get(this.id)
  },
  computed: {
    ...mapGetters('CollectionModel', ['collection'])
  }
}
