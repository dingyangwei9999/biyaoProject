<template>
	<div class="orderPage_Footer clearfix">
		<p>实付款：<span> ￥{{totalPrice}}</span></p>
		<span class="orderPage_settlement" :class="{activeopa:classNameIsChange}" @touchstart="classNameChange" @touchend="classNameNotChange" >结算</span>
	</div>
</template>

<script type="text/javascript">
	import $ from 'jquery'
	import erp from '../../../global.js'
	import './orderPageFooter.scss'
	import '../../../assets/iconfont/iconfont.css'

	export default {
		components:{
			
		},
		data(){
			return {
				goods:[{color:'深灰色',selected:true,count:12,name:'softal年汤奶昔短袖PLPO山',price:198,size:'S'},{color:'亚麻色',selected:true,count:5,name:'softal年汤奶昔短袖PLPO山',price:198,size:'S'},{color:'深灰色',selected:true,count:12,name:'softal年汤奶昔短袖PLPO山',price:198,size:'S'},{color:'深灰色',selected:true,count:12,name:'softal年汤奶昔短袖PLPO山',price:198,size:'S'}],
				api:erp.account,
				classNameIsChange:false,
				totalPrice:0,

			}
		},
		methods:{
			classNameChange:function(){
				this.classNameIsChange=true;
			},
			classNameNotChange:function(){
				this.classNameIsChange=false;
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

			// 		this.calculatePrice();
			// 	})
			// }
			// // 有数据之后删掉此行
			// this.calculatePrice();

			if(sessionStorage.getItem('id')){
				if(this.api){
					console.log('页面请求中ing')
					$.post(this.api+'readCart',{userId:sessionStorage.getItem('id')},function(response){
						console.log(response)
						this.goods = response;

						this.judgeQtyPrice();
					}.bind(this))
				}
			}

		}
	}
</script>