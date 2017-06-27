<template>
	<div class="biyao_foot">
		<router-link to id='home' class='footCss'>
			<i class='iconfont icon-shouye-copy'></i>
			<div>首页</div>
		</router-link>
		<router-link to  id='classify'  class='footCss'>
			<i class='iconfont icon-category'></i>
			<div>分类</div>
		</router-link>		
		<router-link to id='shopcart' class='footCss'>
			<i class='iconfont icon-gouwuche'></i>
			<div>购物车</div>
		</router-link>	
		<router-link to id='my' class='footCss'>
			<i class='iconfont icon-wode'></i>
			<div>个人中心</div>
		</router-link>				
	</div>
</template>
<script type="text/javascript">
	import './foot.scss'
	import { mapGetters, mapActions } from 'vuex'
	import $ from 'jquery'
	export default{

		data:function(){
			return{}
		},
		methods:{
			
		},
		mounted(){
			showFoot:{
					$('#classify').css('color','#B768A5')
					$('#classify i').css('color','#B768A5')	
			}
			var footRouter = window.location.hash.slice(2);
			
			switch (footRouter){
				case "classify":
					this.showFoot;
					break;
				case "member":
				 	this.showFoot;

					break;
				case "shopcart":
					this.showFoot;
					break;
				case "":
					this.showFoot;
			}
			return
		}
	}
</script>