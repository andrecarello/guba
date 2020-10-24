export const defaultState = {
	offer: []
};

export default {
	namespaced: true,

	state: defaultState,

	getters: {
		offer: (state) => state.offer
	},

	actions: {
		reset({ commit }) {
			commit('reset');
		},
		saveOffer({ commit }, value) {
			commit('setOffer', value);
		}
	},

	mutations: {
		reset(state) {
			Object.keys(defaultState).map((key) => {
				state[key] = defaultState[key];
			});
		},
		setOffer(state, value) {
			state.offer = value;
		}
	}
};
