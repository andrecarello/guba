export const defaultState = {
	collections: [],
};

export default {
	namespaced: true,

	state: defaultState,

	getters: {
		collections: (state) => state.collections,
	},

	actions: {
		reset({ commit }) {
			commit('reset');
		},
		saveCollections({ commit }, value) {
			commit('setCollections', value);
		},
	},

	mutations: {
		reset(state) {
			Object.keys(defaultState).map((key) => {
				state[key] = defaultState[key];
			});
		},
		setCollections(state, value) {
			state.collections = value;
		},
	}
};
