<template>
	<div class="member-container">
		<div class="member-top">
			<div class="member-back" @click="back">
				<i class="iconfont icon-danzuokuohao"></i>
			</div>
			<div class="member-msg">
				<p>个人中心</p>
			</div>
			<div class="member-menu"></div>
		</div>
		<div class="member-main">
			<div class="m-title">
				<div class="m-ml">
					<img src="./preview-1497345763730.jpg" alt="">
				</div>
				<div class="m-mr">
					<p class="member-name">你是一个傻子</p>
				</div>
				<div class="m-mz">
					<div class="waitPay">
						<p>
							<i class="iconfont icon-daifukuan"></i>
							待付款
						</p>
					</div>
					<div class="exitMoney">
						<p>
							<i class="iconfont icon-tuikuan"></i>
							退款/售后
						</p>
					</div>
				</div>
			</div>
			<div class="all-data">
				<div class="myOrder">
					<span>我的订单</span>
					<i class="iconfont icon-danyoukuohao"></i>
				</div>
				<div class="myAddress">
					<span>我的地址</span>
					<i class="iconfont icon-danyoukuohao"></i>
				</div>
				<div class="changePsw" @click="change">
					<span>修改密码</span>
					<i class="iconfont icon-danyoukuohao"></i>
				</div>
				<div class="kefuzhongxin">
					<span>客服中心(7*24小时服务)</span>
					<i class="iconfont icon-danyoukuohao"></i>
				</div>
				<div class="kefuMsg">
					<span>客服新消息</span>
					<i class="iconfont icon-danyoukuohao"></i>
				</div>
				<div class="need">
					关注'需要'，微信服务号获取最新消息
				</div>
			</div>
		</div>
		<foot></foot>
	</div>
</template>

<script>
	import './member.scss';
	import Footer from '../foot/foot.vue'


	export default{
		components:{
			'foot':Footer
		},
		methods:{
			back:function(){
				this.$router.go(-1)
			},
			change:function(){
				this.$store.dispatch('change')
			}
		}
	}
</script>	