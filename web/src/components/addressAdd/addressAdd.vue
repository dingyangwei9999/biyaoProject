<template>
	<div class="address-container">
		<div class="address-top">
			<div class="address-back" @click="back">
				<i class="iconfont icon-danzuokuohao"></i>
			</div>
			<div class="address-msg">
				<p>添加收货地址</p>
			</div>
			<div class="address-menu"></div>
		</div>
		<div class="address-main">
			<div class="div1">
				<span>收货人姓名</span>
				<input type="text">
			</div>
			<div class="div1">
				<span>手机号码</span>
				<input type="text">
			</div>
			<div class="div1">
				<span>省份</span>
				<input type="text">
			</div>
			<div class="div1">
				<span>城市</span>
				<input type="text">
			</div>
			<div class="div1">
				<span>区县</span>
				<input type="text">
			</div>
			<div class="div1">
				<span>街道</span>
				<input type="text">
			</div>
			<button class="btn">保存地址</button>
		</div>
		<foot></foot>
	</div>
</template>

<script>
	import './addressAdd.scss';
	import Footer from '../foot/foot.vue'


	export default{
		components:{
			'foot':Footer
		},
		methods:{
			back:function(){
				this.$router.go(-1)
			}
		}
	}
</script>