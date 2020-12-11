
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

import VueSlickCarousel from 'vue-slick-carousel';

export default {
	name: 'CarouselBanners',
	components: {
		carousel: VueSlickCarousel
	},
	methods: {
		select(e) {
			console.log(e);
		}
	}
};
