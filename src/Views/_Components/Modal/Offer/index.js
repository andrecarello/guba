// @ is an alias to /src

// -> import icons
import { ChevronLeftIcon, ChevronRightIcon } from 'vue-feather-icons'

export default {
  name: 'Modal-Offer',
  props: {
    content: {
      type: Object | Array,
      required: true,
      default: () => console.log('The content is required')
    }
  },
	components: {
    ChevronLeftIcon,
    ChevronRightIcon
  },
	mounted() {},
	computed: {}
};
