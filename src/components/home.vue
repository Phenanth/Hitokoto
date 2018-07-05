<!DOCTYPE html>
<template>
	<div class="home container-fluid">
		<div class="row">
			<div class="top">
				<div class="triangle">
					<div class="triangleLeft"></div>
					<div class="triangleRight"></div>
				</div>
				<div class="dot">
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
			<div class="middle">
				<div class="picture">
					<div></div>
					<div></div>
				</div>
				<div class="content">
					<ul>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
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
	.triangleLeft,.triangleRight:hover{
		cursor: pointer;
	}
	.triangleRight{
		border-color: transparent transparent transparent #332B05;
		float: right;
	}
	.top{
		padding-top: 15%;
		position: fixed;
		display: flex;
		flex-wrap: wrap;
		top:0px;
		left: 0px;
		background-color: #FEDB42;
		width: 100%;
		height: 30%;
		box-shadow:0px 1px 5px lightgray;
	}
	.triangle{
		display: flex;
		justify-content: space-between;
		align-self: flex-end;
		width: 100%;
		flex-basis: 100%;
	}
	.dot {
		flex-basis: 100%;
		display: flex;
		justify-content: center;
		align-self: flex-end;
	}
	.dot div{
		width: 10px;
		height: 10px;
		background: lightgray;
		border-width: 1px;
		border-style: solid;
		border-color: #BEBEBE;
		border-radius:5px;
		margin-left: 1%;
		margin-right: 2%;
		margin-bottom: 2%;
	}
	.middle{
		position: fixed;
		display: flex;
		flex-wrap: wrap;
		top: 30%;
		left: 0px;
		width: 100%;
		height: 54%;
	}
	.picture{
		height: 22%;
		flex-basis: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-bottom:1px solid lightgray;
	}
	.picture div{
		width: 42%;
		height: 55%;
		background: lightgray;
		border-radius: 5px;
	}
	.content{
		background-color: #F5F5F5;
		overflow: auto;
		height: 78%;
		width: 100%;
		display: flex;
	}
	li{
		background-color: white;
		margin-bottom:15px;
		display: block;
		list-style: none;
		height: 35%;
		width: 100%;
	}
	li:last-child{
		margin-bottom:0px;
	}
	ul{
		padding-left: 0px;
		width: 100%;
	}
</style>