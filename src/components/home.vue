<!DOCTYPE html>
<template>
	<div class="home container-fluid">
		<div class="row">
			<div class="top">
				<div class="trans">1</div>
				<div class="triangle">
					<div class="triangleLeft"></div>
					<div class="triangleRight"></div>
					
				</div>
				<div class="dot">
					<div class="dot1"></div>
					<div class="dot2"></div>
					<div class="dot3"></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script></script>
<style>
	.triangleLeft,.triangleRight{
		width: 0;
		height: 0;
		border-width: 13px;
		border-style: solid;
		border-color: transparent #332B05  transparent transparent;
	}
	.triangleRight{
		border-color: transparent transparent transparent #332B05;
		float: right;
	}
	.top{
		position: fixed;
		display: flex;
		flex-wrap: wrap;
		align-content: space-between;
		top:0px;
		left: 0px;
		background-color: #FEDB42;
		width: 100%;
		height: 20%;
	}
	.trans {
		height: 10px;
	}
	.triangle{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		flex-basis: 100%;
	}
	.dot {
		flex-basis: 100%;
		display: flex;
		justify-content: center;
	}
	.dot1, .dot2, .dot3{
		width: 10px;
		height: 10px;
		border-width: 1px;
		border-style: solid;
		border-color: black;
		border-radius:5px;
		margin-left: 1%;
		margin-right: 2%;
		margin-bottom: 2%;
	}
</style>