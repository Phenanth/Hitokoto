const state = {
	amount: 5,
	finished: 0,
	notFinished: 5
}

const getters = {
	showTodos: function (state) {
		let todos = {
			amount: state.amount,
			finished: state.finished,
			notFinished: state.notFinished
		}
		return todos
	}
}

const actions = {
	changeState: function ({ commit }, opts) {
		commit('CHANGESTATE', opts)
	}
}

const mutations = {
	CHANGESTATE: function (state, opts) {
		state.finished += opts.finishedOpt
		state.notFinished += opts.notFinishedOpt
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}