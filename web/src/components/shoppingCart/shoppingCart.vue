<template>
	<div class="choppingCartContainer">
		<shoppingCartHeader></shoppingCartHeader>

		<div class="shoppingCartContent">
			<div class="goods" v-for="(obj,index) in goods">
				<div class="goodstop clearfix">
					<div class="goodstop_left clearfix">
						<div class="goodstop_left_left"><span class="iconfont icon-dagou1" v-bind:class="{selectedStyle:obj.selected}" @click=selectedStyle(index,$event)></span></div>
						<div class="goodspic"><img src="../../assets/imgs/11.jpg" height="247" width="106"></div>
					</div>
					<div class="goodstop_middle">
						<p class="goodsname">{{obj.name}}</p>
						<p class="goodsnorms">{{obj.color+'，'+obj.size}}</p>
						<p class="goodsqty">
							<span class="jian" @click=decrease(index)>-</span><span class="realqty">{{obj.count}}</span><span class="jia" @click=increase(index)>+</span>
						</p>
					</div>
					<div class="goodstop_right">
						<p class="goodsprice">￥{{obj.price}}</p>
						<p class="goodsdel"><span class="iconfont icon-lajixiang" @click=delgoods(index)></span></p>
					</div>
					
				</div>
				<div class="goodsbottom">
					<span class="total">合计：<span class="totalprice">￥{{obj.count*obj.price}}</span></span>
					<span class="totalqty">共{{obj.count}}件</span>
				</div>
			</div>
		</div>

		<!-- <shoppingCartSkip></shoppingCartSkip> -->
		<div class="shoppingCart_Footer">
			<span class="iconfont icon-dagou1" :class="{selectedStyle:allSelected}" @click=allSelectedStyle></span>
			<span class="quanxuan">全选</span>
			<span class="heji">合计：</span>
			<span class="shoppingCart_Footer_totalprice">￥{{totalPrice}}</span>
			<span class="settlement">结算({{totalCount}})</span>
		</div>
	</div>
</template>

<script type="text/javascript">
	import './shoppingCart.scss'
	import '../../assets/iconfont/iconfont.css'
	import shoppingCartHeader from './shoppingCartHeader/shoppingCartHeader.vue'
	// import shoppingCartSkip from ''
	// shoppingCartSkip 路径未写
	import http from '../../utils/HttpClient.js'

	export default {
		components:{
			shoppingCartHeader:shoppingCartHeader,
			// shoppingCartSkip:shoppingCartSkip,
		},
		data(){
			return {
				goods:[{color:'深灰色',selected:true,count:12,name:'softal年汤奶昔短袖PLPO山',price:198,size:'S'},{color:'亚麻色',selected:true,count:5,name:'softal年汤奶昔短袖PLPO山',price:198,size:'S'},{color:'深灰色',selected:true,count:12,name:'softal年汤奶昔短袖PLPO山',price:198,size:'S'},{color:'深灰色',selected:true,count:12,name:'softal年汤奶昔短袖PLPO山',price:198,size:'S'}],
				api:'',
				allSelected:'',
				totalPrice:0,
				totalCount:0,
			}
		},
		methods:{
			selectedStyle:function(idx,e){
				if(this.goods[idx].selected==true){
					this.goods[idx].selected=false
					// this.goods传回数据库
				}else{
					this.goods[idx].selected=true
					// this.goods传回数据库
				}
				// console.log(this.goods[idx])
				// 还要改变数据库信息
				
				// 执行一次判断全选反选
				this.judgeAll();
				
			},
			allSelectedStyle:function(e){
				
				if(this.allSelected){
					this.allSelected=false
					this.goods.forEach(function(item){
						item.selected=false
					})
					// this.goods传回数据库,还要改变数据库信息
				}else{
					this.allSelected=true
					this.goods.forEach(function(item){
						item.selected=true
					})
					// this.goods传回数据库,还要改变数据库信息
				}

				// 计算一下合计的数量价格
				this.judgeQtyPrice();
			},
			delgoods:function(idx){
				this.goods.splice(idx,1)
				// 还要改变数据库信息
 
				// 计算一下合计的数量价格
				this.judgeQtyPrice();
			},
			increase:function(idx){
				// 确定到某一个对象,需要增加他的count。。。。还要改变数据库信息
				this.goods[idx].count++

				// 计算一下合计的数量价格
				this.judgeQtyPrice();

			},
			decrease:function(idx){
				// 确定到某一个对象,需要减少他的count。。。。还要改变数据库信息
				if(this.goods[idx].count>0){
					this.goods[idx].count--

					// 计算一下合计的数量价格
					this.judgeQtyPrice();
				}
			},
			judgeAll:function(){
				let isAllSelected =true;
				let totalPrice=0;
				let totalCount=0;
				this.goods.forEach(function(item){
					if(!item.selected){
						isAllSelected=false
					}else{
						totalPrice+=item.count*item.price
						totalCount+=item.count
					}

				})
				this.totalPrice=totalPrice;
				this.totalCount=totalCount;
				this.allSelected=isAllSelected
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
		},
		created(){

			if(this.api){
				http.post('api').then(response=>{
					console.log(response)
					this.goods=response;
				})
			}
			// 执行一次判断全选反选
			setTimeout(function(){
				this.judgeAll();
			}.bind(this),100)	
		}
	}
</script>