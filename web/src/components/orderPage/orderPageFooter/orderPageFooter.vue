<template>
	<div class="orderPage_Footer clearfix">
		<p>实付款：<span> ￥2343</span></p>
		<span class="orderPage_settlement" :class="{activeopa:classNameIsChange}" @touchstart="classNameChange" @touchend="classNameNotChange" >结算</span>
	</div>
</template>

<script type="text/javascript">
	import './orderPageFooter.scss'
	import '../../../assets/iconfont/iconfont.css'

	export default {
		components:{
			
		},
		data(){
			return {
				goods:[{a:1,selected:true},{b:2,selected:true},{c:1,selected:true},{d:1,selected:false}],
				api:'',
				classNameIsChange:false,
			}
		},
		methods:{
			classNameChange:function(){
				this.classNameIsChange=true;
			},
			classNameNotChange:function(){
				this.classNameIsChange=false;
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