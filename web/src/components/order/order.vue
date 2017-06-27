<template>
	<div class="order-container">
		<div class="order-top">
			<div class="order-back" @click="back">
				<i class="iconfont icon-danzuokuohao"></i>
			</div>
			<div class="order-msg">
				<p>我的订单</p>
			</div>
			<div class="order-menu"></div>
		</div>
		<div class="order-main">
			<div class="div1">
				<div class="div11">
					<p>DK电器</p>
				</div>
				<div class="div12">
					<div class="pic">
						<div class="pic1">
							
						</div>
					</div>
					<div class="text">
						<div class="p1">订单编号：
							<span>111223211</span>
						</div>
						<div class="p2">
							订单金额：
							<span>￥169</span>
						</div>
						<div class="p3">
							订单状态：
							<span>待付款</span>
						</div>
					</div>
					<button class="btns">去付款</button>
				</div>
			</div>
		</div>
		<foot></foot>
	</div>
</template>

<script>
	import './order.scss'
	import Footer from '../foot/foot.vue'

	export default{
		components:{
			foot:Footer
		},
		methods:{
			back:function(){
				this.$router.go(-1)
			}
		}
	}
</script>