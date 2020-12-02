export const defaultState = {
	result: [],
	lastPage: 0
};

export default {
	namespaced: true,

	state: defaultState,

	getters: {
		result: (state) => state.result,
		lastPage: (state) => state.lastPage
	},

	actions: {
		reset({ commit }) {
			commit('reset');
		},
		saveResult({ commit }, value) {
			commit('setResult', value);
		},
		saveLastPage({ commit }, value) {
			commit('setLastPage', value);
		}
	},

	mutations: {
		reset(state) {
			Object.keys(defaultState).map((key) => {
				state[key] = defaultState[key];
			});
		},
		setResult(state, value) {
			state.result = value;
		},
		setLastPage(state, value) {
			state.lastPage = value;
		}
	}
};
