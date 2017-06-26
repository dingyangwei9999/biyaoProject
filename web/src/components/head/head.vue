<template>
	<div class="member-top">
			<div class="member-back"  @click='backGo'>
				<i class="iconfont icon-danzuokuohao"></i>
			</div>
			<div class="member-msg">
				<p>{{textValue}}</p>
			</div>
			<div class="member-menu"></div>
	</div>
</template>
<script type="text/javascript">
	import './head.scss'
	import { mapGetters, mapActions } from 'vuex'
	export default{
		data:function(){
			return{
				textValue:'分类'
			}
		},
		methods:{
			backGo:function(){
				console.log(9999,this.$router)
				this.$router.go(-1);
				// history.go(-1)
			}
			
		},
		mounted(){
			var footRouter = window.location.hash.slice(2);
			
		}
	}
</script>