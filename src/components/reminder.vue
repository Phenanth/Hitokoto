<!DOCTYPE html>
<template>
	<div class="reminder container-fluid">
		<div class="row">
			<div class="reminder-top">
				<div class="reminder-header">
					<h2>Reminder</h2>
					<img src="../../static/svg/add.svg" height="4.5%" v-on:click="alertNotFinished()">
				</div>
				<div class="reminder-record">
					<div>
						<h4>{{ finished }}</h4>
						<h4>已完成</h4>
					</div>
					<div>
						<h4>{{ notFinished }}</h4>
						<h4>未完成</h4>
					</div>
				</div>
			</div>
			<div class="reminder-middle">
				<div class="reminder-content">
					<ul>
						<li>
							<reminder-item v-bind:title="'Misson One'"></reminder-item>
						</li>
						<li>
							<reminder-item v-bind:title="'Misson Two'"></reminder-item>
						</li>
						<li>
							<reminder-item v-bind:title="'Misson Three'"></reminder-item>
						</li>
						<li>
							<reminder-item v-bind:title="'Misson Four'"></reminder-item>
						</li>
						<li>
							<reminder-item v-bind:title="'Misson Five'"></reminder-item>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'reminder',
	data: function () {
		return {
			finished: 0,
			notFinished: 5
		}
	},
	methods: {
		alertNotFinished: function () {
			alert('Function not finished.')
		}
	}
}
</script>
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
	.reminder-header > img {
		position: fixed;
		right: 3%;
		top: 9%;
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
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 1%;
		padding-left: 0px;
		width: 100%;
	}
	.reminder-content li{
		background-color: #332B05;
		display: flex;
		align-items: center;
		list-style: none;
		padding-left: 2%;
		padding-right: 2%;
		width: 95%;
		height: 20%;
		border-bottom: 1px solid black;
		margin-top: 1%;
		margin-bottom: 1%;
		-moz-border-radius: 10px; 
		-webkit-border-radius: 10px; 
	}
	.reminder-content li:last-child{
		border-bottom: 0px solid black;
	}
	.todo-item {
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	.todo-item > h4 {
		color: #E6D588;
	}
</style>