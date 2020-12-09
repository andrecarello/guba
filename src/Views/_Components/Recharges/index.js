import Item from '@/Views/_Components/Recharges/Item/index.vue';

export default {
	name: 'Recharges',
	data() {
		return {
			values: require('@/config/rechargeValues.js').default.values
		};
	},
	components: {
		item: Item
	}
};
