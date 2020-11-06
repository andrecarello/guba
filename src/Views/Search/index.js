
export default {
	name: 'Search',
	components: {

    },
    data() {
        return{
            query: this.$route.params.query,
        }
    },
    mounted() {
        _.controller('Search').searchOffers(this.query);
    }
};
