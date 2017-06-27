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
							<img :src="upload+obj.productPreviewImg">
						</div>
						<div class="orderGoods_middle">
							<p>{{obj.name}}</p>
							<p>{{obj.color+','+obj.size}}</p>
						</div>
						<div class="orderGoods_right">
							<p class="orderGoods_right_price">￥<span>{{obj.price}}</span></p>
							<p class="orderGoods_right_qty">&times<span>{{obj.count}}</span></p>
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
					<p>合计：<span>￥{{totalPrice}}</span></p>
					<p>共{{totalCount}}件</p>
				</div>
			</div>
			<div class="orderNote">
				<p>发票信息<span>开具发票</span><span class="box" @click="selectedBox"></span></p>
			</div>
		</div>
		<div class="orderPage_Footer clearfix">
			<p>实付款：<span> ￥{{totalPrice}}</span></p>
			<span class="orderPage_settlement">结算</span>
		</div>
	</div>
</template>

<script type="text/javascript">
	import $ from 'jquery'
	import orderPageHeader from './orderPageHeader/orderPageHeader.vue'
	import'./orderPage.scss'
	import '../../assets/iconfont/iconfont.css'
	import http from '../../utils/HttpClient.js'
	import erp from '../../global.js'
	export default {
		components:{
			orderPageHeader:orderPageHeader,
		},
		data(){
			return {
				goods:[],
				upload:erp.uploadUrl,
				api:erp.account,
				classNameIsChange:false,
				selectedbox:false,
				totalPrice:0,
				totalCount:0,
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
			judgeQtyPrice:function(){
				let totalPrice=0;
				let totalCount=0;
				this.goods.forEach(function(item){
					if(item.selected){
						totalPrice+=item.count*item.price
						totalCount+=item.count
					}
				})
				this.totalPrice=totalPrice;
				this.totalCount=totalCount;
			},
			calculatePrice:function(){
				let totalPrice=0;
				this.goods.forEach(function(item){
					if(item.selected){
						totalPrice+=item.count*item.price
					}
				})
				this.totalPrice=totalPrice;
				console.log(totalPrice)
			},
		},
		created(){
			// if(this.api){
			// 	http.post('api').then(response=>{
			// 		console.log(response)
			// 		this.goods=response;

			// 		this.judgeQtyPrice()
			// 	})
			// }
			// // 有数据后删掉此行
			// this.judgeQtyPrice()
			
			if(sessionStorage.getItem('id')){
				if(this.api){
					console.log('页面请求中ing')
					
					$.post(this.api+'readCart',{userId:sessionStorage.getItem('id')},function(response){
						console.log(response)
						this.goods = response;

						this.judgeQtyPrice();
						this.calculatePrice();
					}.bind(this))
					
					
				}
			}
		}
	}
</script>