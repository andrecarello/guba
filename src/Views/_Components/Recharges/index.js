import Item from '@/Views/_Components/Recharges/Item/index.vue';

export default {
	name: 'Recharges',
	data() {
		return {
      values: require('@/config/rechargeValues.js').default.values,
      uuid: window.localStorage.getItem('IAMOston'),
      msisdn: _.model('auth').msisdn
		};
	},
	components: {
		item: Item
	}
};
