export const defaultState = {
	brands: [],
};

export default {
	namespaced: true,

	state: defaultState,

	getters: {
		brands: (state) => state.brands
	},

	actions: {
		reset({ commit }) {
			commit('reset');
		},
		saveBrands({ commit }, value) {
			commit('setBrands', value);
		}
	},

	mutations: {
		reset(state) {
			Object.keys(defaultState).map((key) => {
				state[key] = defaultState[key];
			});
		},
		setBrands(state, value) {
			state.brands = value;
		}
	}
};
