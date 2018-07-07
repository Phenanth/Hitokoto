<!DOCTYPE html>
<template>
	<div class="loading">
	<img src="../../static/svg/life.svg" width="35%">
	</div>
</template>
<script>
import router from '../router'
export default {
	name: 'loading',
	mounted: function () {
		setTimeout(() => {
			router.push('/index')
		}, 1600)
	}
}
</script>
<style>
.loading {
	display: flex;
	flex-direction: column;
	position: fixed;
	top: 0px;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
	background-color: #FEDB42;
}
</style>