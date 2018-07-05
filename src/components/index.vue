<!DOCTYPE html>
<template>
	<div class="index container-fluid">
		<div class="row">
			<div class="footer">
				<div class="mainFunction"></div>
				<div class="mainFunction"></div>
					<div class="mainFunction"></div>
				</div>
		</div>
		<router-view/>
	</div>
</template>
<script></script>
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
	width: 15%;
	height: 60%;
	background-color: #FEDB42;
}

</style>