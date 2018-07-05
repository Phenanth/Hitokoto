<!DOCTYPE html>
<template>
	<div class="userinfo container-fluid">
		<!-- Header -->
		<div class="usrinfo-header">
			<div class="usrinfo-back">
				<img src="../../static/svg/back.svg" width="25px">
				<span>Back</span>
			</div>
			<h2>User Info.</h2>
		</div>

		<!-- Icon and Username -->
		<div class="usrinfo-user">
			<div id="circle">
				<img src="../../static/svg/Smile.svg" width="45px">
			</div>
			<span>User Name</span>
		</div>


	</div>
</template>
<script></script>
<style>
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
	background-color:  #FEDB42;
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
</style>