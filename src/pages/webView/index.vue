<template>
	<view class="webview">
	  <web-view :src="url"></web-view>
	</view>
</template>

<script>
	export default {
        props:[{
            type:String,
            required:true,
            default:''
        }],
	}
</script>

<style>
.webview {
	width: 100vw;
	height: 100vh;
}
</style>

