// -> vuex
import { mapGetters } from 'vuex';

import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

import VueSlickCarousel from 'vue-slick-carousel';

// Helpers
import { friendCouponDay, giftcardDay, migrationGiftcardDays } from "@/Helpers/Auth.js";
import { hash } from "@/Helpers/Misc"

export default {
	name: 'CarouselBanners',
	components: {
		carousel: VueSlickCarousel
	},
	methods: {
		friendCouponDay,
		giftcardDay,
		migrationGiftcardDays,
		select(e) {
			console.log(e);
		},
		redirectGiftMigration: function () {
			if (window.location.href.includes('localhost')) {
				window.open('http://localhost:8080/#/', '_blank')
			} else {
				window.open('http://oivantagens.com/giftcard/#/', '_blank')
			}
		},
		redirectRedeem: function () {
			const hashParam = hash();
			sessionStorage.setItem('@giftcardLogin', hashParam);
			if (window.location.href.includes('localhost')) {
				window.open(`http://localhost:8080/#/auth?phone=${this.msisdn}`, '_blank')
			} else {
				const hashParam = hash();
				sessionStorage.setItem('@giftcardLogin', hashParam);
				window.open(`http://stage-giftcard.oivantagens.com/#/auth?hash=${hashParam}`, '_blank')
			}

		},
		redirectMigration: function (url) {
			this.$router.push(url);
		}
	},
	computed: {
		...mapGetters('AuthModel', ['cluster'])
	}
};
