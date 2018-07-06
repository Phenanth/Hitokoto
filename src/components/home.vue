<!DOCTYPE html>
<template>
	<div class="home container-fluid">
		<div class="row">
			<div class="home-top">
				<div class="home-header">
					<h2>Home</h2>
				</div>
				<div class="home-triangle">
					<div class="triangleLeft"></div>
					<div class="triangleRight"></div>
				</div>
				<div class="home-dot">
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
			<div class="home-middle">
				<div class="home-picture">
					<div>
						<img src="../../static/svg/word.svg" height="75%">&nbsp;&nbsp;
						<h4>每日一言</h4>
						<img src="../../static/svg/divide.svg" height="100%">
						<img src="../../static/svg/word.svg" height="75%">&nbsp;&nbsp;
						<h4>测试体质</h4>
					</div>
				</div>
				<div class="home-content">
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
	.home-top{
		padding-top: 15%;
		position: fixed;
		display: flex;
		flex-wrap: wrap;
		top:0px;
		left: 0px;
		background-color: #FEDB42;
		width: 100%;
		height: 35%;
		box-shadow:0px 1px 5px lightgray;
	}
	.home-triangle{
		margin-top:15%;
		display: flex;
		justify-content: space-between;
		align-self: flex-end;
		width: 100%;
		flex-basis: 100%;
	}
	.home-header > h2 {
			color: #332B05;
		}

	.home-header {
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
	.home-dot {
		flex-basis: 100%;
		display: flex;
		justify-content: center;
		align-self: flex-end;
	}
	.home-dot div{
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
	.home-middle{
		position: fixed;
		display: flex;
		flex-wrap: wrap;
		top: 35%;
		left: 0px;
		width: 100%;
		height: 49%;
	}
	.home-picture{
		padding:20px;
		padding-top: 0px;
		padding-bottom: 0px;
		height: 22%;
		flex-basis: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom:1px solid lightgray;
	}
	.home-picture div{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 42%;
		height: 55%;
		/*background: lightgray;*/
	}
	.home-content{
		background-color: #F5F5F5;
		overflow: auto;
		height: 78%;
		width: 100%;
		display: flex;
	}
	.home-content li{
		background-color: white;
		margin-bottom:15px;
		display: block;
		list-style: none;
		height: 35%;
		width: 100%;
	}
	.home-content li:last-child{
		margin-bottom:0px;
	}
	.home-content ul{
		padding-left: 0px;
		width: 100%;
	}
</style>