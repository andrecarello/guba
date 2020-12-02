import LoadingIcon from "@/Views/_Components/Icons/Loading/index.vue";

export default {
	name: 'Button',
	components: {
		LoadingIcon
	},
	props: {
		type: {
			type: String,
			required: false,
			default: 'submit'
		},
		text: {
			type: String,
			required: true,
			default: () => console.log('The text value is required')
    },
    loadingText: {
      type: String,
      required: false,
      default: 'Clique aqui'
    },
		state: {
			type: Boolean,
			required: false,
			default: false
		},
		fill: {
			type: String,
			required: false,
			default: "#ff6d00"
    },
    stroke: {
      type: String,
      required: false,
      default: '#ff6d00'
    },
		href: {
			type: String,
			required: false,
			default: ''
		}
	}
}
