<!DOCTYPE html>
<template>
	<div class="reminder container-fluid">
		<div class="row">
			<div class="reminder-top">
				<div class="reminder-header">
					<h2>Reminder</h2>
				</div>
				<div class="reminder-record">
					<div>
						<h4>1</h4>
						<h4>已完成</h4>
					</div>
					<div>
						<h4>2</h4>
						<h4>未完成</h4>
					</div>
				</div>
			</div>
			<div class="reminder-middle">
				<div class="reminder-content">
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
	.reminder-top{
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
	.reminder-header > h2 {
		color: #332B05;
	}

	.reminder-header {
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
	.reminder-record{
		margin-top: 35%;
		display: flex;
		flex-basis: 100%;
		justify-content: space-around;
		align-items: center;
	}
	.reminder-middle{
		position: fixed;
		display: flex;
		flex-wrap: wrap;
		left: 0px;
		top: 30%;
		width: 100%;
		height: 54%;
	}
	.reminder-content{
		overflow: auto;
		height: 100%;
		width: 100%;
		display: flex;
		background-color: white;
	}
	.reminder-content ul{
		padding-left: 0px;
		width: 100%;
	}
	.reminder-content li{
		background-color: white;
		display: block;
		list-style: none;
		width: 100%;
		height: 20%;
		border-bottom: 1px solid black;
	}
	.reminder-content li:last-child{
		border-bottom: 0px solid black;
	}
</style>