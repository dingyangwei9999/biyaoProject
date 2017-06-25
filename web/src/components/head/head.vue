<template>
	<div class="member-top">
			<div class="member-back">
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
			
		},
		mounted(){
			var footRouter = window.location.hash.slice(2);
			
		}
	}
</script>