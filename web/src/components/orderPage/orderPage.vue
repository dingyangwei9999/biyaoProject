<template>
	<div class="orderPageContainer">
		<orderPageHeader></orderPageHeader>
		<div class="orderPageContent">
			<div class="recipientAdress" :class="{activeopa:classNameIsChange,activebgd:classNameIsChange}" @touchstart="classNameChange" @touchend="classNameNotChange" @click="ToChooseAdress">
				<p>收货人：王大锤<span class="recipientPhone">18810664785</span></p>
				<p>广东省广州市天河区元岗北路**号</p>
				<span class="iconfont icon-youkuohao"></span>
			</div>
			<div class="adressTip">
				<p><span class="iconfont icon-gantanhao11-copy"></span>因商品存在一定的生产周期，请仔细核实收货地址，提交订单后将不能修改收货地址。</p>
			</div>
			<div class="orderDetails">
				<div class="orderAllGoods">
					<div class="orderAll">
						<p>商品详情</p>
					</div>
					<div class="orderGoods clearfix" v-for="obj in goods">
						<div class="orderGoods_left">
							<img src="../../assets/imgs/11.jpg">
						</div>
						<div class="orderGoods_middle">
							<p>天丝牛仔热裤儿童短裤裤儿童</p>
							<p>藏青 110</p>
						</div>
						<div class="orderGoods_right">
							<p class="orderGoods_right_price">￥<span>123</span></p>
							<p class="orderGoods_right_qty">&times<span>3</span></p>
						</div>
					</div>
				</div>
				<div class="orderDispatching">
					<p>配送方式<span>顺丰快递￥0</span></p>
				</div>
				<div class="orderMessage">
					<textarea class="orderMessage_content" placeholder="输入留言内容"></textarea>
				</div>
				<div class="orderTotal clearfix">
					<p>合计：<span>￥489</span></p>
					<p>共2件</p>
				</div>
			</div>
			<div class="orderNote">
				<p>发票信息<span>开具发票</span><span class="box" @click="selectedBox"></span></p>
			</div>
		</div>
		<orderPageFooter></orderPageFooter>
	</div>
</template>

<script type="text/javascript">
	import orderPageHeader from './orderPageHeader/orderPageHeader.vue'
	import orderPageFooter from './orderPageFooter/orderPageFooter.vue'
	import'./orderPage.scss'
	import '../../assets/iconfont/iconfont.css'
	import http from '../../utils/HttpClient.js'
	export default {
		components:{
			orderPageHeader:orderPageHeader,
			orderPageFooter:orderPageFooter,
		},
		data(){
			return {
				goods:[{a:1,selected:true,value:12},{b:2,selected:true,value:16},{c:1,selected:true,value:1},{d:1,selected:false,value:5}],
				api:'',
				classNameIsChange:false,
				selectedbox:false,
			}
		},
		methods:{
			classNameChange:function(){
				this.classNameIsChange=true;
			},
			classNameNotChange:function(){
				this.classNameIsChange=false;
			},
			ToChooseAdress:function(){
				console.log('后续对接')
			},
			selectedBox:function(e){
				if(e.target.className.indexOf('icon-dagou1')==-1){
					e.target.className+=' iconfont icon-dagou1'
				}else{
					e.target.className='box'
				}
			},
		},
		created(){
			if(this.api){
				http.post('api').then(response=>{
					console.log(response)
					this.goods=response;
				})
			}
		}
	}
</script>