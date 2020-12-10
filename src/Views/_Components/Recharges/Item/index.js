import { REFERER } from '@/config/Settings';

export default {
	name: 'RechargesItem',
	props: {
		price: {
			type: Number,
			required: true,
			default: () => console.log('RECHARGE ITEM: The price is required')
		},
		bonus: {
			type: String,
			required: false,
			default: ''
		},
		msisdn: {
			type: String,
			required: true,
			default: () => console.log('RECHARGE ITEM: The Msisdn is required')
		},
		uuid: {
			type: String,
			required: true,
			default: () => console.log('RECHARGE ITEM: The UUID is required')
		}
	},
	methods: {
		href: function() {
      let qs = ''
			const recharge = {
				amount: this.price > 0 ? this.price : '',
				msisdn: this.msisdn ? this.msisdn : '',
				uuid: this.uuid,
				origin: REFERER ? 'OI-VANTAGENS' : '',
        type: 'recharge'
			};

			Object.keys(recharge).map((key) => {
        let value = recharge[key]
        if (!!value) qs += key +'='+ value + '&'
      });

      qs = qs.slice(0, -1);
			return 'https://plano.mobi/checkout-recarga/?' + qs;
		}
	}
};
