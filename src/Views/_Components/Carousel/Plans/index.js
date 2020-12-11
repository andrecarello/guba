import { mapGetters } from 'vuex';

// -> theme
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

// -> components
import VueSlickCarousel from 'vue-slick-carousel';
import Item from '@/Views/_Components/Carousel/Plans/Item/index.vue';

// -> helpers
import LoadImage from '@/Views/_Components/Helpers/Image/index.vue';

// -> icons
import { ChevronLeftIcon, ChevronRightIcon } from 'vue-feather-icons'


export default {
	name: 'CarouselPlans',
	components: {
		carouselPlans: VueSlickCarousel,
    item: Item,

    // -> helpers
    loadImage: LoadImage,

    // -> icons
    iconRight: ChevronRightIcon,
    iconLeft: ChevronLeftIcon
  },
  mounted() {
    _.controller('plan').getAll();
  },
	computed: {
    ...mapGetters('PlanModel', ['plans'])
  }
};
