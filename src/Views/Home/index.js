// -> vuex
import { mapGetters } 	from 'vuex'


// @ is an alias to /src



export default {
	name: 'Home',
	components: {

	},
	mounted() {
		_.controller('collection').getCollections()
	},
	computed: {

	}
}
