<!DOCTYPE html>
<template>
	<div class="userinfo container-fluid">
		<!-- Header -->
		<div class="usrinfo-header">
			<div class="usrinfo-back">
				<img src="../../static/svg/back.svg" width="25px">
				<span v-on:click="goTo('/user/controller')">返回</span>
			</div>
			<h2>用户信息</h2>
		</div>

		<!-- Icon and Username -->
		<div class="usrinfo-user">
			<div id="circle">
				<img src="../../static/svg/Smile.svg" width="45px">
			</div>
			<span>用户名</span>
		</div>

		<!-- User Info. -->
		<div class="usrinfo-info">
			<div class="info-box">
				<span class="info-text">ID</span>
				<span class="info-text gray">2015210405001</span>
			</div>
			<div class="info-box">
				<span class="info-text">性别</span>
				<span class="info-text gray">F.</span>
			</div>
			<div class="info-box">
				<span class="info-text">联系电话</span>
				<span class="info-text gray">18058395082</span>
			</div>
			<div class="info-box">
				<span class="info-text">微信账号</span>
				<span class="info-text gray">???</span>
			</div>
		</div>

		<div class="usrinfo-ctl">
			<button class="btn btn-logout" v-on:click="alertNotFinished()">注销</button>
		</div>
	</div>
</template>
<script>
import router from '../router'
export default {
	name: 'userinfo',
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
.userinfo {
	display: flex;
	justify-content: center;
	width: 100%;
}

.usrinfo-header > h2 {
	color: #332B05;
}

.usrinfo-header {
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

.usrinfo-back {
	position: fixed;
	display: flex;
	align-items: center;
	left: 0px;
	top: 10%;
	margin-left: 1%;
}

.usrinfo-back > span, .usrinfo-user {
	font-size: 20px;
}

.usrinfo-user {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 20%;
	left: 0px;
	top: 15%;
	position: fixed;
	background-color: #FEDB42;
	box-shadow: 0px 1px 5px lightgray;
}

#circle { 
	width: 80px; 
	height: 80px; 
	display: flex;
	justify-content: center;
	align-items: center;
	background: #332B05; 
	-moz-border-radius: 40px; 
	-webkit-border-radius: 40px; 
	border-radius: 40px; 
	margin-bottom: 2%;
} 

.usrinfo-info {
	position: fixed;
	top: 35%;
	left: 0%;
	width: 100%;
	height: 50%;
	display: flex;
	flex-direction: column;
}

.info-box {
	height: 15%;
	width: 100%;
	margin-top: 5px;
	padding: 20px;
	border-bottom: 1px solid lightgray;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.info-text {
	font-size: 18px;
}

span.gray {
	color: gray;
}

.usrinfo-ctl {
	position: fixed;
	bottom: 18%;
	width: 100%;
}

.btn-logout {
	width: 50%;
	background-color: #332B05;
	color: #E6D588;
}

.btn-logout:active, .btn-logout:hover {
	color: #E6D588;
	border: 1px solid #332B05;
}
</style>