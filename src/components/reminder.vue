<!DOCTYPE html>
<template>
	<div class="reminder container-fluid">
		<div class="row">
			<div class="reminderTop">
				<div class="record">
					<div>
						<div>1</div>
						<div>已完成</div>
					</div>
					<div>
						<div>2</div>
						<div>未完成</div>
					</div>
				</div>
			</div>
			<div class="middle">
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
	.reminderTop{
		padding-top: 15%;
		position: fixed;
		display: flex;
		flex-wrap: wrap;
		top:0px;
		left: 0px;
		background-color: #FEDB42;
		width: 100%;
		height: 20%;
		box-shadow:0px 1px 5px lightgray;
	}
	.record{
		display: flex;
		flex-basis: 100%;
		justify-content: space-around;
		align-items: center;
	}
	.middle{
		top: 20%;
		height: 65%;
	}
	.content{
		height: 100%;
		background-color: white;
	}
	li{
		height: 18%;
		margin-bottom: 0px;
		border-bottom: 1px solid black;
	}
	li:last-child{
		border-bottom: 0px solid black;
	}
</style>