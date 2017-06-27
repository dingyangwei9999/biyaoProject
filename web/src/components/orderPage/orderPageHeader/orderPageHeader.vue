<template>
	<div class="shoppingCart_Header">
		<div class="shoppingCart_HeaderToBack" :class="{activeopa:classNameIsChange,activebgd:classNameIsChange}" @touchstart="classNameChange" @touchend="classNameNotChange" @click=backTo>
			<span class="iconfont icon-danzuokuohao"></span>
		</div>
		<p class="shoppingCart_Header_title">订单确认</p>
	</div>
</template>

<script type="text/javascript">
	import './orderPageHeader.scss'
	import '../../../assets/iconfont/iconfont.css'
	export default {
		components:{
			
		},
		data(){
			return {
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
			backTo:function(){
				history.back()
			},
		},
		created(){
		}
	}
</script>