<!DOCTYPE html>
<template>
	<div class="controller container-fluid">
		<!-- Header -->
		<div class="usr-header">
			<h2>Controller</h2>
			<!-- Navigation to User Info. page -->
			<img src="../../static/svg/set.svg" height="4.5%" v-on:click="goTo('/user/userinfo')">
		</div>

		<!-- Icon and Username -->
		<div class="usr-user">
			<div id="circle">
				<img src="../../static/svg/Smile.svg" width="45px">
			</div>
			<span>User Name</span>
		</div>

		<!-- Control Bar -->
		<div class="ctl-boxs">
			<div class="ctl-box" v-on:click="alertNotFinished()">
				<img src="../../static/svg/electrical.svg" height="50%">
				<span>Switches</span>
			</div>
			<div class="ctl-box" v-on:click="alertNotFinished()">
				<img src="../../static/svg/video.svg" height="50%">
				<span>Cameras</span>
			</div>
			<div class="ctl-box" v-on:click="alertNotFinished()">
				<img src="../../static/svg/lights.svg" height="50%">
				<span>Lights</span>
			</div>
			<div class="ctl-box" v-on:click="alertNotFinished()">
				<img src="../../static/svg/operation.svg" height="50%">
				<span>Humidity</span>
			</div>
			<div class="ctl-box" v-on:click="alertNotFinished()">
				<img src="../../static/svg/warning.svg" height="50%">
				<span>Safety</span>
			</div>
			<div class="ctl-box" v-on:click="alertNotFinished()">
				<img src="../../static/svg/Category.svg" height="50%">
				<span>More</span>
			</div>
		</div>

	</div>
</template>
<script>
import router from '../router'
export default {
	name: 'controller',
	methods: {
		goTo: function (routes) {
			router.push(routes)
		},
		alertNotFinished: function () {
			alert('Function not finished.')
		}
	}
}
</script>
<style>
.usr-header > h2 {
	color: #332B05;
}

.usr-header {
	top: 0%;
	left: 0%;
	height: 15%;
	width: 100%;
	position: fixed;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	background-color: #FEDB42;
}

.usr-user {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 20%;
	left: 0px;
	top: 15%;
	position: fixed;
	background-color: #FEDB42; /* Yellow */
	box-shadow: 0px 1px 5px lightgray;
	font-size: 20px;
}

#circle { 
	width: 80px; 
	height: 80px; 
	display: flex;
	justify-content: center;
	align-items: center;
	background: #332B05; /* Dark */
	-moz-border-radius: 40px; 
	-webkit-border-radius: 40px; 
	border-radius: 40px; 
	margin-bottom: 2%;
} 
/* #E6D588  Lighter Yellow for text in dark backgrounds. */

/*.nav-tab {
	position: fixed;
	top: 35%;
	left: 0%;
	width: 100%;
	height: 8%;
	color: #E6D588;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #332B05; 
	font-size: 20px;
}
*/
.usr-header > img {
	position: fixed;
	right: 3%;
	top: 9%;
}

.ctl-boxs {
	position: fixed;
	top: 35%;
	left: 0px;
	width: 100%;
	height: 47%;
	display: flex;
	overflow: auto;
	justify-content: space-around;
	flex-wrap: wrap;
	margin-top: 15px;
	padding: 5%;
}

.ctl-box {
	width: 35%;
	height: 100px;
	margin-bottom: 25px;
	background-color: #332B05; /* Dark background */
	-webkit-border-radius: 15px;
	-moz-border-radius: 15px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.ctl-box > span {
	color: #FEDB42;
}
</style>