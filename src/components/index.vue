<!DOCTYPE html>
<template>
	<div class="index container-fluid">
		<div class="row">
			<div class="footer">
				<div class="mainFunction" v-on:click="goTo('/reminder')">
					<img src="../../static/svg/reminder.svg" height="55%">
					<span>日程</span>
				</div>
				<div class="mainFunction" v-on:click="goTo('/home')">
					<img src="../../static/svg/home.svg" height="55%">
					<span>首页</span>
				</div>
				<div class="mainFunction" v-on:click="goTo('/user/')">
					<img src="../../static/svg/user.svg" height="55%">
					<span>用户</span>
				</div>
			</div>
		</div>
		<router-view/>
	</div>
</template>
<script>
import router from '../router'
export default {
	name: 'home',
	methods: {
		goTo: function (routes) {
			router.push(routes)
		}
	},
	mounted: function () {
		alert('请手动将浏览器分辨率调到手机屏幕比例以获得最佳体验。')
	}
}
</script>
<style>
.footer {
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: fixed;
	bottom: 0px;
	width: 100%;
	height: 15%;
	padding-left: 2%;
	padding-right: 2%;
	box-shadow:0px -1px 5px lightgray;
}
.mainFunction {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 6px;
	width: 23%;
	height: 62%;
	background-color: #FEDB42;
}
</style>