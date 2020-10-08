// -> vuex
import { mapGetters } 	from 'vuex'


// @ is an alias to /src
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import VueSlickCarousel from 'vue-slick-carousel'


export default {
  name: 'banner',
  components: {
    carousel: VueSlickCarousel
  },
  mounted() {

  },
  computed: {

  },
  methods: {
    select(e) {
      console.log(e)
    }
  }
}
