export const defaultState = {
	result: []
};

export default {
	namespaced: true,

	state: defaultState,

	getters: {
		result: (state) => state.result
	},

	actions: {
		reset({ commit }) {
			commit('reset');
		},
		saveResult({ commit }, value) {
			commit('setResult', value);
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
		}
	}
};
