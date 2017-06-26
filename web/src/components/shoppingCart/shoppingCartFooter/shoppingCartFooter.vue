<template>
	<div class="shoppingCart_Footer">
		<span class="iconfont icon-dagou1" :class="{selectedStyle:allSelected}" @click=selectedStyle></span>
		<span class="quanxuan">全选</span>
		<span class="heji">合计：</span>
		<span class="shoppingCart_Footer_totalprice">￥{{totalPrice}}</span>
		<span class="settlement">结算({{totalCount}})</span>
	</div>
</template>

<script type="text/javascript">
	import './shoppingCartFooter.scss'
	import '../../../assets/iconfont/iconfont.css'

	export default {
		components:{
			
		},
		data(){
			return {
				goods:[{color:'深灰色',selected:true,count:12,name:'softal年汤奶昔短袖PLPO山',price:198,size:'S'},{color:'深灰色',selected:true,count:12,name:'softal年汤奶昔短袖PLPO山',price:198,size:'S'},{color:'深灰色',selected:true,count:12,name:'softal年汤奶昔短袖PLPO山',price:198,size:'S'},{color:'深灰色',selected:true,count:12,name:'softal年汤奶昔短袖PLPO山',price:198,size:'S'}],
				api:'',
				allSelected:'',
				totalPrice:0,
				totalCount:0,

			}
		},
		methods:{
			selectedStyle:function(e){
				
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
				let totalPrice=0;
				let totalCount=0;
				this.goods.forEach(function(item){
					if(item.selected){
						console.log(111)
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
		},
		updated(){
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
			
		}
	}
</script>