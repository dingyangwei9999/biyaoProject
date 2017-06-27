<template>
	<div class="mine-container">
		<div class="mine-top">
				<div class="mine-back" @click="back">
					<i class="iconfont icon-danzuokuohao"></i>
				</div>
				<div class="mine-msg">
					<p>客服消息</p>
				</div>
				<div class="mine-menu"></div>
			</div>
		<div class="pic">
			<img src="../../../../upload/emptymessage.png" height="495" width="375">
		</div>
	</div>
</template>

<script>
	import './message.scss';

	export default{
		components:{

		},
		methods:{
			back:function(){
				this.$router.go(-1)
			}
		}
		
	}
</script>	