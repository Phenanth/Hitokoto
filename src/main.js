// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.component('reminder-item', {
	data: function () {
		return {
			over: 0
		}
	},
	methods: {
		toggleTodo: function () {
			let opt = 0
			if (this.over) {
				opt = 1
			} else {
				opt = -1
			}
			this.over = !this.over
		}
	},
	props: ['title'],
	template: '<div class="todo-item" v-on:click="toggleTodo()"><img src="../static/svg/selected.svg" width="20%" v-if="over" style="float:left;"><h4 v-else>{{ title }}</h4></div>'
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
