// -> import helpers
import InterseptedImage from '@/Views/_Components/Helpers/InterseptedImage/index.vue';
import { slugify } from '@/Helpers/Misc';

// -> icons
import { ChevronDownIcon } from 'vue-feather-icons'
import OiIcon from "@/Views/_Components/Icons/Oi.vue"

// -> import skeleton
// import SkeletonFaq from '@/Views/_Skeletons/Faq/index.vue';

export default {
	name: 'Faq',
	data() {
		return {
      loading: true
		};
	},
	components: {
    OiIcon,
    ChevronDownIcon
  },
  methods: {
    toggleState(id) {
      console.log(id)
      this.$refs[id].classList.add('active')
    }
  },
	mounted() {
		setTimeout(() => (this.loading = false), 2000);
	}
};
