import OiIcon from "@/Views/_Components/Icons/Oi.vue"

export default {
	name: 'HeadersAuth',

	props: {
		title: {
			type: String,
			required: false,
			default: 'VANTAGENS'
		},
		subtitle: {
			type: String,
			required: false,
			default: 'Bem-vindo ao seu canal'
		}
	},

	components: {
		OiIcon
	}
};
