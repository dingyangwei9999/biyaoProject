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
			var footRouter = window.location.hash.slice(2);
			console.log(footRouter,this,$('.classify'))
			switch (footRouter){
				case "classify":
					$('#classify').css('color','red')
					$('#classify i').css('color','red')
					break;
			}
		}
	}
</script>