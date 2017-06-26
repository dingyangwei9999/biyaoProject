<template>
	<div class="shoppingCart_Header">
		<div class="shoppingCart_HeaderToBack" @click=backTo>
			<span class="iconfont icon-danzuokuohao"></span>
		</div>
		<p class="shoppingCart_Header_title">购物车</p>
		<div class="BackToHome"><span class="iconfont icon-fenlei"></span></div>
	</div>
</template>

<script type="text/javascript">
	import './shoppingCartHeader.scss'
	import '../../../assets/iconfont/iconfont.css'

	export default {
		component:{
		
		},
		data(){
			return {
				
			}
		},
		methods:{
			backTo:function(){
				history.back()
			},
		},
		created(){
			
		}
	}
</script>