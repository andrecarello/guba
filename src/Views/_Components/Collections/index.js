// -> import helpers
import InterseptedImage from '@/Views/_Components/Helpers/InterseptedImage/index.vue'

// -> components
import Discount from '@/Views/_Components/Discount/index.vue'

// -> import icons
import { ChevronRightIcon } from 'vue-feather-icons'

export default {
  name: 'Collections',
  props: {
    content: {
      type: Object,
      required: true,
      default: () => console.log('The content are required')
    }
  },
  components: {
    discount: Discount,

    // -> helpers
    InterseptedImage,

    // -> icons
    ChevronRightIcon
  },
}
