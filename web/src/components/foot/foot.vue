<template>
	<div class="biyao_foot">
		<router-link :to = "{path:'/'}" id='home' class='footCss'>
			<i class='iconfont icon-shouye-copy'></i>
			<div>首页</div>
		</router-link>
		<router-link :to ="{path:'/classify'}" id='classify'  class='footCss'>
			<i class='iconfont icon-category'></i>
			<div>分类</div>
		</router-link>		
		<router-link :to="{path:'/shoppingCart'}" id='shopcart' class='footCss'>
			<i class='iconfont icon-gouwuche'></i>
			<div>购物车</div>
		</router-link>	
		<!-- <router-link :to ="{path:'/member'}"  id='my' class='footCss'>
			<i class='iconfont icon-wode'></i>
			<div>个人中心</div>
		</router-link>	 -->	
		<div id='my' class='footCss' @click='clickIf'>
			<i class='iconfont icon-wode'></i>
			<div>个人中心</div>
		</div>		
	</div>
</template>
<script type="text/javascript">
	import './foot.scss'
	import { mapGetters, mapActions } from 'vuex'
	import $ from 'jquery'
	import router from '../../router/index'
	export default{
		data:function(){
			return{
				sessionId:null
			}
		},
		methods:{
			clickIf:function(){
				if(!this.sessionId){
					router.push({name:'logins'})
				}else{
					router.push({name:'member'})
				}
			}
			
		},
		mounted(){
			this.sessionId = window.sessionStorage.getItem('id');
			var footRouter = window.location.hash.slice(2);
			switch (footRouter){
				case "classify":
					$('#classify').css('color','#B768A5')
					$('#classify i').css('color','#B768A5')	
					break;
				case "shopcart":
					$('#shopcart').css('color','#B768A5')
					$('#shopcart i').css('color','#B768A5')
					break;
				case "":
					$('#home').css('color','#B768A5')
					$('#home i').css('color','#B768A5')					
					break;
				default:
					$('#my').css('color','#B768A5')
					$('#my i').css('color','#B768A5')
				break;				
			}
			return
		}
	}
</script>